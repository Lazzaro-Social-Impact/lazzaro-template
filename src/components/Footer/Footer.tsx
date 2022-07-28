import {
  FacebookFilled,
  GlobalOutlined,
  InstagramOutlined,
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
  TwitterOutlined,
} from '@ant-design/icons'
import { ReactElement, useId } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks'
import { Image, SectionTitle } from '../common'

export default function Footer(): ReactElement {
  const logo = useAppSelector(({ ong }) => ong.ongConfig?.brand.logo)
  const phone = useAppSelector(({ ong }) => ong.ongConfig?.contact.phone)
  const {
    facebook, instagram, twitter, linkedin, web
  } = useAppSelector(({ ong }) => ong.ongConfig?.rrss) || {}

  const navigateTo = (path: string) => () => window.open(path, '_blank')

  return (
    <>
      <MainFooter>
        <ImageContainer style={{ padding: '0.5rem' }}>
          <Image src={logo} alt="" />
        </ImageContainer>

        <SectionTitle fontSize={2.4}>
          How can we help? <br />
          Contact us anytime
        </SectionTitle>

        <ContactInfo>
          {[PhoneFilled, MailFilled].map((Icon) => (
            <Contact key={useId()}>
              <Icon />
              <a href="tel:+1-844-844-8444">{phone}</a>
            </Contact>
          ))}
        </ContactInfo>
      </MainFooter>

      <SubFooter>
        <div>
          <p>lorem ipsum is simply a dummy test</p>
          <Link to="/terms_and_conditions" underlined color="#969696">
            Terms and conditions
          </Link>
        </div>

        <Icons>
          <FacebookFilled onClick={navigateTo(facebook)} />
          <LinkedinFilled onClick={navigateTo(linkedin)} />
          <TwitterOutlined onClick={navigateTo(twitter)} />
          <InstagramOutlined onClick={navigateTo(instagram)} />
          <GlobalOutlined onClick={navigateTo(web)} />
        </Icons>
      </SubFooter>
    </>
  )
}

const MainFooter = styled.footer`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  color: white;
  padding: 1.2rem 4.5rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  position: relative;
  bottom: 0;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-tart;
    padding: 3rem;
  }
`

const Link = styled(NavLink)<{ fontSize?: number; color?: TColor; underlined?: boolean }>`
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color = 'white' }) => color};
  letter-spacing: 3px;
  position: relative;
  text-decoration: ${({ underlined }) => underlined && 'underline'};
`

const ImageContainer = styled.div`
  padding:1rem;
  width: 6rem;
  cursor: pointer;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #424242;
  padding-block: 1.5rem;
  padding-inline: 1.5rem 6rem;

  @media (max-width: 768px) {
    padding-inline: 1.5rem;
    font-size: 1rem;
  }
`
const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: white;

  span {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`

const SubFooter = styled.div`
  display: flex;
  background-color: #2e2e2e;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  border-bottom: 1px solid #ccc;
  align-items: center;
  width: 100%;
  border-bottom: none;
  z-index: 99;
  transition: all 0.4s ease;
  color: #969696;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`
const Icons = styled.div`
  display: flex;
  gap: 1.2rem;
  border-radius: 50%;
  padding: 0.7rem;

  span:first-child {
    background-color: ${({ theme }) => theme.primary};
  }

  span {
    border-radius: 50%;
    padding: 0.7rem;
    color: white;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  span:hover {
    background-color: ${({ theme }) => theme.primary};
    transform: scale(1.2);
  }
`
