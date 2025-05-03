import { Button } from '@/components/ui/button';
import React from 'react';

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
      description: "The most common exterior finish used in the Western United States providing high durability and architectural flexibility."
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
              We're the Plastering Experts in Northern Arizona You Can Trust
            </h2>
            <p className="text-blue-700 mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base font-poppins">
              Jimenez Plastering, with over 30 years of experience, delivers
              reliable, high-quality plastering services for residential and
              commercial projects across Arizona.
            </p>
          </div>

          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md px-4 sm:px-6 py-2 sm:py-3 h-auto text-sm sm:text-base">
            See All Reviews
          </Button>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;