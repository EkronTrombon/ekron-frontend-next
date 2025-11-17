import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { firstName, lastName, email, comments } = await request.json();

        // Basic validation to ensure all fields are present
        if (!firstName || !lastName || !email || !comments) {
            return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
        }

        // It's highly recommended to use environment variables for credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // Your Gmail address
                pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'ekron77@gmail.com', // The email address you want to receive the form data
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Comments:</strong></p>
                <p>${comments}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
}