import Image from "next/image";
import Link from "next/link";

import AvatarRound from '@/app/assets/images/GC_Avatar_Xabier_Round.png';

export const AvatarMenu = () => {
  return (
    <div className="bg-primary py-16 md:py-24">
        <div className="container mx-auto flex flex-col justify-between items-center gap-5">
            <Image src={AvatarRound} width={160} height={160} alt="Ekron Avatar" className="rounded-full hover:scale-125 hover:cursor-pointer hover:transition-transform hover:ease-in-out hover:duration-300" />
            <ul className="avatar-menu">
                <li><Link href='/'>Home</Link></li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}
