"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Logo from "@/assets/logo/logo.png";

export default function Navbar() {
  return (
    <header className="w-full py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src={Logo}
              alt="Jimenez Plastering Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-green-600 font-playfair">
            Jimenez Plastering Inc.
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
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
            <div className="absolute p-4">
              <div className="absolute top-0 hidden group-hover:block  bg-white shadow-lg rounded-md mt-2 min-w-[200px] border border-gray-100 z-10">
                <div className="py-1">
                  <Link
                    href="/services/residential"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  >
                    Residential
                  </Link>
                  <Link
                    href="/services/commercial"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  >
                    Commercial
                  </Link>
                  <Link
                    href="/services/repairs"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  >
                    Repairs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Contact Information */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <span className="text-gray-700">Call Us: </span>
            <a
              href="tel:928-634-9065"
              className="text-gray-700 underline decoration-green-500 transition-colors font-medium"
            >
              928-634-9065
            </a>
          </div>
          <Link
            href="/contact"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}