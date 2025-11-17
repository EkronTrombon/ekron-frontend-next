import Image from "next/image";
import ImageAboutLeft from '@/app/assets/images/EKR_Home_About.png';
import ImageAboutRight from '@/app/assets/images/EKR_Home_About_2.webp';
import { InteriorBanner } from "../components/InteriorBanner";

export default function AboutPage() {
    return (
        <>
            <InteriorBanner title="about me" />
            <div className="bg-black py-16 md:py-24">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-5">
                    <h2 className="h2 text-white">Web Development Professional</h2>
                    <div className="text-xl text-white">
                        <p>I am a highly skilled and results-oriented Front End Developer with over 18 years of experience in developing and maintaining complex software applications. Driven by a passion for the user experience, my journey blends a deep backend foundation with a special focus on modern frontend development.</p>
                        <h4 className="py-2.5 text-primary">The Professional Journey</h4>
                        <p>My career officially began in Pamplona, Spain, after graduating with an Associate degree in computer applications in 2004. Although I started as a Computer Programmer and Maintenance professional, specializing in Java and working with technologies like JavaScript, XSLT, and SQL to develop tools for electronic recipe systems, content management, and insurance data, my interest in frontend work was always present.</p>
                        <p>My expertise has since evolved, allowing me to deliver high-quality solutions across front-end, back-end, and mobile platforms. I have a strong command of modern front-end technologies, including React, NextJS, TypeScript, and Styling tools like Tailwind CSS and Sass.</p>
                        <p>For the past five years, I have been leveraging these skills as a Frontend Developer at Golden Communications in Newport Beach, California, where I focus on developing and maintaining key web application features, ensuring seamless user experiences, and optimizing performance.</p>
                        <h4 className="py-2.5 text-primary">From Spain to California</h4>
                        <p>Born in Spain, my life took a significant turn in 2018. After meeting my California native wife-to-be, I made the decision to move to the USA—a choice I consider the best I've ever made. This cross-continental move has only fueled my commitment to continuous learning in the tech world.</p>
                        <h4 className="py-2.5 text-primary">Beyond the Screen</h4>
                        <p>When I'm not implementing responsive designs  or working with frameworks, I like to stay active and cheer for my favorite teams. Sports are a major passion, including Basketball (Go Lakers!), Soccer (it's in my Spaniard blood), Cross-fit, and archery. I also maintain my love for music, having played the trombone for 20 years (though it didn't quite make the carry-on in the flight from Spain—maybe one day!).</p>
                    </div>
                    <Image src={ImageAboutLeft} alt="Left Image" className="rounded-lg w-full h-full object-cover order-3" />
                    <Image src={ImageAboutRight} alt="Right Image" className="rounded-lg w-full h-full object-cover order-4" />
                </div>
            </div>
        </>
    );
}