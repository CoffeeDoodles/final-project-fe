import React from 'react'
import styled from 'styled-components'

import logoImg from '../assets/logo.png'

// const Wrapper = styled.div`
//   width: 20%;
// `
const HeaderLogo = styled.img`
  width: 100%;
  margin: 0 0px 0 0;
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