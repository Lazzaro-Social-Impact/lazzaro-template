import {
  ReactElement, useEffect, useMemo, useState
} from 'react'
import styled from 'styled-components'
import chunk from 'lodash/chunk'
import { useTranslation } from 'react-i18next'
import { VolunteerCard } from './VolunteerCard/VolunteerCard'
import { useAppSelector } from '../../hooks'
import { Carousel } from '../common'
import { IMember } from '../../types/interfaces'

export default function Volunteers(): ReactElement {
  const members = useAppSelector((state) => state.ong.ongConfig?.team) || []
  const { t } = useTranslation()
  const [numOfCards, setNumOfCards] = useState(3)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    // watch screen size and change number of cards to show
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    if (members?.length > 3 && screenWidth < 600) {
      setNumOfCards(2)
    } else {
      setNumOfCards(3)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [numOfCards, screenWidth])
  const memoizedMembersCards = useMemo(
    () => [
      ...chunk<IMember>(members, numOfCards).map((memberCards, i: number) => (
        <VolunteerCards key={`memberCards ${memberCards[i]}`}>
          {memberCards.map((member: IMember) => (
            <VolunteerCard {...member} key={member.id} />
          ))}
        </VolunteerCards>
      )),
    ],
    [members, numOfCards]
  )

  return (
    <VolunteersSection id="volunteers">
      <SectionTitle>{t('Meet Our Team')}</SectionTitle>
      <Carousel dots>
        {memoizedMembersCards}
      </Carousel>
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
color: ${({ theme }) => theme.primary};
`

const VolunteerCards = styled.div`
display: flex !important;
justify-content: center;
align-items: center;
height: 450px !important;
padding-bottom: 2.4rem;
gap: 4.8rem;
margin-top: 4.8rem;
@media screen and (max-width: 768px) {
       height: 250px !important;
    }
`
