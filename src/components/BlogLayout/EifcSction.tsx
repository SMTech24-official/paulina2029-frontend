import Image from "next/image";
import React from "react";
import SocialShare from "./SocialShare";
import LeftImg from "@/assets/service-img/left2.jpg";
import RightImg from "@/assets/service-img/right2.png";

const EifcSction = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 my-10 px-4 lg:px-0">
      {/* Left Side */}
      <div className="w-full md:w-[40%] flex flex-col gap-4">
        <Image
          src={LeftImg}
          alt="Img"
          width={500}
          height={500}
          className="rounded-md border border-green-600 object-contain"
        />
        <div className="bg-[#01193605] py-4 px-4 mb-2 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-3 font-poppins">
            Table of Contents
          </h2>
          <ul className="list-none text-[#231F20] font-bold space-y-3">
            <li className="text-[#009245]">Introduction</li>
            <hr />
            <li>Siding: A Strong, Protective Finish</li>
            <hr />
            <li>Identifying and Preventing Future Problems</li>
            <hr />
            <li>Siding: The Smart Choice for Your Property</li>
            <hr />
            <li>The Jimenez Plastering Advantage</li>
          </ul>
        </div>
        <SocialShare />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[60%] flex flex-col gap-10 mt-6 md:mt-0">
        <div>
          <h2 className="text-[28px] md:text-[36px] font-bold mb-4 font-playfair leading-snug">
            Siding: Durable Protection for Your Home's Exterior
          </h2>
          <p className="text-[#496187] leading-relaxed font-poppins font-[500] text-[16px]">
            Jimenez Plastering Inc. provides expert siding services across
            Wisconsin and Northern Illinois. Whether you're building new,
            remodeling, or upgrading your home, our team delivers durable,
            weather-resistant protection for your building's exterior.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 font-poppins">
            Siding: A Strong, Protective Finish{" "}
          </h2>
          <p className="text-[#496187] leading-relaxed font-poppins font-[500] text-[16px]">
            Siding is the protective material applied to the outer walls of your
            home, designed to shield against the elements while enhancing its
            appearance. Our team ensures seamless application, offering a
            variety of materials to match your style and provide long-lasting
            protection.
          </p>

          <div className="mt-6 space-y-4 font-poppins">
            <h3 className="text-2xl font-bold mb-2">
              Identifying and Preventing Future Problems
            </h3>
            <p className="text-[#496187] text-[16px]">
              We ensure that your siding not only looks great but also functions
              as a barrier against the elements. During installation, we inspect
              for potential issues such as:
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">Water Damage:</span>
              Preventing moisture from seeping into your walls.
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">Loose Panels: </span>
              Ensuring secure attachment to maintain protection.
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">Water Damage: </span>
              Ensuring the material remains intact through weather changes.
            </p>
            <p className="text-[#496187] text-[16px]">
              We take a proactive approach to ensure your siding remains in top
              condition for years to come.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold mb-2">
            Siding: The Smart Choice for Your Property
          </h1>
          <Image
            src={RightImg}
            alt="Img"
            width={500}
            height={400}
            className="w-full rounded-md my-4 object-cover"
          />
          <p className="mb-2 text-[#496187] font-poppins text-[16px]">
            While other cladding options might provide some protection, siding
            delivers the perfect balance of beauty and functionality: When
            quality matters, lath and plaster is the solution trusted by
            builders for centuries.
          </p>
          <ul className="list-none space-y-2 text-[16px] text-[#496187] font-poppins mb-2">
            <li>
              <span className="font-bold text-black">Energy Efficiency:</span>{" "}
              Helps maintain a comfortable temperature inside your home.
            </li>
            <li>
              <span className="font-bold text-black">Low Maintenance:</span>{" "}
              Durable and easy to maintain, saving you time and effort.
            </li>
            <li>
              <span className="font-bold text-black">Aesthetic Variety:</span>{" "}
              Choose from wood, vinyl, metal, and more to suit your style.
            </li>
          </ul>
          <p className="mb-2 text-[#496187] font-poppins text-[16px]">
            Our experienced team ensures seamless application, leaving your home
            with superior performance and curb appeal.
          </p>
          <h4 className="text-lg font-semibold mt-5 mb-4">
            The Jimenez Plastering Advantage
          </h4>
          <p className="text-[#496187] font-poppins text-[16px]">
            Our experienced team brings a hands-on approach to every project. We
            use top-grade materials, proven techniques, and an eye for detail to
            ensure your exterior is not only beautiful but also protected for
            years to come. <br />
            We take pride in creating work that's as solid as it is striking —
            work you'll be proud to show off.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EifcSction;
