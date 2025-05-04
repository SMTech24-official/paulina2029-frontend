import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import CardImg1 from "@/assets/service-card/card1.png"
import CardImg2 from "@/assets/service-card/card2.png"
import CardImg3 from "@/assets/service-card/card3.png" 
import CardImg4 from "@/assets/service-card/card4.png"

type ServiceCardProps = {
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Lath & Plaster",
      description: "The most common exterior finish used in the Western United States providing high durability and architectural flexibility.",
    },
    {
      title: "EFIS",
      description: "Exterior insulation and finish system is a general class of non-load bearing building cladding systems that provides exterior walls with an insulated, water-resistant, finished surface in an integrated composite material system."
    },
    {
      title: "Vencer",
      description: "Veneer a thin layer of any stone used as decorative facing material that is not meant to be load bearing. Stone cladding is a stone veneer, or simulated stone, applied to a building or other structure made of a material other than stone."
    },
    {
      title: "Siding",
      description: "Siding or wall cladding is the protective material attached to the exterior side of a wall of a house or other building."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 portfolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-8 h-px bg-gray-400 mr-3"></div>
            <span className="text-base sm:text-lg font-medium font-poppins">
              Our Services
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4 sm:gap-6">
          <div>
            {/* Header section */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-gray-900 max-w-2xl leading-snug sm:leading-tight">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Protecting Your Home, One Service at a Time
            </h2>
            <div className='flex justify-between gap-50'>
              <p className="text-[#496187] mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base font-poppins">
              From inspections to full roof replacements, we deliver quality workmanship backed by years of experience.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md px-4 sm:px-6 py-2 sm:py-3 h-auto text-sm sm:text-base ml-72 font-poppins">
            Explore Our Services
          </Button>
          </div>
            
          </div>
        </div>
        

        <div className="space-y-6 mt-10">
        {/* First Row */}
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1 relative rounded-lg overflow-hidden shadow-md">
            <Image
              src={CardImg2}
              alt={services[0].title}
              width={600}
              height={1000}
              className="object-fit w-50 h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-bold text-lg mb-1">
                {services[0].title}
              </h3>
              <p className="text-white text-sm">
                {services[0].description}
              </p>
            </div>
          </div>
          <div className="col-span-3 relative rounded-lg overflow-hidden shadow-md">
            <Image
              src={CardImg1}
              alt={services[1].title}
              width={600}
              height={1000}
              className="object-fit w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-bold text-lg mb-1">
                {services[1].title}
              </h3>
              <p className="text-white text-sm">
                {services[1].description}
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3 relative rounded-lg overflow-hidden shadow-md">
            <Image
              src={CardImg3}
              alt={services[2].title}
              width={600}
              height={1000}
              className="object-fit w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-bold text-lg mb-1">
                {services[2].title}
              </h3>
              <p className="text-white text-sm">
                {services[2].description}
              </p>
            </div>
          </div>
          <div className="col-span-1 relative rounded-lg overflow-hidden shadow-md">
            <Image
              src={CardImg4}
              alt={services[3].title}
              width={600}
              height={1000}
              className="object-fit w-50 h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-bold text-lg mb-1">
                {services[3].title}
              </h3>
              <p className="text-white text-sm">
                {services[3].description}
              </p>
            </div>
          </div>
        </div>
	</div>


      </div>
    </section>
  );
};

export default ServicesSection;