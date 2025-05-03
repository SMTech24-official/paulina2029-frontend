import HappenBanner from "@/components/cards/HappenBanner/HappenBanner";
import ContactPage from "@/components/ContactUs/ContactUs";
import Banner from "@/components/pages/home/banner/Banner";
import PortfolioSwiper from "@/components/pages/home/Our-Portfolio/Portfolio";
import OurService from "@/components/pages/home/OurService/OurService";
import TrustedByHundreds from "@/components/pages/home/TrustedByHundreds/TrustedByHundreds";
import YourTrustedPartner from "@/components/pages/home/YourTrustedPartner/YourTrustedPartner";
// import BlogComponent from "@/components/shared/blog/BlogComponent";
// import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
// // import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import TestimonialSection from "@/components/Testimonial/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "London Gutter Cleaning | Professional Gutter & Exterior Services",
  description: "Keep your gutters clean and functional with London Gutter Cleaning. Offering professional services for residential and commercial properties across London.",
  keywords: "gutter cleaning, London gutter services, professional gutter cleaning, residential gutter cleaning, commercial gutter cleaning, fascia soffit repairs",
};



const Home = () => {

  return (
    <>
      <Banner />
      <TrustedByHundreds />
      <YourTrustedPartner />
      <OurService />
      <HappenBanner/>
      <TestimonialSection/>
      {/* <BlogComponent  smallTitle="Blog" mainTitle="Insights & Inspiration: The LondonGutterClean Blog" /> */}
      {/* <ImproveProperty/> */}
      <PortfolioSwiper />
<ContactPage/>
 
    </>
  );
};

export default Home;
