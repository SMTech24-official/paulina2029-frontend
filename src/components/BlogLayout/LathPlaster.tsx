import Image from "next/image";
import React from "react";
import SocialShare from "./SocialShare";
import LeftImg from "@/assets/service-img/left-img.png";
import RightImg from "@/assets/service-img/right.png";

const LathPlaster = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 my-10 px-4 lg:px-0">
      {/* Left Side */}
      <div className="w-full md:w-[40%] flex flex-col gap-4">
        <Image
          src={LeftImg}
          alt="Img"
          width={500}
          height={400}
          className="rounded-md border border-green-600 object-cover"
        />
        <div className="bg-[#01193605] py-4 px-4 mb-2 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-3 font-poppins">
            Table of Contents
          </h2>
          <ul className="list-none text-[#231F20] font-bold space-y-3">
            <li className="hover:text-[#009245] transition-colors duration-300">Introduction</li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">A Superior Finish, Every Time</li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">Identifying and Preventing Future Problems</li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">Lath & Plaster: The Smart Choice</li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">The Jimenez Plastering Advantage</li>
          </ul>
        </div>
        <SocialShare />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[60%] flex flex-col gap-10 mt-6 md:mt-0 text-justify">
        <div>
          <h2 className="text-[28px] md:text-[36px] font-bold mb-4 font-playfair leading-snug">
            Lath & Plaster: Lasting Beauty and Strength for Your Home
          </h2>
          <p className="text-[#496187] leading-relaxed font-poppins font-[500] text-[16px]">
            Keeping your home&apos;s exterior strong and beautiful starts with the
            right materials. When it comes to durability and design flexibility,
            lath and plaster remain a trusted choice. At Jimenez Plastering
            Inc., we deliver expert craftsmanship that stands the test of time.
            Here&apos;s why homeowners and builders across Wisconsin and Northern
            Illinois choose us.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 font-poppins">
            A Superior Finish, Every Time
          </h2>
          <p className="text-[#496187] leading-relaxed font-poppins font-[500] text-[16px]">
            Lath and plaster offer a seamless, durable surface that resists
            cracking, weather damage, and everyday wear. Our skilled craftsmen
            apply every layer with care, creating an exterior that&rsquo;s not just
            stunning &mdash; it&rsquo;s built to last. Whether you prefer a smooth, modern
            look or a textured, traditional style, we bring your vision to life
            with precision.
          </p>

          <div className="mt-6 space-y-4 font-poppins">
            <h3 className="text-2xl font-bold mb-2">
              Identifying and Preventing Future Problems
            </h3>
            <p className="text-[#496187] text-[16px]">
              A proper lath and plaster system doesn&rsquo;t just look great &mdash; it
              protects your home. When we work on your property, we also inspect
              for early signs of issues like:
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">Hairline Cracks:</span>{" "}
              Tiny cracks that, if untreated, could grow over time.
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">Moisture Intrusion:</span>{" "}
              Water trapped behind surfaces can cause major damage if not
              addressed.
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">Foundation Shifts:</span>{" "}
              Small movements in your home&apos;s foundation can stress plaster
              surfaces.
            </p>
            <p className="text-[#496187] text-[16px]">
              We catch problems early and provide simple repairs before they
              turn into costly projects later.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold mb-2">
            Lath & Plaster: The Smart Choice
          </h1>
          <Image
            src={RightImg}
            alt="Img"
            width={500}
            height={400}
            className="w-full rounded-md my-4 object-cover"
          />
          <p className="mb-2 text-[#496187] font-poppins text-[16px]">
            While other finishes may seem quicker, they often can&rsquo;t match the
            long-term value of lath and plaster:
          </p>
          <ul className="list-none space-y-2 text-[16px] text-[#496187] font-poppins mb-2">
            <li>
              <span className="font-bold text-black">Better Insulation:</span>{" "}
              Keeps your home cooler in summer, warmer in winter.
            </li>
            <li>
              <span className="font-bold text-black">Customizable Design:</span>{" "}
              Choose from endless textures, finishes, and architectural styles.
            </li>
            <li>
              <span className="font-bold text-black">
                Incredible Longevity:
              </span>{" "}
              With proper care, lath and plaster can last generations.
            </li>
          </ul>
          <p className="mb-2 text-[#496187] font-poppins text-[16px]">
            When quality matters, lath and plaster is the solution trusted by
            builders for centuries.
          </p>
          <h4 className="text-lg font-semibold mt-5 mb-4">
            The Jimenez Plastering Advantage
          </h4>
          <p className="text-[#496187] font-poppins text-[16px]">
            Our experienced team brings a hands-on approach to every project. We
            use top-grade materials, proven techniques, and an eye for detail to
            ensure your exterior is not only beautiful but also protected for
            years to come. <br />
            We take pride in creating work that&rsquo;s as solid as it is striking &mdash;
            work you&rsquo;ll be proud to show off.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LathPlaster;
