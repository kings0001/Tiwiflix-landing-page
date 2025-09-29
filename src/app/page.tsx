import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import RevenueSharing from './components/RevenueSharing'
import Creator from './components/Creators'
import UserExperience from './components/UserExperience'
import MovieSlider from './components/MovieSlider'
import LiveStreamSection from './components/LiveStreamSection'
import TiwiFlixOnTheGo from './components/TiwiFlixOnTheGo'
import DocsSection from './components/DocsSection'
import FAQSection from './components/FAQSection'
function page() {
  return (
     <div className='font-lexend'>
      <Hero />
      <HowItWorks />
        {/* <h3 className="bg-[#080C17] text-white text-2xl pl-20 font-semibold">Stream now</h3> */}
      <MovieSlider />
      <RevenueSharing />
      <Creator />
      <UserExperience />
      <LiveStreamSection />
      <TiwiFlixOnTheGo />
      <DocsSection />
      <FAQSection />
    </div>
  )
}


export default page