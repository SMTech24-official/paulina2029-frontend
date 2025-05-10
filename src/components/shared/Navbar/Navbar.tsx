"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full py-4 border-b border-gray-100 bg-white sticky top-0 z-30">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/assets/logo.png"
                alt="Jimenez Plastering Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-bold text-green-600 font-serif">
              Jimenez Plastering Inc.
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <span className="text-[#CBCBCB]">|</span>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              About Us
            </Link>
            <span className="text-[#CBCBCB]">|</span>
            <Link
              href="/portfolios"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Portfolios
            </Link>
            <span className="text-[#CBCBCB]">|</span>

            {/* Custom Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors">
                Services{" "}
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[200px] border border-gray-100 z-10">
                <div className="py-1">
                  <Link
                    href="/services-lath-&-plaster"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  >
                    Lath & Plaster
                  </Link>
                  <Link
                    href="/services-siding"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  >
                    Siding
                  </Link>
                  <Link
                    href="/services-efis"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  >
                    EFIS
                  </Link>
                  <Link
                    href="/services-veneer"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  >
                    Veneer
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Contact Information and Mobile Menu Button */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden lg:block">
              <span className="text-gray-700">Call Us: </span>
              <a
                href="tel:928-634-9065"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                928-634-9065
              </a>
            </div>
            <Link
              href="/contact-us"
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-md transition-colors font-medium"
            >
              Contact Us
            </Link>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              className="md:hidden p-1 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <NavbarMobile 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}