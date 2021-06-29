import React from 'react'
import styled from "styled-components/macro";

import heroImg from '../assets/hero-dog2.jpg'

const HeroSection = () => {
    return(
      <>
        <Heading>
          Uniting lost friends again.
        </Heading>
        <HeroContent />
      </>
    )
}

export default HeroSection

const HeroContent = styled.div`
    background-image: url(${heroImg});
    background-size: cover;
    background-position: center;
    height: 100vh;
    margin: 0;
    position: relative;
    top: 0;
    left: 0;
`;

const Heading = styled.h1`
    font-family: "Nunito", sans-serif;
    color: white;
    position: absolute;
    z-index: 1;
    top: 27rem;
    left: 1rem;
    width: 15rem;
    text-align: center;
    font-size: 2rem;
    @media (min-width: 768px) {
      left: 3rem;
      top: 26rem;
      font-size: 3rem;
      width: 18rem;
    }
    @media (min-width: 991px) {
      left: 5rem;
      top: 30rem;
      font-size: 4rem;
      width: 36rem;
    }
`;

