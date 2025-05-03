import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { realTestimonials as reviews } from "./testimonialData.js";

export default function TestimonialSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center mb-3 sm:mb-4">
          <div className="w-8 h-px bg-gray-400 mr-3"></div>
          <span className="text-base sm:text-lg font-medium font-poppins">
            Testimonial
          </span>
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

          <Button className="">
            See All Reviews
          </Button>
        </div>
      </div>

      {/* Testimonial Grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 mx-10">
        {reviews.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Star Rating */}
            <div className="flex mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Quote section */}
            <p className="font-semibold text-base sm:text-lg mb-2 font-poppins">
              {`"${testimonial.quote}"`}
            </p>
            {/* Testimonial Text */}
            <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm font-poppins">
              {testimonial.text}
            </p>
            {/* Author Info */}
            <div className="flex items-center mt-3 sm:mt-4">
              <div className="rounded-full overflow-hidden mr-2 sm:mr-3 w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-sm sm:text-base font-poppins">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm font-poppins">
                  {testimonial.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
   </div>
  );
}
