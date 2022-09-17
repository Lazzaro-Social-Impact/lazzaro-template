import moment from 'moment'
import HtmlParser from 'html-react-parser'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { CalendarIcon } from '../../Icons'
import {
  Box,
  Card, Flex, Image, Link,
} from '../../common'

interface IProps {
  course: {
    title: string;
    description: string;
    location: string;
    imageURL: string;
    start_time: string;
    end_time: string;
    id: string;
  },
  index: number;
}

function CourseCard({
  course: {
    title, description,
    imageURL, start_time: startTime, id,
  }, index
}: IProps) {
  const date = Number(moment(startTime).format('D'))
  const { t } = useTranslation()
  return (
    <Card
      mode="row"
      mt={index % 2 !== 0 ? 0 : 0}
      mb={index % 2 === 0 ? 0 : '1.8rem'}
      p={1}
      maxWidth="45rem"
    >
      <Box height={15}>
        <CalendarIcon
          date={date}
          type="filled"
          size="4em"
          position="absolute"
          top={-1.23}
          right={1.5}
        />
        <Image src={imageURL} alt={title} width="50rem" />
      </Box>
      <CustomFlex direction="column" justify="space-between" p={1} textAlign="left">
        <h2>{title?.slice(0, 23)}</h2>
        {HtmlParser(description?.slice(0, 100))}
        <Link to={`/courses/${id}`} align="flex-end" underlined size={1}>
          {t('Read More')}
        </Link>
      </CustomFlex>
    </Card>
  )
}

const CustomFlex = styled(Flex)`
 h2 {
  font-size: 1.4rem;
 }

 p {
  font-size:0.9rem;
 }
`

export default CourseCard
