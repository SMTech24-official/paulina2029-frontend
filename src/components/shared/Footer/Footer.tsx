"use client";

import Image from "next/image";
import { FC } from "react";
import { Mail, Phone } from "lucide-react";
import Logo from "@/assets/logo/logo.png";
import Link from "next/link";
import { PiBuildingApartmentLight } from "react-icons/pi";
import WaveRight from "@/assets/overlay-images/wave-right.png";
import WaveLeft from "@/assets/overlay-images/wave-left.png";

const Footer: FC = () => {
  // Navigation links data
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Portfolios", path: "/portfolios" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    { name: "Give a Review", path: "/reviews" },
  ];

  // Service links data
  const serviceLinks = [
    { name: "Lath & Plaster", path: "/services/lath-plaster" },
    { name: "EFIS", path: "/services/efis" },
    { name: "Veneer", path: "/services/veneer" },
    { name: "Siding", path: "/services/siding" },
  ];

  return (
    <footer className="bg-[#1e3a68] text-white py-8 sm:py-12">
      <div className="absolute bottom-0 left-0 w-60 h-60 sm:w-100 sm:h-100 md:w-120 md:h-120 opacity-100">
        <Image
          src={WaveLeft}
          alt="Pattern"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-100 sm:h-100 md:w-120 md:h-120 opacity-30">
        <Image
          src={WaveRight}
          alt="Pattern"
          fill
          className="object-contain"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6">
        <div>
          <img src="" alt="" />
        </div>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-16 text-sm text-gray-200">
          {/* Column 1: Logo & Description */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <Image
                src={Logo}
                alt="Jimenez Logo"
                width={60}
                height={68}
                className="w-12 sm:w-14 md:w-16"
              />
              <h2 className="text-3xl sm:text-2xl text-white playfair-font font-bold">
                Jimenez Plastering Inc.
              </h2>
            </div>
            <p className="text-[#97A4BA] font-poppins text-sm sm:text-base font-normal">
              We'll ensure your gutters function flawlessly and enhance the
              overall look of your London home or business.
            </p>
          </div>

          {/* Column 2: Navigation + Services */}
          <div className="w-full md:w-1/3 grid grid-cols-2 gap-4 sm:gap-6 text-center md:text-left">
            {/* Navigation Links */}
            <div className="space-y-1 sm:space-y-2">
              <ul className="space-y-1 sm:space-y-2">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.path}
                      className="hover:text-white font-poppins text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="space-y-1 sm:space-y-2">
              <ul className="space-y-1 sm:space-y-2">
                {serviceLinks.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      href={service.path}
                      className="hover:text-white font-poppins text-sm sm:text-base"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="w-full md:w-1/3 space-y-3 sm:space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-white text-base sm:text-lg xl:text-xl font-poppins">
              Get In Touch With us Today
            </h3>
            <div className="flex items-start gap-2 sm:gap-3">
              <PiBuildingApartmentLight className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base">
                275 Justin Drive
                <br />
                Cottonwood AZ, 86326
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <a
                href="tel:9286349065"
                className="text-sm sm:text-base hover:text-white"
              >
                928-634-9065
              </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <a
                href="mailto:Jimenezplastering@gmail.com"
                className="text-sm sm:text-base break-all hover:text-white"
              >
                Jimenezplastering@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
