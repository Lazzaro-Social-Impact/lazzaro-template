/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../app/context/theme-context'
import { Button } from '../common'

function Hero() {
  const globalColor = useTheme()
  return (
    <>
      <Header id="hero">
        <Title>Help The Children in need</Title>
        <BtnGroup>
          <Button color="black" hoverColor="white" hoverBgColor={globalColor} py={0.6} px={1.6}>
            Donar
          </Button>
          <Button bgColor={globalColor} py={0.6} px={1.9}>
            Become a member
          </Button>
        </BtnGroup>
      </Header>
    </>
  )
}

const Header = styled.header`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
    url('https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80');
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  align-items: center;
`

const BtnGroup = styled.div`
  display: flex;
  gap: 1.2rem;
`

const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  width: 25%;

  @media (max-width: 765px) {
    width: 60%;
  }
`

export default Hero
