"use client";

import Image from "next/image";
// import HeroBanner from "@/assets/about/about-hero.jpg";
import HistoryImg from "@/assets/about/about-history.jpg";
import GoalImg from "@/assets/about/about-goal.png";
import HeroSection from "../SmallHero/SmallHero";
import ContactPage from "../ContactUs/ContactUs";

export default function AboutUs() {
  return (
    <main className="min-h-screen">
     
     <HeroSection
      title="About Us"
      description="Founded in 1998 by Gonzalo Jimenez with generations of plasterers before him. Jimenez Plastering is a family-run corporation serving Northern Arizona since 1998. Specializing in large-scale residential and commercial projects in lath and plastering. Jimenez Plastering has been the trusted and preferred stucco contractor in Northern Arizona."
      bgClass="about" 
    />
  
      <section className="md:py-16 py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 md:gap-8 gap-6 items-center">
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
            <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-[1px] bg-emerald-600"></div>
            <p className="text-[#231F20] md:text-xl text-base font-semibold">History</p>
          </div>
              <h2 className="md:text-3xl text-2xl font-bold md:mb-6 mb-4 text-justify">
                30+ Years of Expertise, Innovation, and Family Tradition in the
                Plastering Industry
              </h2>
              <div className="space-y-4 text-gray-600 text-justify">
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
      <section className="md:py-16 py-2">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 md:gap-8 gap-6 items-center">
            <div>
            <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-[1px] bg-emerald-600"></div>
            <p className="text-[#231F20] md:text-xl text-base font-semibold">Our goal</p>
          </div>
              <h2 className="md:text-3xl text-2xl font-bold md:mb-6 mb-4 text-justify">
                Delivering Exceptional, Custom-Plastered Exteriors with
                Precision, Durability, and a Commitment to Client Satisfaction
              </h2>
              <div className="md:space-y-4 space-y-2 text-gray-600 text-justify">
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

      <ContactPage />
    </main>
  );
}
