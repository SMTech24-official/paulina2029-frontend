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
          <div className="relative overflow-hidden rounded-lg">
            {/* <div className="absolute bottom-0 left-0 z-10 bg-white p-4 md:p-6">
            
            </div> */}
            <Image
              src={building}
              alt="Modern stucco home with blue sky"
              width={800}
              height={600}
              className="h-full w-full object-cover relative"
            />

            <div
              className="text-center rounded-[8px] p-4 w-[30%] -right-2 bottom-28 z-[999] absolute shadow-[89px_88px_35px_rgba(105,105,105,0),57px_56px_32px_rgba(105,105,105,0.01),32px_32px_27px_rgba(105,105,105,0.05),14px_14px_20px_rgba(105,105,105,0.09),4px_4px_11px_rgba(105,105,105,0.10)] bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/path-to-image.jpg')",
              }}
            >
              <p className="text-sm font-medium text-gray-500">
                Established in
              </p>
              <p className="text-5xl font-bold">1998</p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div>
            <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-[1px] bg-emerald-600"></div>
            <p className="text-[#231F20] md:text-xl text-base font-semibold">About Us</p>
          </div>
              <h3 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                The Jimenez Plastering Difference
              </h3>
            </div>
            <p className="text-gray-600">
              At Jimenez Plastering, we bring over 30 years of experience,
              specializing in high-quality plastering and stucco services.
              Founded in 1998 by Antonio Jimenez, our team&apos;s attention to
              detail and commitment to exceeding expectations results in
              Northern Arizona. From residential homes to large-scale commercial
              projects, we pride ourselves on providing craftsmanship that
              lasts.
            </p>
            <ul className="space-y-3">
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
  <Button>
  <Link
                href="#contact"
             
              >
                Contact Us
              </Link>
  </Button>
              <Button variant="outline">
              <Link
                href="#contact"
             
              >
                Contact Us
              </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
}
