"use client";
import React from "react";
import Image from "next/image";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1a3664] text-white py-8 px-4 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Jimenez Plastering Inc. Logo"
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <h1 className="text-2xl md:text-3xl playfair-font ">
                Jimenez Plastering Inc.
              </h1>
            </div>
            <p className="text-gray-300 max-w-xs">
              We'll ensure your gutters function flawlessly and enhance the
              overall look of your London home or business.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-2">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/portfolios"
              className="hover:text-gray-300 transition-colors"
            >
              Portfolios
            </Link>
            <Link
              href="/services"
              className="hover:text-gray-300 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/review"
              className="hover:text-gray-300 transition-colors"
            >
              Give a Review
            </Link>
          </div>

          {/* Services and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Services */}
            <div className="grid grid-cols-1 gap-2">
              <Link
                href="/services/lath-plaster"
                className="hover:text-gray-300 transition-colors"
              >
                Lath & Plaster
              </Link>
              <Link
                href="/services/efis"
                className="hover:text-gray-300 transition-colors"
              >
                EFIS
              </Link>
              <Link
                href="/services/veneer"
                className="hover:text-gray-300 transition-colors"
              >
                Veneer
              </Link>
              <Link
                href="/services/siding"
                className="hover:text-gray-300 transition-colors"
              >
                Siding
              </Link>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Get In Touch With us Today
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <LuMapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <p>
                    275 Justin Drive
                    <br />
                    Cottonwood AZ, 86326
                  </p>
                </div>
                <div className="flex items-center">
                  <LuPhone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <p>928-634-9065</p>
                </div>
                <div className="flex items-center">
                  <LuMail className="h-5 w-5 mr-2 flex-shrink-0" />
                  <p>jimenezplastering@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
