'use client'
import React, { useState } from 'react';
import ReviewCard from '../cards/ReviewCards/ReviewCard';

export default function Testimonials2() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const realTestimonials = [
    {
      rating: 5,
      quote: "Professional, courteous, and attentive",
      text: "We were extremely pleased with the plastering work Jimenez Plastering did for us! They got our job ready and on the schedule quickly. Our project manager kept us informed throughout the entire process.",
      author: "David London NW3",
      date: "September 12, 2022",
      avatar: "/assets/a1.png",
    },
    {
      rating: 5,
      quote: "Exceptional quality and service",
      text: "The team at Jimenez Plastering exceeded our expectations. Their attention to detail and craftsmanship transformed our home. They were punctual, professional, and the results are stunning.",
      author: "Sarah Johnson",
      date: "October 5, 2022",
      avatar: "/assets/a2.png",
    },
    {
      rating: 5,
      quote: "Reliable and high-quality work",
      text: "We hired Jimenez Plastering for our commercial property renovation. Their team was efficient, skilled, and delivered outstanding results. The project was completed on time and within budget.",
      author: "Michael Rodriguez",
      date: "November 18, 2022",
      avatar: "/assets/a3.png",
    },
    {
      rating: 5,
      quote: "True craftsmanship",
      text: "The level of skill and attention to detail that Jimenez Plastering brings to their work is remarkable. Our historic home restoration required specialized techniques, and they delivered flawlessly.",
      author: "Emily Parker",
      date: "December 3, 2022",
      avatar: "/assets/a1.png",
    },
    {
      rating: 5,
      quote: "Professional, courteous, and attentive",
      text: "We were extremely pleased with the plastering work Jimenez Plastering did for us! They got our job ready and on the schedule quickly. Our project manager kept us informed throughout the entire process.",
      author: "Carlos Medina",
      date: "January 10, 2023",
      avatar: "/assets/a3.png",
    },
    {
      rating: 5,
      quote: "Exceptional quality and service",
      text: "The team at Jimenez Plastering exceeded our expectations. Their attention to detail and craftsmanship transformed our home. They were punctual, professional, and the results are stunning.",
      author: "Anna Stevens",
      date: "February 8, 2023",
      avatar: "/assets/a2.png",
    },
    {
      rating: 5,
      quote: "Reliable and high-quality work",
      text: "We hired Jimenez Plastering for our commercial property renovation. Their team was efficient, skilled, and delivered outstanding results. The project was completed on time and within budget.",
      author: "Luis Herrera",
      date: "March 12, 2023",
      avatar: "/assets/a3.png",
    },
    {
      rating: 5,
      quote: "True craftsmanship",
      text: "The level of skill and attention to detail that Jimenez Plastering brings to their work is remarkable. Our historic home restoration required specialized techniques, and they delivered flawlessly.",
      author: "Natalie Watts",
      date: "April 22, 2023",
      avatar: "/assets/a2.png",
    },
    {
        rating: 5,
        quote: "True craftsmanship",
        text: "The level of skill and attention to detail that Jimenez Plastering brings to their work is remarkable. Our historic home restoration required specialized techniques, and they delivered flawlessly.",
        author: "Emily Parker",
        date: "December 3, 2022",
        avatar: "/assets/a1.png",
      },
      {
        rating: 5,
        quote: "Professional, courteous, and attentive",
        text: "We were extremely pleased with the plastering work Jimenez Plastering did for us! They got our job ready and on the schedule quickly. Our project manager kept us informed throughout the entire process.",
        author: "Carlos Medina",
        date: "January 10, 2023",
        avatar: "/assets/a3.png",
      },
      {
        rating: 5,
        quote: "Exceptional quality and service",
        text: "The team at Jimenez Plastering exceeded our expectations. Their attention to detail and craftsmanship transformed our home. They were punctual, professional, and the results are stunning.",
        author: "Anna Stevens",
        date: "February 8, 2023",
        avatar: "/assets/a2.png",
      },
      {
        rating: 5,
        quote: "Reliable and high-quality work",
        text: "We hired Jimenez Plastering for our commercial property renovation. Their team was efficient, skilled, and delivered outstanding results. The project was completed on time and within budget.",
        author: "Luis Herrera",
        date: "March 12, 2023",
        avatar: "/assets/a3.png",
      },
      {
        rating: 5,
        quote: "True craftsmanship",
        text: "The level of skill and attention to detail that Jimenez Plastering brings to their work is remarkable. Our historic home restoration required specialized techniques, and they delivered flawlessly.",
        author: "Emily Parker",
        date: "December 3, 2022",
        avatar: "/assets/a1.png",
      },
      {
        rating: 5,
        quote: "Professional, courteous, and attentive",
        text: "We were extremely pleased with the plastering work Jimenez Plastering did for us! They got our job ready and on the schedule quickly. Our project manager kept us informed throughout the entire process.",
        author: "Carlos Medina",
        date: "January 10, 2023",
        avatar: "/assets/a3.png",
      },
      {
        rating: 5,
        quote: "Exceptional quality and service",
        text: "The team at Jimenez Plastering exceeded our expectations. Their attention to detail and craftsmanship transformed our home. They were punctual, professional, and the results are stunning.",
        author: "Anna Stevens",
        date: "February 8, 2023",
        avatar: "/assets/a2.png",
      },
      {
        rating: 5,
        quote: "Reliable and high-quality work",
        text: "We hired Jimenez Plastering for our commercial property renovation. Their team was efficient, skilled, and delivered outstanding results. The project was completed on time and within budget.",
        author: "Luis Herrera",
        date: "March 12, 2023",
        avatar: "/assets/a3.png",
      },
  ];

  const totalPages = Math.ceil(realTestimonials.length / itemsPerPage);

  const paginatedTestimonials = realTestimonials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (pageNum:number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-20 bg-opacity-30">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14">
        {paginatedTestimonials.map((testimonial, index) => (
          <div key={index} className="h-full">
            <ReviewCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
