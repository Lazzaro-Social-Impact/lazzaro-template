import { ReactElement } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import HtmlParser from 'react-html-parser'
import { useNavigate } from 'react-router-dom'
import { CalendarIcon } from '../../Icons'
import { Box, Flex } from '../../common'

interface IProps {
  id: string;
  title: string;
  description: string;
  start_time: string;
}

export default function EventsRow(props: IProps): ReactElement {
  const {
    id, title, description, start_time: startTime
  } = props

  const day = moment(startTime).format('DD')
  const navigate = useNavigate()
  const navigateTo = (path: string) => () => navigate(path)

  return (
    <Box cursor="pointer" mx={1} onHover={{ border: '1px' }} onClick={navigateTo(`/events/${id}`)}>
      <FlexCard justify="center" align="flex-start" px={3} py={1}>
        <Box>
          <CalendarIcon size="4em" date={day} />
        </Box>

        <Box flex={1} px={2}>
          <Title>{title}</Title>
          <Box fontSize={1.1} lineHeight={1.5}>
            {HtmlParser(description.slice(0, 120))}
          </Box>
        </Box>
      </FlexCard>
    </Box>
  )
}

const Title = styled.h2`
  font-size: 1.6em;
  font-weight: bold;

  @media (max-width: 769px) {
    font-size: 1.8rem;
  }
`

const FlexCard = styled(Flex)`
  text-align: left;
  @media (max-width: 769px) {
    margin-top: 3rem;
    flex-wrap: nowrap;
  }
`
