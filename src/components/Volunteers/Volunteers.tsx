/* eslint-disable max-len */
import React, { ReactElement, useId } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'
import makeChunks from '../../app/utils/makeChunks'
import { VolunteerCard } from './VolunteerCard/VolunteerCard'

export default function Volunteers(): ReactElement {
  interface card {
    name: string,
    position: string,
    key: string,
    image: {
        src: string,
        alt: string
    }
  }

  const randomImagesArray: card[] = Array.from({ length: 8 }, () => ({
    name: 'Alex Martin',
    position: 'Professional Mind Coach',
    image: {
      src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      alt: 'random image',
    },
    key: useId()
  }))
  return (
    <VolunteersSection>
      <SectionTitle>Our Volunteers</SectionTitle>
      <CustomCarousel autoplay>
        {[...makeChunks<card>(randomImagesArray, 3).map((chunk: card[]) => (
          <VolunteerCards key={useId()}>
            {chunk.map((image: card) => (
              <VolunteerCard {...image} />
            ))}
          </VolunteerCards>
        ))]}
      </CustomCarousel>
    </VolunteersSection>
  )
}

const VolunteersSection = styled.section`
    text-align: center;
    margin-top: 10.2rem;
`
const SectionTitle = styled.h1`
font-size: 2.1rem;
font-weight: bold;
margin-bottom: 0;
`
const CustomCarousel = styled(Carousel)`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 600px;

 .slick-dots li button {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: #777;
  }
  .slick-dots li.slick-active button {
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background: black;
  }
  @media screen and (max-width: 768px) {
        height: 200px;
    }
`
const VolunteerCards = styled.div`
display: flex !important;
justify-content: center;
align-items: center;
height: 400px !important;
gap: 4.8rem;
margin-top: 4.8rem;
@media screen and (max-width: 768px) {
       margin-top: 1.2rem;
       height: 200px !important;
    }
`
