/* eslint-disable max-len */
import React from 'react'
import { Typography } from 'antd'
import styled from 'styled-components'
import HtmlParser from 'react-html-parser'
import { Link } from 'react-router-dom'
import { SectionTitle } from '../common'
import { useAppSelector } from '../../hooks'

const { Paragraph } = Typography

export default function AboutUs(): React.ReactElement {
  const titleDesc = useAppSelector((state) => state.ong.ongConfig?.description?.title_description)
  const description = useAppSelector((state) => state.ong.ongConfig?.description?.description)
  const imgUrl = useAppSelector((state) => state.ong.ongConfig?.description?.img_url)

  return (
    <AboutUsSection id="about">
      <LeftSection>
        <SectionTitle marginTop={0} padding={0} fontSize={2.4}>{titleDesc}</SectionTitle>
        <AboutUsDescription>
          { HtmlParser(description?.slice(0, 200))}
        </AboutUsDescription>
        <ReadMoreLink to="/about">
          Read more
        </ReadMoreLink>
      </LeftSection>
      <ImageContainer>
        <img
          src={imgUrl}
          alt="About us"
          style={{ maxWidth: '100%' }}
        />
      </ImageContainer>
    </AboutUsSection>
  )
}

const AboutUsSection = styled.section`
display: flex;
justify-content: space-between;
margin-top: 4.2rem;
padding-left: 4.1rem;
`

const LeftSection = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

const AboutUsDescription = styled(Paragraph)`
font-size: 1.1rem;
padding-right: 2.8rem;
color: #777;
line-height: 1.8;
`

const ReadMoreLink = styled(Link)`
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: #777;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`
