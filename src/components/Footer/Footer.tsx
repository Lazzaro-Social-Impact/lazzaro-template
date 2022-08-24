import {
  FacebookFilled,
  GlobalOutlined,
  InstagramOutlined,
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
  TwitterOutlined,
} from '@ant-design/icons'
import { type ReactElement } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks'
import {
  Flex, Image, Link, SectionTitle
} from '../common'

export default function Footer(): ReactElement {
  const {
    logo,
    phone = '',
    email = '',
    facebook = '',
    instagram = '',
    linkedin = '',
    twitter = '',
    web = '',
  } = useAppSelector(({ ong }) => ({
    logo: ong.ongConfig?.brand.logo,
    phone: ong.ongConfig?.contact.phone,
    email: ong.ongConfig?.contact?.email,
    facebook: ong.ongConfig?.rrss.facebook,
    instagram: ong.ongConfig?.rrss.instagram,
    linkedin: ong.ongConfig?.rrss.linkedin,
    twitter: ong.ongConfig?.rrss.twitter,
    web: ong.ongConfig?.rrss.web,
  }))

  const navigateTo = (path: string) => () => window.open(path, '_blank')

  return (
    <>
      <MainFooter>
        <ImageContainer>
          <Image src={logo} alt="" />
        </ImageContainer>

        <SectionTitle fontSize={2.4}>
          How can we help? <br />
          Contact us anytime
        </SectionTitle>

        <ContactInfo>
          <Contact>
            <PhoneFilled />
            <a href="tel:+1-844-844-8444">{phone}</a>
          </Contact>
          <Contact>
            <MailFilled />
            <a href={`mailto:${email}`}>{email}</a>
          </Contact>
        </ContactInfo>
      </MainFooter>

      <SubFooter>
        <div>
          <p>lorem ipsum is simply a dummy test</p>
          <Link hoverColor="white" to="/terms_and_conditions" underlined>Terms and conditions</Link>
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
  background: ${({ theme }) => theme.secondary};
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

const ImageContainer = styled.div`
  padding: 0.5rem;
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
  a {
    color: ${({ theme }) => theme.primary};
  }
`

const SubFooter = styled(Flex)`
  background-color: ${({ theme }) => `${theme.secondary}`};
  padding: 2rem 4rem;
  border-bottom: 1px solid #ccc;
  border-bottom: none;
  transition: all 0.4s ease;
  color: #969696;
  border-top: 1px solid ${({ theme }) => `${theme.primary}`};
  text-align: left;

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
