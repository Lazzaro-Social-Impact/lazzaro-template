import { LinkedinFilled } from '@ant-design/icons'
import React, { ReactElement } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components'
import { IMember } from '../../../types/interfaces'
import { Card } from '../../common'

export function VolunteerCard({
  name,
  position,
  img_url: imgUrl,
  linkedin,
}: IMember): ReactElement<IMember> {
  return (
    <CustomCard mode="column" smMode="column" pb={1.5} textAlign="center">
      <ImageContainer>
        <LazyImage effect="blur" src={imgUrl} alt="Volunteer" />
      </ImageContainer>
      <VolunteerName>{name}</VolunteerName>
      <VolunteerPosition>{position}</VolunteerPosition>
      <LinkedinIcon onClick={() => window.open(linkedin)} />
    </CustomCard>
  )
}
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  `

const LazyImage = styled(LazyLoadImage)`
    object-fit: cover;
  object-position: center;
  width: 100%;

  @media screen and (max-width: 768px) {
   width: 100% !important;
   height: 100% !important;
}

`
const VolunteerName = styled.p`
  font-size: 1.1rem;
  margin-top: 1.2rem;
  margin-bottom: 0;
`
const VolunteerPosition = styled.p`
  margin-top: 0.4rem;
  font-size: 1rem;
  font-weight: 300;
`
const CustomCard = styled(Card)`
width: 378px;
height: 387px;
display: flex;
flex-direction: column;
justify-content: space-between;
@media screen and (max-width: 768px) {
  height: 250px;
}

@media screen and (max-width: 420px) {
  height: 135px;
}

`
const LinkedinIcon = styled(LinkedinFilled)`
  font-size: 2rem;
  cursor: pointer;
  align-self: center;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.secondary};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  
  @media screen and (max-width: 768px) {
    display: inline-block !important;

  }
`
