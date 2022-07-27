/* eslint-disable max-len */
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'
import { chunk } from 'lodash'
import { VolunteerCard } from './VolunteerCard/VolunteerCard'
import { useAppSelector } from '../../hooks'

export default function Volunteers(): ReactElement {
  const members = useAppSelector((state) => state.ong.ongConfig?.team)

  interface IMember {
    id: string,
    name: string,
    position: string,
    linkedin: string,
    img_url: string,
  }
  return (
    <VolunteersSection>
      <SectionTitle>Our Volunteers</SectionTitle>
      <CustomCarousel autoplay>
        {members && [...chunk(members, 3).map((memberCards: any, i: number) => (
          <VolunteerCards key={`memberCards ${memberCards[i]}`}>
            {memberCards.map((member: IMember) => (
              <VolunteerCard {...member} key={member.id} />
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
    padding: 0 4.1rem;
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
padding-bottom: 2.4rem;
gap: 4.8rem;
margin-top: 4.8rem;
@media screen and (max-width: 768px) {
       margin-top: 1.2rem;
       height: 200px !important;
    }
`
