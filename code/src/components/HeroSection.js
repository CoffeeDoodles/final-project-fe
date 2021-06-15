import React from 'react'
import styled from 'styled-components/macro'

import heroImg from '../assets/hero.jpg'

const HeroContent = styled.div`
    background-image: url(${heroImg});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    margin: 0;
`


const HeroSection = () => {
    return(
      <div>
        <HeroContent />
      </div>
    )
}

export default HeroSection

