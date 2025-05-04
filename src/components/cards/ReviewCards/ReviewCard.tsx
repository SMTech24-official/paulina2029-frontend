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

      {/* Quote */}
      <p className="font-semibold text-base sm:text-lg mb-1 font-poppins">
        {`"${testimonial.quote}"`}
      </p>

      {/* Text */}
      <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm font-poppins">
        {testimonial.text}
      </p>

      {/* Author and Avatar */}
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
  );
};

export default ReviewCard;