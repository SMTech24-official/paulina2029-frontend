"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CustomPortfolioSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const portfolioItems = [
    { title: "Custom Home Plastering", image: "/assets/card1.png" },
    { title: "Stucco & Exterior Cladding", image: "/assets/card2.png" },
    { title: "Luxury Home Finishes", image: "/assets/card3.png" },
    { title: "Commercial Projects", image: "/assets/card1.png" },
    { title: "Specialty Finishes", image: "/assets/card2.png" },
    { title: "Specialty Finishes", image: "/placeholder.svg" },
  ];

  const maxIndex = Math.max(
    0,
    Math.ceil(portfolioItems.length / visibleSlides) - 1
  );

  const slideTransformPercentage =
    100 / (portfolioItems.length / visibleSlides);

  // ✅ Responsive slides setup
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="portfolio">
      <div className="max-w-7xl mx-auto px-4 md:py-16 py-8 poppins-font">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-[1px] bg-emerald-600"></div>
            <p className="text-[#231F20] md:text-xl text-base font-semibold">
              Our Portfolio
            </p>
          </div>
          <h2 className="md:text-[40px] text-3xl playfair-font font-bold text-[#231F20] mb-4">
            Delivering Excellence in Every Project
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between gap-4">
            <p className="text-[#496187] max-w-2xl md:mb-6 md:text-base text-sm text-justify">
              With over 20 years of experience, Jimenez Plastering delivers
              high-quality, durable finishes for both luxury homes and
              large-scale commercial projects across Arizona.
            </p>
            <Link href="/portfolios">
              <Button>Explore Our Portfolio</Button>
            </Link>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${(portfolioItems.length / visibleSlides) * 100}%`,
              transform: `translateX(-${
                activeIndex * slideTransformPercentage
              }%)`,
            }}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="px-3 shrink-0"
                style={{
                  width: `${100 / visibleSlides}%`,
                }}
              >
                <div className="rounded-lg overflow-hidden shadow group relative bg-white h-full">
                  <div className="aspect-w-4 aspect-h-3 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                      style={{
                        height: "clamp(250px, 30vw, 500px)",
                        maxHeight: "500px",
                      }}
                    />
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 p-4 m-2 text-white text-center backdrop-blur-sm bg-black/30 rounded-lg">
                    <h3 className="font-semibold md:text-xl text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          {maxIndex > 0 && (
            <div className="flex justify-center md:mt-10 mt-6 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-4 h-4 md:w-6 md:h-6 rounded-full transition-all ${
                    activeIndex === index
                      ? "border-[3px] md:border-[6px] border-emerald-600 bg-transparent"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide group ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
