import Image from "next/image";
import Link from "next/link";
import HeaderLogo from '@/app/assets/images/EKR_Logo_Horizontal_White.svg';
import { MainNavigation } from "./MainNavigation";

export const MainHeader = () => {
  return (
    <div className="container mx-auto my-10 flex justify-between items-center">
        <Image src={HeaderLogo} width={200} height={100} alt="Ekron Frontend Site's Logo" />
        <MainNavigation />
        <Link href="/contact" className="button button-primary">Contact</Link>
    </div>
  )
}