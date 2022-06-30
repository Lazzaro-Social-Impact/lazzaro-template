/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <>
      <Header>
        <Title>Help The Children in need</Title>
        <BtnGroup>
          <DonateButton>
            Donar
          </DonateButton>
          <MemberButton>
            Become a member
          </MemberButton>
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
  gap: 1.2rem;
`

const DonateButton = styled.button`
  padding: 0.6rem 1.6rem;
  background-color: white;
  font-weight: bold;
  border-radius: 25px;
  border: none;
 transition: all 0.3s ease-in-out;
 cursor: pointer;
  &:hover {
    background-color: #5cb780;
    color: white;
  }
`

const MemberButton = styled.button`
  padding: 0.6rem 1.9rem;
  background-color: #5cb780;
  font-weight: bold;
  border-radius: 25px;
  border: none;
  color: white;
  transition: all 0.3s ease-in-out;
 cursor: pointer;


  &:hover {
    background-color: #00BF9C;
  }
  `

const Title = styled.h2`
  color: white;
  font-size: 62px;
  text-align: center;
  font-weight: bold;
  width: 35%;
`

export default Hero
