import React, { ReactElement } from 'react'
import styled from 'styled-components'
import HtmlParser from 'react-html-parser'
import { Footer, Navbar } from '../../components'
import { SectionTitle } from '../../components/common'
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
        <SectionTitle
          fontSize={2.4}
          marginBottom={0}
          style={{ alignSelf: 'flex-start' }}
          padding={0}
        >Lorem Ipsum
        </SectionTitle>
        <SectionText>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Provident accusantium asperiores nulla adipisci. Magnam veritatis quos quaerat quisquam,
          sapiente dolores consequatur, commodi quidem unde repellat sunt iusto nobis ducimus vel.
        </SectionText>
        <Images>
          <ImageContainer>

            <img src={imgUrl} alt="About us 2" />
          </ImageContainer>
          <ImageContainer>

            <img src={imgUrl} alt="About us 3" />
          </ImageContainer>
        </Images>
        <SectionText>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis quibusdam repellat laudantium excepturi exercitationem perspiciatis assumenda
          aperiam ad mollitia voluptas, obcaecati officiis quasi, tempore aliquid quisquam
          deserunt odit? Ipsam, tempore? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Placeat aut quis deleniti dolorum molestiae porro! Inventore veniam ipsum assumenda vero
          maiores,
          quibusdam perferendis praesentium doloremque quo, beatae nihil molestias saepe.
        </SectionText>
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

const Images = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
gap: 5.2rem;

img {
    width: 100%;
}
`

const ImageContainer = styled.div`
    width: 100%;
`
