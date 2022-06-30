/* eslint-disable max-len */
import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <>
      <Header>
        <Title>Help The Children in need</Title>
        <BtnGroup>
          <StyledButton shape="round" size="large" type="dashed">
            Donar
          </StyledButton>
          <StyledButton size="large" shape="round" type="primary">
            Hacerme socio
          </StyledButton>
        </BtnGroup>
      </Header>
    </>
  )
}

const Header = styled.header`
  background-image: url('https://img.rawpixel.com/private/static/images/website/2022-05/rm422-076-x.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e877fedea1136b8c616786d383ed70c3');
  background-size: cover;
  height: 574px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BtnGroup = styled.div`
  display: flex;
  gap: 4rem;
`

const StyledButton = styled(Button)`
  padding: 1rem;
  border: none;
`

const Title = styled.h2`
  color: white;
  font-size: 62px;
  text-align: center;
  font-weight: bold;
  width: 35%;
`

export default Hero
