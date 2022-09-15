import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../components'
import { Hero } from '../components'
import { Gallery } from '../components'
import { Distance } from '../components'
import { Footer } from '../components'

const Wrapper = styled.div`
  background-color: black;
  min-height: 100vh;
`

const Landing = () => {
  return (
    <Wrapper>
      <NavBar />
      <Hero />
      <Gallery />
      <Distance />
      <Footer />
    </Wrapper>
  )
}

export default Landing;
