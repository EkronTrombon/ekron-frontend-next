'use client';

import { useState, FormEvent } from 'react';

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setMessage('');
        setError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Thank you for your message! I will get back to you soon.');
                setFormData({ firstName: '', lastName: '', email: '', comments: '' });
            } else {
                setError(data.message || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/2">
                    <label htmlFor="firstName" className="text-white mb-2 block">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full p-3 bg-transparent border border-gray-500 rounded-md text-white" />
                </div>
                <div className="w-full md:w-1/2">
                    <label htmlFor="lastName" className="text-white mb-2 block">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full p-3 bg-transparent border border-gray-500 rounded-md text-white" />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="text-white mb-2 block">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-transparent border border-gray-500 rounded-md text-white" />
            </div>
            <div>
                <label htmlFor="comments" className="text-white mb-2 block">Comments</label>
                <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} required rows={5} className="w-full p-3 bg-transparent border border-gray-500 rounded-md text-white" />
            </div>
            <div>
                <button type="submit" disabled={submitting} className="button button-primary w-full md:w-auto">
                    {submitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>
            {message && <p className="text-green-500 mt-4">{message}</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
    );
}