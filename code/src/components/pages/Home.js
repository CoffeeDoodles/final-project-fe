import React from 'react';
import styled from 'styled-components/macro';

import HeroSection from '../HeroSection';
import ArticleSection from '../ArticleSection';

const Home = () => {
  return(
    <>
      <HomeContainer>
        <HeroSection />
        <ArticleSection />
      </HomeContainer> 
    </>
  )
};

export default Home;

const HomeContainer = styled.main`
  height: 100%;
  
`