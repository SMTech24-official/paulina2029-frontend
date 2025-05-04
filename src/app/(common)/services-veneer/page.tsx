import BeforeAfterSection from '@/components/AfterBeforeSection.tsx/AfterBeforeSection'
import BlogLayout from '@/components/BlogLayout/Bloglayout'
import ReviewForm from '@/components/ReviewForm/ReviewForm'
import HeroSection from '@/components/SmallHero/SmallHero'
import React from 'react'

export default function page() {
  return (
    <div>
          <HeroSection
              title="Lath & Plaster"
              description=''
              bgClass="about"
              />
        <BlogLayout/>
              <BeforeAfterSection />
              {/* <ImageComparison /> */}
        
              <ReviewForm/>
    </div>
  )
}
