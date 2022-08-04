import moment from 'moment'
import parse from 'react-html-parser'
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
  };
}

function CourseCard({ course }: IProps) {
  const date = Number(moment(course.start_time).format('D'))

  return (
    <Card mode="row" smMode="column" my={2} p={1} maxWidth="45rem">
      <Box height={14.5}>
        <CalendarIcon
          date={date}
          type="filled"
          size="4em"
          position="absolute"
          top={-1.23}
          right={1.5}
        />
        <Image src={course.imageURL} alt={course.title} width="800px" />
      </Box>
      <Flex direction="column" justify="space-between" p={1} textAlign="left">
        <h2>{course.title.slice(0, 23)}</h2>
        {parse(course.description.slice(0, 100))}
        <Link to={`/courses/${course.id}`} align="flex-end" underlined size={1.3}>
          Read more
        </Link>
      </Flex>
    </Card>
  )
}

export default CourseCard
