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
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80');
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 620px;
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
  font-size: 4.2rem;
  text-align: center;
  font-weight: bold;
  width: 35%;
`

export default Hero
