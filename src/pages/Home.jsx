import React from 'react'
import HeroSection from '../components/Sections/HeroSection'
import BookTheSession from '../components/Sections/BookTheSession'
import TrendingSession from '../components/Sections/TrendingSession'
import GallerySection from '../components/Sections/GallerySection'
import Testimonials from '../components/Sections/Testimonials'

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        <HeroSection />
        <BookTheSession />
        <TrendingSession />
        <GallerySection />
        <Testimonials />
    </div>
  )
}

export default Home