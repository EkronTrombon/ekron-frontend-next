"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderLogo from '@/app/assets/images/EKR_Logo_Horizontal_White.svg';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Side Panel */}
      <div 
        className={`relative w-full max-w-xs h-full bg-background p-6 shadow-xl transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-8">
          <Image src={HeaderLogo} width={150} height={75} alt="Ekron Logo" className="w-[120px]" />
          <button 
            onClick={onClose}
            className="p-2 text-white hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav>
          <ul className="flex flex-col gap-6">
            <li>
              <Link 
                href="/" 
                className="text-2xl font-bold text-white hover:text-primary transition-colors block" 
                onClick={onClose}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-2xl font-bold text-white hover:text-primary transition-colors block" 
                onClick={onClose}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="text-2xl font-bold text-white hover:text-primary transition-colors block" 
                onClick={onClose}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-2xl font-bold text-white hover:text-primary transition-colors block" 
                onClick={onClose}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
