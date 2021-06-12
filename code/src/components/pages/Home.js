import React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import HeroSection from '../HeroSection'
import ArticleSection from '../ArticleSection'
import RecentLostPets from '../cards/RecentLostPets'
import RecentFoundPets from '../cards/RecentFoundPets'

const Home = () => {
  return(
    <>
      <Header />
      <HeroSection />
      <ArticleSection />
      <RecentLostPets />
      <RecentFoundPets />
      <Footer />
    </>
  )
}

export default Home