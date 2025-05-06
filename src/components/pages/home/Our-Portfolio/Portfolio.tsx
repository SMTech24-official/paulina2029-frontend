"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CustomPortfolioSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleSlides = 3; // Keep visible slides at 3 as per original logic

  const portfolioItems = [
    { title: "Custom Home Plastering", image: "/assets/card1.png" },
    { title: "Stucco & Exterior Cladding", image: "/assets/card2.png" },
    { title: "Luxury Home Finishes", image: "/assets/card3.png" },
    { title: "Commercial Projects", image: "/assets/card1.png" },
    { title: "Specialty Finishes", image: "/assets/card2.png" },
    { title: "Specialty Finishes", image: "/placeholder.svg" },
  ];

  // Calculate maxIndex based on the number of items and visible slides
  // Ensure we don't have a negative maxIndex if items <= visibleSlides
  const maxIndex = Math.max(
    0,
    Math.ceil(portfolioItems.length / visibleSlides) - 1
  );

  // const handleNext = () => {
  //   setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  // };

  // const handlePrev = () => {
  //   setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  // };

  // Calculate the transform percentage dynamically based on visibleSlides
  const slideTransformPercentage =
    100 / (portfolioItems.length / visibleSlides);

  return (
    <div className="portfolio">
      <div className="max-w-7xl mx-auto px-4 py-16 poppins-font">
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
            <p className="text-[#496187] max-w-2xl mb-6 md:text-base text-sm">
              With over 20 years of experience, Jimenez Plastering delivers
              high-quality, durable finishes for both luxury homes and
              large-scale commercial projects across Arizona.
            </p>
            <Link href="/portfolios">
              <Button className="">Explore Our Portfolio</Button>
            </Link>
          </div>
        </div>

        {/* Custom Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              // Adjust width to account for padding/gap if necessary, or simplify
              // Width should be enough to contain all items side-by-side
              width: `${portfolioItems.length * (20 / visibleSlides)}%`,
              transform: `translateX(-${
                activeIndex * slideTransformPercentage
              }%)`,
            }}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                // Adjust width to be a fraction of the container based on visibleSlides
                // Use flex-shrink-0 to prevent items from shrinking
                className={`w-full sm:w-1/${visibleSlides} lg:w-1/${visibleSlides} px-3 shrink-0`}
              >
                {/* Card Container - Added relative positioning here */}
                <div className="rounded-lg overflow-hidden shadow group relative bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    // You might adjust width/height based on desired aspect ratio
                    width={250} // Example width, adjust as needed
                    height={500} // Example height, adjust as needed
                    className="w-full h-[500px] object-cover" // Ensure image covers the area
                  />
                  {/* Text Overlay - Positioned absolutely at the bottom */}
                  <div className="absolute bottom-3 left-0 right-0 p-4 m-2 text-white text-center backdrop-blur-sm bg-black/30 rounded-lg">
                    {" "}
                    {/* Added backdrop-blur and adjusted background color/opacity */}
                    <h3 className="font-semibold text-xl">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*         
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
            aria-label="Previous slide"
          >
            &#9664; 
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
            aria-label="Next slide"
          >
            &#9654; 
          </button> */}

          {/* Dots */}
          {/* Only show dots if there's more than one slide group */}
          {maxIndex > 0 && (
            <div className="flex justify-center md:mt-10 mt-6 gap-2  ">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-6 h-6 rounded-full transition-all ${
                    // Modified class for active dot to be an outline
                    activeIndex === index
                      ? "border-[6px] border-emerald-600 bg-transparent"
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
