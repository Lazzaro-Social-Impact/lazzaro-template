import { ReactElement } from 'react'
import styled, { useTheme } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import HtmlParser from 'react-html-parser'
import { BookmarkIcon } from '../../Icons'
import {
  Card, Image, Link, Text
} from '../../common'

interface IEvent {
  id: string,
  title: string,
  description: string,
  imageURL: string,
}
export default function NearEvent({
  id, title, description, imageURL
}: IEvent): ReactElement {
  const { primary } = useTheme()
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
        <BookmarkIcon position="absolute" right={2.3} top={-1} />
        <Image src={imageURL} alt="Near Event" p={1} />
      </div>

      <TextContainer>
        <h2>{title}</h2>
        <Text>{HtmlParser(description?.slice(0, 150))}</Text>
        <Link to={`/events/${id}`} align="right">
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
