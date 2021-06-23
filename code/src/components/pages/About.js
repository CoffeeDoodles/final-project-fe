import React from 'react'
import styled from 'styled-components/macro'

import elaine from '../../assets/elaineandalfie.jpg'
import malin from '../../assets/malinandfrasse2.jpg'


const AboutContainer = styled.main`
  margin: 0;
  width: 100%;
  height: 100%;
`

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 

  @media (min-width: 768px) {
  width: 100%;
  flex-direction: row;
  }
`

const WrapperElaine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  @media (min-width: 993px) {
  flex-direction: row-reverse;
  margin: 20px;
  }
`

const WrapperMalin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 993px) {
  flex-direction: row;
  margin: 20px:
  }
`

const DescriptionConatainer = styled.div`
display: flex;
justify-content: center;
`

const Title = styled.h1`
  color: black;
  border-bottom: 2px solid black;
  margin: 10px;
`

const Description = styled.p`
  font-size: 20px;
  margin: 20px;
  max-width: 80%;
`

const Article = styled.article`
color: #384E52;
width: 50%;
text-align: left;
margin-bottom: 50px;
padding: 0 25px 25px 25px;
width: 100%;
`

const ArticleTitle = styled.h2`
margin-top: 0;
font-size: 25px;
 
`

const ArticleText = styled.p`
  font-size: 20px;
`

const ImageContainer = styled.div`
width: 50%;
display: flex;
justify-content: center;
margin-bottom: 50px;
`

const Image = styled.img`
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 5px;
`

const About = () => {
  return (
    <>
    <AboutContainer>
      <Title>About</Title>
      <DescriptionConatainer>
        <Description>Petspotter is the result of a 24 weeks frontend dev bootcamp. We wanted to make a project that was close to our hearts.  </Description>
      </DescriptionConatainer>
      <ArticleContainer>
        <WrapperElaine>
          <Article>
            <ArticleTitle>Elaine Bergstroem</ArticleTitle>
            <ArticleText>lorem ipsum bls sdih fkehfnmlöf is ffj kfgdn, lorem ipsum bls sdih fkehfnmlöf is ffj kfgdn. lorem ipsum bls sdih fkehfnmlöf is ffj kfgdn </ArticleText>
          </Article>
          <ImageContainer>
            <Image className="kitten-high-five" src={elaine} alt="Elaine with her corgi Alfie" />   
          </ImageContainer>
          </WrapperElaine>
          <WrapperMalin>
            <Article>
              <ArticleTitle>Malin Goethe</ArticleTitle>
              <ArticleText>lorem ipsum bls sdih fkehfnmlöf is ffj kfgdn, lorem ipsum bls sdih fkehfnmlöf is ffj kfgdn. lorem ipsum bls sdih fkehfnmlöf is ffj kfgdn </ArticleText>
            </Article>
            <ImageContainer>
              <Image className="kitten-high-five" src={malin} alt="Malin with her ragdoll Frasse" />   
            </ImageContainer>
          </WrapperMalin>
      </ArticleContainer>
    </AboutContainer>
    </>
  )
}

export default About