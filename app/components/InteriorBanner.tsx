import Image from "next/image";
import Shape from '@/app/assets/images/EKR_Homepage_Shape.png';

export const InteriorBanner = ({ title }: { title: string }) => {
  return (
    <section className="relative bg-black">
        <div className="relative container mx-auto flex justify-center items-center py-20 md:py-20">
            <h1 className="h1 text-center text-white before:text-white after:text-white">{ title }</h1>
        </div>
    </section>
  )
}
