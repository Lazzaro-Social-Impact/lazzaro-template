import React, { ReactElement } from 'react'
import styled, { useTheme } from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import HtmlParser from 'react-html-parser'
import { BookmarkIcon } from '../../Icons'
import { Card } from '../../common'

interface IEvent {
  id: string,
  title: string,
  description: string,
  imageURL: string,
}
export default function NearEvent({
  id, title, description, imageURL
}: IEvent): ReactElement {
  const { primary } = useTheme() as {primary: string}
  const navigate = useNavigate()
  return (
    <Card
      mode="column"
      smMode="column"
      maxWidth="40%"
      p="1rem"
      onClick={() => navigate(`/events/${id}`)}
    >
      <div style={{ position: 'relative' }}>
        <BookmarkIcon color={primary} position="absolute" right={2.3} />
        <Image
          src={imageURL}
          alt="Near Event"
        />
      </div>

      <TextContainer>
        <h2>{title}</h2>
        <p>{HtmlParser(description?.slice(0, 150))}</p>
        <Link
          to={`/events/${id}`}
          style={{ alignSelf: 'flex-end', color: primary, fontSize: '1rem' }}
        >
          Read more
        </Link>
      </TextContainer>
    </Card>
  )
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  width: 100%;

  h2 {
    font-size: 1.6rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 1.1px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.3rem;
    }
    p {
      font-size: 1rem;
    }
  }
`

const Image = styled.img`
  max-width: 100%;
  height: 100%;
  height: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`
