import Image from "next/image"
import { MainNavigation } from "../MainNavigation";
import HeaderLogo from '@/app/assets/images/EKR_Logo_Horizontal_White.svg';
import Link from "next/link";
import { AvatarMenu } from "./AvatarMenu";
import { EmailFooter } from "./EmailFooter";
import { Social } from "../Social";

export const Footer = () => {
  return (
    <footer>
      <AvatarMenu />
      <EmailFooter />
      <div className="container mx-auto my-10 flex justify-between items-center">
        <Image src={HeaderLogo} width={200} height={100} alt="Ekron Frontend Site's Logo" />
        <MainNavigation />
        <Link href="/contact" className="button button-primary">Contact</Link>
      </div>
      <div className="container mx-auto my-10 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="font-bold text-sm">2025 &copy; Ekron Frontend</div>
        <Social />
      </div>
    </footer>
  )
}