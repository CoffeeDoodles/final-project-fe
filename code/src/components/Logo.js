import React from 'react'
import styled from 'styled-components'

import logoImg from '../assets/logo.png'

// const Wrapper = styled.div`
//   width: 20%;
// `
const HeaderLogo = styled.img`
  height: 150px;
  position: relative;
  top: -25px;
  left: 20px;
`

const Logo = () => {
  return (
    // <Wrapper>
    <a href="#" >
      <HeaderLogo src={logoImg} alt="petspotter-logo" />
    </a>
    // </Wrapper>
  )
}

export default Logo