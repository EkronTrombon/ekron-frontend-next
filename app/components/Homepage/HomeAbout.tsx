import Image from "next/image";
import Link from "next/link";

import HomeAboutImage from '@/app/assets/images/EKR_Home_About.png';

export const HomeAbout = () => {
  return (
    <div className="bg-primary py-16 md:py-24">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-[120px]">
            <div className="w-full md:w-2/3">
                <h2 className="h2 text-white leading-16">I’m Xabier Remirez<br />a web development professional</h2>
            </div>
            <div className="w-full md:w-1/3">
                <Image className="w-full object-cover rounded-xl" src={HomeAboutImage} width={380} height={380} alt="Home About Image" />
                <div className="mt-10 text-white">Building exceptional websites tailored to your vision for 10+ years. Blending creativity and functionality to deliver stunning digital experiences.</div>
                <div className="mt-10">
                    <Link className="link link--bold link--white" href="/about">About Me</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
