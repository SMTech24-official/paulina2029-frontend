import BeforeAfterSection from '@/components/AfterBeforeSection.tsx/AfterBeforeSection'
import ReviewForm from '@/components/ReviewForm/ReviewForm'
import HeroSection from '@/components/SmallHero/SmallHero'
import React from 'react'

export default function page() {
  return (
    <div>
        <HeroSection
        title='Portfolios'
        description=' '
        bgClass='about'
        />
        <BeforeAfterSection />
      <ReviewForm />
    </div>
  )
}
