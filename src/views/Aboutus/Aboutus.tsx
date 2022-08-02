import React, { ReactElement } from 'react'
import styled from 'styled-components'
import HtmlParser from 'react-html-parser'
import { Footer, Navbar } from '../../components'
import { useAppSelector } from '../../hooks'

export default function Aboutus(): ReactElement {
  const titleDesc = useAppSelector((state) => state.ong.ongConfig?.description?.title_description)
  const description = useAppSelector((state) => state.ong.ongConfig?.description?.description)
  const imgUrl = useAppSelector((state) => state.ong.ongConfig?.description?.img_url)
  return (
    <>
      <Navbar />
      <Container>
        <PageTitle>{titleDesc}</PageTitle>
        <SectionText>
          {HtmlParser(description)}
        </SectionText>
        <img src={imgUrl} style={{ width: '100%' }} alt="About us 1" />

      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 75%;
    margin: auto;
    justify-content: center;
    align-items: center;
    margin-top: 4.2rem;
`

const PageTitle = styled.h1`
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    
`

const SectionText = styled.p`
    font-size: 1.2rem;
    line-height: 1.8;
    color: #999;
    margin-top: 2.2rem;
    
`
