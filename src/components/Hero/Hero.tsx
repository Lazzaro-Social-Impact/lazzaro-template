import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import { useAppSelector } from '../../hooks'
import { Button } from '../common'

interface IProps {
  heroImage: string;
}

function Hero() {
  const navigate = useNavigate()
  const data = useAppSelector((state) => ({
    heroImage: state.ong.ongConfig?.brand?.default_img,
    textHeader: state.ong.ongConfig?.description?.title,
    textSubHeader: state.ong.ongConfig?.description?.subtitle,
    textColor: state.ong.ongConfig?.description?.text_color,
  }))
  const { primary, secondary } = useTheme() as {primary: string, secondary: string}
  return (
    <>
      <Header id="hero" heroImage={data.heroImage}>
        <Title>{data.textHeader}</Title>
        <SubTitle>{data.textSubHeader}</SubTitle>
        <BtnGroup>
          <Button color="white" hoverBgColor={secondary} bgColor={primary} py={0.6} px={1.6}>
            Donar
          </Button>
          <Button
            onClick={() => navigate('/partners')}
            hoverBgColor={primary}
            bgColor={secondary}
            py={0.6}
            px={1.6}
          >
            Become a member
          </Button>
        </BtnGroup>
      </Header>
    </>
  )
}

const Header = styled.header<IProps>`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.heroImage});
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
const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1.2rem;
  width: 25%;
  text-align: center;
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
