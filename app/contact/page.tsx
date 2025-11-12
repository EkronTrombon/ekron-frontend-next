import Image from "next/image";
import Shape from '@/app/assets/images/EKR_Homepage_Shape.png';
import { Social } from "../components/Social";
import { InteriorBanner } from "../components/InteriorBanner";

export default function ContactPage() {
    return (
        <>
            <InteriorBanner title="contact" />
            <div className="relative bg-black pb-16 md:pb-24">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-[120px]">
                    <div className="w-full md:w-1/2">
                        <h2 className="h2 text-white">Don't let your vision wait, let's work together!</h2>
                        <div className="mt-10 w-fit">
                            <Social />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="contact-form">
                            FORM
                            {/* <?= do_shortcode('[contact-form-7 id="197eb68" title="Contact Form"]'); ?> */}
                        </div>
                    </div>
                    <div className="absolute bottom-0 flex justify-center w-full">
                        <Image className="w-fit object-cover" src={Shape} alt="Background Shape" />
                    </div>
                </div>
            </div>
        </>
    );
}