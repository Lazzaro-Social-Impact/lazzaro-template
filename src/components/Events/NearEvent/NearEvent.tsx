import { ReactElement } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import HtmlParser from 'react-html-parser'
import { BookmarkIcon } from '../../Icons'
import {
  Card, Image, Link, Text
} from '../../common'

interface IProps {
  id: string,
  title: string,
  description: string,
  imageURL: string,
}
export default function NearEvent(props: IProps): ReactElement {
  const {
    id, title, description, imageURL
  } = props
  const navigate = useNavigate()
  const navigateTo = (path: `/events/${string}`) => () => navigate(path)

  return (
    <Card mode="column" smMode="column" maxWidth="40%" p={1} onClick={navigateTo(`/events/${id}`)}>
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
