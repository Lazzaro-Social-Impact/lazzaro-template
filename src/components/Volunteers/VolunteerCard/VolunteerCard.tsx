import { LinkedinFilled } from '@ant-design/icons'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface VolunteerCardProps {
    name: string,
    position: string,
    image: {
        src: string,
        alt: string
    }

}

export function VolunteerCard({ name, position, image }: VolunteerCardProps)
: ReactElement<VolunteerCardProps> {
  return (
    <Volunteer>
      <VolunteerImage src={image.src} alt={image.alt} />
      <VolunteerName>{name}</VolunteerName>
      <VolunteerPosition>{position}</VolunteerPosition>
      <LinkedinFilled />
    </Volunteer>
  )
}

const Volunteer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1.8rem;
    background-color: #fff;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.45);
    }

    svg {
      font-size: 1.8rem;
    }
`

const VolunteerImage = styled.img`
    width: 378px;
    height: 180px;
    object-fit:cover;
    object-position: center;

    @media screen and (max-width: 768px) {
        width: 300px;    
        height: auto;
    }
`
const VolunteerName = styled.p`
font-size: 1.1rem;
margin-top: 1.2rem;
margin-bottom: 0;
`
const VolunteerPosition = styled.p`
  color: #5CB780;
padding-bottom: 1.8rem;
margin-top: 0.4rem;
font-size: 1rem;
font-weight: 300;
`
