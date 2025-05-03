"use client";

import Image from "next/image";

import HistoryImg from "@/assets/about/about-history.jpg";
import GoalImg from "@/assets/about/about-goal.png";

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-64 md:h-80 bg-gray-800 opacity-70 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/about-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-12 bg-black bg-opacity-40">
          <div className="container mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
              About US
            </h1>
            <p className="text-white text-sm sm:text-base max-w-2xl whitespace-normal">
              Founded in 1998 by Gonzalo Jimenez with generations of plasterers
              before him. Jimenez Plastering is a family run corporation serving
              Northern Arizona since 1998. Specializing in large scale
              residential and commercial projects in lath and plastering.
              Jimenez Plastering has been the trusted and preferred stucco
              contractor in Northern Arizona.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Image
                src={HistoryImg}
                alt="Commercial building with plastering work"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <div className="h-px bg-gray-300 w-10 mr-3"></div>
                <span className="text-gray-500">History</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                30+ Years of Expertise, Innovation, and Family Tradition in the
                Plastering Industry
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Gonzalo Jimenez, President, has over 30 years of experience in
                  the industry, with a family history of plasterers going back
                  40+ years. Jimenez Plastering Inc. was started in 1998,
                  focusing on both custom home building and commercial and
                  residential projects. Now over the course 25 years the company
                  has grown to complete large scale custom home and commercial
                  projects across the state of Arizona.
                </p>
                <p>
                  Jimenez Plastering specializes in all areas of exterior
                  finishes including: one-coat systems, three coat systems,
                  EIFS, Stone veneer and exterior cladding systems. We pride
                  ourselves in the custom home space providing luxury and
                  specialty finishes for our clients.
                </p>
                <p>
                  Jimenez Plastering has spent the last 25+ years developing
                  systems tailored to our local environment. Systems that are
                  cost effective and have proven to be durable, functional and
                  long lasting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-px bg-gray-300 w-10 mr-3"></div>
                <span className="text-gray-500">Our goal</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Delivering Exceptional, Custom-Plastered Exteriors with
                Precision, Durability, and a Commitment to Client Satisfaction
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our goal is to continue learning, improving and testing new
                  products so that we can provide a positive quality experience
                  along with quality products to our clients for the years to
                  come.
                </p>
                <p>
                  Our strategy will continue to build on our strengths and
                  remain focused on the values that have built this company to
                  where we are now by putting our clients interest first and
                  provide the proper guidance to them and the community.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={GoalImg}
                alt="Custom home with quality plastering"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
