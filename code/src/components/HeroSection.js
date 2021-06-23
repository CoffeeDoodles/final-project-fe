import React from 'react'
import styled from "styled-components/macro";

import heroImg from '../assets/hero-dog2.jpg'

const HeroContent = styled.div`
    background-image: url(${heroImg});
    background-size: cover;
    background-position: center;
    height: 100vh;
    margin: 0;
   
    @media (min-width: 768px){
      width: 100vw;
    }
`

const HeroSection = () => {
    return(
      <div>
        <HeroContent />
      </div>
    )
}

export default HeroSection

