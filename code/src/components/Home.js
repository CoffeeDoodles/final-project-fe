import React from 'react'

import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'
import ArticleSection from './ArticleSection'
import RecentLostPets from './RecentLostPets'
import RecentFoundPets from './RecentFoundPets'

const Home = () => {
  return(
    <div>
      <Header />
      <HeroSection />
      <ArticleSection />
      <RecentLostPets />
      <RecentFoundPets />
      <Footer />
    </div>
  )
}

export default Home