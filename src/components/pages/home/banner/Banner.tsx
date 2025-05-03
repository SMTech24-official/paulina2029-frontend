"use client"

import { useState, useEffect } from "react"
import bannerImage from "@/assets/home/BgHero.png"
import whichTraderLogo from "@/assets/home/which-logo.png"
import CallAndWhatsapp from "@/components/shared/callAndWhatsapp/callAndWhatsapp"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Banner = () => {
  const [mounted, setMounted] = useState(false)

 
  useEffect(() => {
    setMounted(true)
  }, [])


  const BannerSlide = () => (
    <div
      className={`md:pt-20 md:pb-[225px] md:bg-center bg-cover before:content-[""] before:block before:absolute before:z-[1] before:inset-0 relative `}
      style={{ backgroundImage: `url(${bannerImage.src})` }}
    >
      <div className="container relative z-10 text-white pt-5">
        <span className="py-1 px-2 rounded-[48px] bg-[rgba(255,255,255,0.16)] backdrop-blur-[10px] inline-flex items-center gap-2 mb-4">
        
          <p className="font-bold">Quality Plastering Services in Arizona</p>
        </span>
        <h1 className="mb-6 text-xl md:text-3xl lg:text-5xl font-extrabold tracking-[-0.576px] max-w-[752px] ">
          At London Gutter Clean & Repair, we believe in traditional techniques for a thorough clean But we&apos;re
          always ready to adept with our gutter vacuum when needed!
        </h1>
        <p className="max-w-[752px] text-sm md:text-base">
          Does your London property suffer from clogged gutters, leaving you worried about water damage? Look no
          further! Established in 2011, we&apos;re a trusted provider of domestic and commercial gutter cleaning,
          repair, and replacement services across London.
        </p>
        <div className="py-6">
          <CallAndWhatsapp isShowTitle={false} />
        </div>
      </div>
    </div>
  )

  return (
    <main className="relative">
      {mounted && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="banner-swiper"
        >
          {/* Current slide */}
          <SwiperSlide>
            <BannerSlide />
          </SwiperSlide>

          {/* You can add more slides here when you have content */}
          {/* Example of placeholder for future slides */}
          {/* <SwiperSlide>
          <BannerSlide />
          </SwiperSlide> */}
        </Swiper>
      )}
    </main>
  )
}

export default Banner
