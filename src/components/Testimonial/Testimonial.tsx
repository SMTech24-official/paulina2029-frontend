import { Button } from "@/components/ui/button";
import Link from "next/link";

import ReviewCard from "../cards/ReviewCards/ReviewCard";

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
];

export default function TestimonialSection() {
  return (
    <div className="bg-[#E6F4EC4D] ">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-opacity-30">
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-emerald-600"></div>
              <p className="text-[#231F20] text-lg sm:text-xl font-semibold">
                Testimonials
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-gray-900 max-w-2xl leading-tight sm:leading-snug md:leading-[120%]">
                We&apos;re the Plastering Experts in Northern Arizona You Can
                Trust
              </h2>
              <p className="text-blue-700 mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base font-poppins text-justify">
                Jimenez Plastering, with over 30 years of experience, delivers
                reliable, high-quality plastering services for residential and
                commercial projects across Arizona.
              </p>
            </div>
            <Button className="mt-4 md:mt-0 bg-emerald-600 text-white hover:bg-emerald-700">
              <Link href={"/reviews"}>See All Reviews</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14">
          {realTestimonials.map((testimonial, index) => (
            <div key={index} className="h-full text-justify">
              <ReviewCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
