import { ReactElement } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import HtmlParser from 'html-react-parser'
import { useTranslation } from 'react-i18next'
import { BookmarkIcon } from '../../Icons'
import {
  Box, Card, Link
} from '../../common'
import { LazyImageComponent } from '../../common/LazyImage'

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
  const { t } = useTranslation()
  const navigate = useNavigate()
  const navigateTo = (path: `/events/${string}`) => () => navigate(path)

  return (
    <Card flex={1} mode="column" smMode="column" maxWidth="40%" p={1} onClick={navigateTo(`/events/${id}`)}>
      <Box>
        <BookmarkIcon zIndex={1} position="absolute" right={2.3} top={-1} />
        <LazyImageComponent
          width="100%"
          height="300px"
          src={imageURL}
          alt="Near Event"
          effect="blur"
          placeholderSrc={imageURL}
        />
      </Box>

      <TextContainer>
        <h2>{title}</h2>
        {HtmlParser(description?.slice(0, 150))}
        <Link to={`/events/${id}`} align="right" size={1.2} underlined>
          {t('Read More')}
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
