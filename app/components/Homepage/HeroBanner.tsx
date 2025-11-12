import Image from "next/image";
import BannerShape from '@/app/assets/images/EKR_Homepage_Shape.png';

export const HeroBanner = () => {
  return (
    <div className="relative bg-black">
        <div className="relative container mx-auto flex justify-center items-center py-20 md:py-[200px]">
            <h1 className="h1 text-white before:text-site-white after:text-site-white">portfolio</h1>
        </div>
        <div className="absolute bottom-0 flex justify-center w-full">
            <Image className="w-fit object-cover" src={BannerShape} width={1000} height={1000} alt="Background Shape" />
        </div>
    </div>
  )
}
