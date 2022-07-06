import {
  FacebookFilled,
  GlobalOutlined,
  InstagramOutlined,
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
} from '@ant-design/icons'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../common'
import { useTheme } from '../../app/context/theme-context'

export default function Footer(): ReactElement {
  const color = useTheme()
  return (
    <>
      <MainFooter>
        <div style={{ padding: '0.5rem' }}>
          <Link href="#hero" fontSize={1.8}>
            Give
            <Circle />
          </Link>
        </div>

        <SectionTitle fontSize={1.5}>
          How can we help? <br />
          Contact us anytime
        </SectionTitle>

        <ContactInfo>
          {[PhoneFilled, MailFilled].map((Icon) => (
            <Contact color={color}>
              <Icon />
              <Link href="tel:+1-844-844-8444">+1-844-844-8444</Link>
            </Contact>
          ))}
        </ContactInfo>
      </MainFooter>

      <SubFooter>
        <div>
          <p>lorem ipsum is simply a dummy test</p>
          <Link underlined color="#969696">
            Terms and conditions
          </Link>
        </div>

        <Icons color={color}>
          {[FacebookFilled, InstagramOutlined, LinkedinFilled, GlobalOutlined].map((Icon) => (
            <Icon />
          ))}
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
  padding: 3rem 4.5rem;
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

const Link = styled.a<{ fontSize?: number; color?: string; underlined?: boolean }>`
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color = 'white' }) => color};
  letter-spacing: 3px;
  position: relative;
  text-decoration: ${({ underlined }) => underlined && 'underline'};
`

const Circle = styled.span`
  position: absolute;
  z-index: -1;
  width: 2em;
  background-color: #5cb780;
  border-radius: 50%;
  height: 2em;
  left: -25%;
  top: -30%;
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
const Contact = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: white;

  span {
    color: ${({ color }) => color};
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
const Icons = styled.div<{ color: string }>`
  display: flex;
  gap: 1.2rem;
  border-radius: 50%;
  padding: 0.7rem;

  span:first-child {
    background-color: ${({ color }) => color};
  }

  span {
    border-radius: 50%;
    padding: 0.7rem;
    color: white;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  span:hover {
    background-color: ${({ color }) => color};
    transform: scale(1.2);
  }
`
