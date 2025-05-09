import { StarIcon } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  rating: number;
  quote: string;
  text: string;
  avatar?: string;
  author: string;
  date: string;
}

const ReviewCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white p-2 sm:p-4 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between md:h-full min-h-[220px] sm:min-h-[320px] md:min-h-[380px]">
    
      <div className="flex mb-2 sm:mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon
            key={i}
            className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

   
      <p className="font-semibold text-base sm:text-lg md:text-xl mb-1 sm:mb-2 text-justify md:text-left line-clamp-3">
        {`"${testimonial.quote}"`}
      </p>


      <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base font-normal text-justify md:text-left line-clamp-4 md:line-clamp-6">
        {testimonial.text}
      </p>

     
      <div className="flex items-center mt-auto pt-2 sm:pt-3 md:pt-4">
        <div className="rounded-full overflow-hidden mr-2 sm:mr-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 border border-gray-100">
          <Image
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.author}
            width={48}
            height={48}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-medium text-sm sm:text-base md:text-lg">
            {testimonial.author}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            {testimonial.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;