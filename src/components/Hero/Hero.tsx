import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import { useAppSelector } from '../../hooks'
import { Button, Flex } from '../common'

interface IProps {
  heroImage: string;
}

function Hero() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { heroImage = '', textHeader, textSubHeader } = useAppSelector((state) => ({
    heroImage: state.ong.ongConfig?.brand?.default_img,
    textHeader: state.ong.ongConfig?.description?.title,
    textSubHeader: state.ong.ongConfig?.description?.subtitle,
    textColor: state.ong.ongConfig?.description?.text_color,
  }))
  const { primary, secondary } = useTheme()

  return (
    <>
      <HeroSection id="hero" heroImage={heroImage}>
        <Title>{textHeader}</Title>
        <SubTitle>{textSubHeader}</SubTitle>
        <Flex gap={1.2} justify="center">
          <Button color="white" onClick={() => navigate('/donate')}> {t('Donate')} </Button>
          <Button hoverBgColor={primary} bgColor={secondary} onClick={() => navigate('/partners')}>
            {t('Become a member')}
          </Button>
        </Flex>
      </HeroSection>
    </>
  )
}

const HeroSection = styled.section<IProps>`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
    url(${({ heroImage }) => heroImage});
  background-size: cover;
  background-position: center;
  height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  align-items: center;
`

const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1.2rem;
  width: 50%;
  text-align: center;
`
const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  width: 40%;

  @media (max-width: 765px) {
    width: 60%;
  }
`

export default Hero
