import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
import Image from "next/image";


export const realTestimonials = [
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
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl bg-[#E6F4EC4D] bg-opacity-30">

      <div className="mb-8 sm:mb-12">
        <div className="flex items-center mb-3 sm:mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-[1px] bg-emerald-600"></div>
            <p className="text-[#231F20] md:text-xl text-base font-semibold">Testimonials</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4 sm:gap-6">
          <div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-gray-900 max-w-2xl leading-snug sm:leading-tight">
              We&apos;re the Plastering Experts in Northern Arizona You Can Trust
            </h2>
            <p className="text-blue-700 mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base font-poppins">
              Jimenez Plastering, with over 30 years of experience, delivers
              reliable, high-quality plastering services for residential and
              commercial projects across Arizona.
            </p>
          </div>

          <Button className="">See All Reviews</Button>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mt-8 sm:mt-12">
        {realTestimonials.map((testimonial, index) => (
          <div key={index} className="h-full">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full min-h-[380px]">
              {/* Star Rating */}
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>


              <p className="font-semibold text-base sm:text-lg mb-1 font-poppins">
                {`"${testimonial.quote}"`}
              </p>

              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm font-poppins">
                {testimonial.text}
              </p>


              <div className="flex items-center mt-auto pt-2">
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
          </div>
        ))}
      </div>
    </section>
  );
}