import Image from "next/image";
import Link from "next/link";
import HeaderLogo from '@/app/assets/images/EKR_Logo_Horizontal_White.svg';
import { MainNavigation } from "./MainNavigation";

export const MainHeader = () => {
  return (
    <div className="container mx-auto my-5 md:my-10 flex flex-col md:flex-row justify-between items-center gap-5">
        <Image src={HeaderLogo} width={200} height={100} alt="Ekron Frontend Site's Logo" />
        <MainNavigation />
        <Link href="/contact" className="button button-primary">Contact</Link>
    </div>
  )
}