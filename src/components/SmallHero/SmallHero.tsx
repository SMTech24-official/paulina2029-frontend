// components/HeroSection.js
import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
  bgClass?: string;
}

export default function HeroSection({ title, description, bgClass = '' }: HeroSectionProps) {
  return (
    <section className={`relative md:h-[400px] ${bgClass}`}>
      <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-30">
        <div className="container mx-auto">
          <h1 className="md:text-[68px] text-4xl font-poppins font-semibold text-white mb-2 sm:mb-4 md:mb-5">
            {title}
          </h1>
          <p className="text-white font-poppins md:text-xl text-base font-normal max-w-6xl whitespace-normal">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
