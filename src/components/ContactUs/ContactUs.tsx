import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Map from "../icons/Map";
import Call from "../icons/Call";
import Facebook1 from "../icons/Facebook";
import Instragram from "../icons/Instragram";
import X from "../icons/X";
import Linkdin1 from "../icons/Linkdin";
import { MapComponent } from "../MapComponent/MapComponent";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="min-h-screen contact flex items-center justify-center p-4 sm:p-6 md:p-8 font-playfair">
        <div className="w-full max-w-6xl mt-10 md:mt-20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Contact Information */}
            <div className="p-4 sm:p-6 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                CONTACT US
              </h1>
              <p className="text-[#496187] mb-10 font-poppins text-sm md:text-base font-medium text-justify">
                We&apos;ll schedule a call to discuss your idea. After discovery
                sessions, we&apos;ll send a proposal, and upon approval,
                we&apos;ll get started.
              </p>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start rounded-lg p-4 bg-white">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Map />
                  </div>
                  <div>
                    <h3 className="text-base md:text-2xl font-poppins font-medium mb-1 text-black">
                      Our Address
                    </h3>
                    <p className="text-[#677990] text-sm md:text-base font-normal font-poppins">
                      275 Justin Drive, Cottonwood AZ, 86326
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start rounded-lg p-4 bg-white">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Call />
                  </div>
                  <div>
                    <h3 className="text-base md:text-2xl font-poppins font-medium mb-1 text-black">
                      Call us Anytime
                    </h3>
                    <p className="text-[#677990] text-sm md:text-base font-normal font-poppins">
                      928-634-9065
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start rounded-lg p-4 bg-white">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-2xl font-poppins font-medium mb-1 text-black">
                      Send E-Mail
                    </h3>
                    <p className="text-[#677990] text-sm md:text-base font-normal font-poppins">
                      Jimenezplastering@gmail.com
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg md:text-2xl font-poppins font-medium mb-3 text-black">
                    Social Contact
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className="text-green-500 hover:text-green-600"
                    >
                      <Facebook1 />
                    </Link>
                    <Link
                      href="#"
                      aria-label="LinkedIn"
                      className="text-green-500 hover:text-green-600"
                    >
                      <Linkdin1 />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Instagram"
                      className="text-green-500 hover:text-green-600"
                    >
                      <Instragram />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Twitter/X"
                      className="text-green-500 hover:text-green-600"
                    >
                      <X />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-4 sm:p-6 md:p-12 rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#231F20] mb-8">
                Get in touch
              </h2>
              <form className="space-y-6 font-poppins">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm md:text-base font-medium mb-2 text-[#231F20]"
                  >
                    Full name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm md:text-base font-medium mb-2 text-[#231F20]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm md:text-base font-medium mb-2 text-[#231F20]"
                  >
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm md:text-base font-medium mb-2 text-[#231F20]"
                  >
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write about your project"
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <MapComponent/>
    </div>
  );
}
