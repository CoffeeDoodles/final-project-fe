import React from 'react'

import styled from 'styled-components/macro'

export const FooterContainer = styled.div`
background-color: teal;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`

export const Text = styled.h4`
  color: white;
  margin: 0 18px;
`


const Footer = () => {
    return(
        <FooterContainer>
          <Text>© Petspotter by Elaine Bergström and Malin Göthe</Text>
        </FooterContainer>
    )
}

export default Footer