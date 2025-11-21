"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeaderLogo from '@/app/assets/images/EKR_Logo_Horizontal_White.svg';
import { MainNavigation } from "./MainNavigation";
import { MobileMenu } from "./MobileMenu";

export const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="container mx-auto my-5 md:my-10 flex flex-row justify-between items-center gap-5 relative">
        <Image src={HeaderLogo} width={200} height={100} alt="Ekron Frontend Site's Logo" className="w-[150px] md:w-[200px]" />
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <MainNavigation />
        </div>
        
        <div className="hidden md:block">
          <Link href="/contact" className="button button-primary">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-white hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </div>
  )
}