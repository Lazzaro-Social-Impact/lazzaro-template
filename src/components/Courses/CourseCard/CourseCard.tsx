import styled from 'styled-components'
import moment from 'moment'
import parse from 'react-html-parser'
import { CalendarIcon } from '../../Icons'
import { Card, Image, ReadMore } from '../../common'

interface IProps {
  course: {
    title: string;
    description: string;
    location: string;
    imageURL: string;
    start_time: string;
    end_time: string;
    id: number;
  };
}

function CourseCard({ course }: IProps) {
  const date = Number(moment(course.start_time).format('D'))
  return (
    <Card mode="row" smMode="column" my={2} p="1.5rem" maxWidth="45rem">
      <div style={{ position: 'relative' }}>
        <CalendarIcon
          date={date}
          type="filled"
          size="4em"
          position="absolute"
          top={-1.7}
          right={1.5}
        />
        <Image src={course.imageURL} alt="course" width="800px" height="auto" />
      </div>
      <TextContainer>
        <h2>{course.title.slice(0, 23)}</h2>
        {parse(course.description.slice(0, 100))}
        <ReadMore to={`/courses/${course.id}`} fontSize={1.2} color="black" textAlign="right">
          Read more
        </ReadMore>
      </TextContainer>
    </Card>
  )
}

export default CourseCard

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  width: 100%;

  h2 {
    font-size: 1.6em;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.3em;
    }
    p {
      font-size: 1em;
    }
  }
`
