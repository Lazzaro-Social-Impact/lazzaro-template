import {
  FacebookFilled,
  GlobalOutlined,
  InstagramOutlined,
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
  TwitterOutlined
} from '@ant-design/icons'
import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
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
    poweredBy = '',
    title = ''
  } = useAppSelector(({ ong }) => ({
    logo: ong.ongConfig?.brand.logo,
    title: ong.ongConfig?.brand.name,
    phone: ong.ongConfig?.contact.phone,
    email: ong.ongConfig?.contact?.email,
    facebook: ong.ongConfig?.rrss.facebook,
    instagram: ong.ongConfig?.rrss.instagram,
    linkedin: ong.ongConfig?.rrss.linkedin,
    twitter: ong.ongConfig?.rrss.twitter,
    web: ong.ongConfig?.rrss.web,
    poweredBy: ong.ongConfig?.platformConfig?.powered_by_lazzaro,
  }))

  const navigateTo = (path: string) => () => window.open(path, '_blank')
  const { t } = useTranslation()
  return (
    <>
      <MainFooter>
        <ImageContainer>
          <Image src={logo} alt="" />
        </ImageContainer>

        <Title
          style={{
            padding: '0', width: '100%', flexGrow: 1,
          }}
          fontSize={1.2}
        >
          {t('footer.title_1')}<br />
          {t('footer.title_2')}
        </Title>

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
          <Link hovercolor="white" to="/terms_and_conditions" underlined>{t('footer.terms')}</Link>
          <p style={{ fontSize: '1rem' }}>&copy;  {new Date().getFullYear()} {title}, {t('all_rights')}</p>
        </div>

        <Icons>
          {facebook && <FacebookFilled onClick={navigateTo(facebook)} />}
          {linkedin && <LinkedinFilled onClick={navigateTo(linkedin)} />}
          {twitter && <TwitterOutlined onClick={navigateTo(twitter)} />}
          {instagram && <InstagramOutlined onClick={navigateTo(instagram)} />}
          {web && <GlobalOutlined onClick={navigateTo(web)} />}
        </Icons>
        {poweredBy && (
        <p style={{ fontSize: '1rem' }}>Powered by {' '}
          <a target="_blank" href="https://lazzaro.io/" rel="noreferrer">Lazzaro</a>
        </p>
        ) }
      </SubFooter>

    </>
  )
}

const MainFooter = styled.footer`
  margin-top: 5.2rem;
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
  text-align: left;
  width: 50%;
  img {
    width: 6rem !important;
  }
  cursor: pointer;

  @media screen and (max-width: 768px) {
    text-align: center;
    
  }
`

const Title = styled(SectionTitle)`
text-align:right;
  @media  (max-width: 768px) {
    text-align: center;
  }

  `

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self:center;
  margin-top: 1.7rem;
  gap: 1rem;
  width: 65%;
  padding-left: 1.2rem;
  margin-left: 4.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: 0;
    padding-left: 0;
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
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    align-self: center;
    margin: 0;
    padding: 0;
  }
`

const SubFooter = styled(Flex)`
  background-color: ${({ theme }) => `${theme.secondary}`};
  padding: 2rem 4.5rem;
  border-bottom: 1px solid #ccc;
  border-bottom: none;
  transition: all 0.4s ease;
  color: #969696;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => `${theme.primary}`};
  text-align: left;

  p a {
  color: #969696;
  text-decoration: underline;
  transition: all 0.4s ease;
  &:hover {
    color: ${({ theme }) => `${theme.primary}`};
  }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`
const Icons = styled.div`
  display: flex;
  gap: 0.8rem;
  border-radius: 50%;
  span {
    border-radius: 50%;
    padding: 0.7rem;
    color: white;
    cursor: pointer;
    background-color: transparent;
    transition: transform 0.2s ease-in-out;
  }

  span:hover {
    background-color: ${({ theme }) => theme.primary};
    transform: scale(1.2);
  }
`
