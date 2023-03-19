import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import styled from 'styled-components'

const ContentStyles = styled.div`
  margin: 4rem auto;
  max-width: 1100px;
`;

export default function Layout( {children} ) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <Nav />
        <div>{children}</div>
        <Footer />
      </ContentStyles>
    </>
  )
}