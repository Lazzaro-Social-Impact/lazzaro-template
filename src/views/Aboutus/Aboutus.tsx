/* eslint-disable max-len */
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../app/context/theme-context'
import { Footer, Navbar } from '../../components'
import { SectionTitle } from '../../components/common'

export default function Aboutus(): ReactElement {
  const color = useTheme()
  return (
    <>
      <Navbar />
      <Container>
        <PageTitle color={color}>About us</PageTitle>
        <SectionText>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptatibus beatae tempora reiciendis facere vel delectus ad. Repellat
          deleniti aliquam exercitationem illo, facere
          odio placeat veniam dolore eaque sunt! Obcaecati, ad. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste error facere laudantium quibusdam labore eligendi recusandae laborum sapiente? Dolore ipsum expedita nemo molestiae esse excepturi, molestias reiciendis omnis delectus error. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, repellendus? Sit, quidem esse veritatis iure eaque debitis eligendi asperiores quibusdam nesciunt distinctio iste ab blanditiis non dolore molestiae recusandae necessitatibus.
        </SectionText>
        <img src="https://images.unsplash.com/flagged/photo-1555251255-e9a095d6eb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" style={{ width: '100%' }} alt="" />
        <SectionTitle fontSize={2.4} marginBottom={0} style={{ alignSelf: 'flex-start' }} padding={0}>Lorem Ipsum</SectionTitle>
        <SectionText>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Provident accusantium asperiores nulla adipisci. Magnam veritatis quos quaerat quisquam,
          sapiente dolores consequatur, commodi quidem unde repellat sunt iusto nobis ducimus vel.
        </SectionText>
        <Images>
          <ImageContainer>

            <img src="https://images.unsplash.com/flagged/photo-1555251255-e9a095d6eb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </ImageContainer>
          <ImageContainer>

            <img src="https://images.unsplash.com/flagged/photo-1555251255-e9a095d6eb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </ImageContainer>
        </Images>
        <SectionText>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis quibusdam repellat laudantium excepturi exercitationem perspiciatis assumenda
          aperiam ad mollitia voluptas, obcaecati officiis quasi, tempore aliquid quisquam
          deserunt odit? Ipsam, tempore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat aut quis deleniti dolorum molestiae porro! Inventore veniam ipsum assumenda vero maiores, quibusdam perferendis praesentium doloremque quo, beatae nihil molestias saepe.
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

const PageTitle = styled.h1<{ color: string }>`
    font-size: 2.4rem;
    color: ${({ color }) => color};
    font-weight: bold;
    
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
