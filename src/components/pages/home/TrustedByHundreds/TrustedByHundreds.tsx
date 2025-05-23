import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import building from "@/assets/building.png";
import { Button } from "@/components/ui/button";

export default function AboutUsSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative rounded-lg">
            <Image
              src={building}
              alt="Modern stucco home with blue sky"
              width={800}
              height={600}
              className="h-[350px] md:h-full w-full object-cover rounded-md"
            />

            {/* Overlay Card - Responsive positioning only */}
            <div
              className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-8 md:right-6 lg:bottom-12 lg:-right-8 xl:bottom-16 xl:-right-10 bg-white bg-opacity-100 p-3 sm:p-4 md:p-5 rounded-lg shadow-lg text-center z-10 w-[110px] sm:w-[140px] md:w-[180px]  lg:w-[200px]"
              style={{
              backgroundImage: "url('/images/minicard.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "100%",
              }}
            >
              <p className="text-[10px] sm:text-xs text-[#496187] font-bold font-playfair">
              Established in
              </p>
              <p className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black font-poppins">
              1998
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-[1px] bg-emerald-600"></div>
                <p className="text-[#231F20] md:text-xl text-base font-semibold">
                  About Us
                </p>
              </div>
              <h3 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                The Jimenez Plastering Difference
              </h3>
            </div>
            <p className="text-gray-600 text-sm sm:text-base text-justify">
              At Jimenez Plastering, we bring over 30 years of experience,
              specializing in high-quality plastering and stucco services.
              Founded in 1998 by Antonio Jimenez, our team&apos;s attention to
              detail and commitment to exceeding expectations results in
              Northern Arizona. From residential homes to large-scale commercial
              projects, we pride ourselves on providing craftsmanship that
              lasts.
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-justify">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#16A34A]" />
                <span className="text-gray-700">
                  Serving Northern Arizona for over 25 years.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#16A34A]" />
                <span className="text-gray-700">
                  Generations of plasterers with over 40 years of combined
                  experience.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#16A34A]" />
                <span className="text-gray-700">
                  Systems designed for durability, functionality, and longevity,
                  adapted to our local environment.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#16A34A]" />
                <span className="text-gray-700">
                  The go-to stucco contractor for custom homes and large-scale
                  commercial projects.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#16A34A]" />
                <span className="text-gray-700">Certified and Trusted</span>
              </li>
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="w-full sm:w-auto text-sm sm:text-base px-4 py-2">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto text-sm sm:text-base px-4 py-2"
              >
                <Link href="#contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
