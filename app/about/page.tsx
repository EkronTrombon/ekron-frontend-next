import Image from "next/image";
import ImageAboutLeft from '@/app/assets/images/EKR_Home_About.png';
import ImageAboutRight from '@/app/assets/images/EKR_Home_About.png';
import { InteriorBanner } from "../components/InteriorBanner";

export default function AboutPage() {
    return (
        <>
            <InteriorBanner title="about me" />
            <div className="bg-black py-16 md:py-24">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-5">
                    <h2 className="h2 text-white">Web Development Professional</h2>
                    <div className="text-xl text-white">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent ac sem eget est egestas volutpat. Donec vitae sapien ut libero venenatis faucibus. Etiam ultricies nisi vel augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Phasellus consectetuer vestibulum elit.</div>
                    <Image src={ImageAboutLeft} alt="Left Image" className="rounded-lg w-full h-full object-cover order-3" />
                    <Image src={ImageAboutRight} alt="Right Image" className="rounded-lg w-full h-full object-cover order-4" />
                </div>
            </div>
        </>
    );
}