import { LinkedinFilled } from '@ant-design/icons'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Card } from '../../common'
import { useTheme } from '../../../app/context/theme-context'

interface VolunteerCardProps {
  name: string;
  position: string;
  image: {
    src: string;
    alt: string;
  };
}

export function VolunteerCard({
  name,
  position,
  image,
}: VolunteerCardProps): ReactElement<VolunteerCardProps> {
  const color = useTheme()
  return (
    <Card mode="column" smMode="column" pb={1.5} textAlign="center">
      <VolunteerImage src={image.src} alt={image.alt} />
      <VolunteerName>{name}</VolunteerName>
      <VolunteerPosition color={color}>{position}</VolunteerPosition>
      <LinkedinIcon />
    </Card>
  )
}

const VolunteerImage = styled.img`
  width: 378px;
  height: 180px;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 768px) {
    width: 100% !important;
    height: auto;
  }
`
const VolunteerName = styled.p`
  font-size: 1.1rem;
  margin-top: 1.2rem;
  margin-bottom: 0;
`
const VolunteerPosition = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  padding-bottom: 1.8rem;
  margin-top: 0.4rem;
  font-size: 1rem;
  font-weight: 300;
`

const LinkedinIcon = styled(LinkedinFilled)`
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #5cb780;
  }
`
