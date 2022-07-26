import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../../app/context/theme-context'
import { CalendarIcon } from '../../Icons'
import {
  Card, Image, Text, ReadMore
} from '../../common'

interface IProps {
  course: {
    src: string;
    title: string;
    description: string;
    date: number;
  };
}

const CourseCard = ({ course }: IProps) => {
  const globalColor = useTheme()

  return (
    <Card mode="row" smMode="column" my={2} p="1.5rem" maxWidth="45rem">
      <div style={{ position: 'relative' }}>
        <CalendarIcon
          date={course.date}
          type="filled"
          color={globalColor}
          size="4em"
          position="absolute"
          top={-0.3}
          right={1.5}

        />
        <Image src={course.src} alt="course" width="800px" height="auto" />
      </div>
      <TextContainer>
        <h2>Deluing is the world best</h2>
        <Text fontSize={1.2} lineHeight={1.5}>
          Lorem Ipsum is s galley of type and scrambled i printing and typing i and industry.
        </Text>
        <ReadMore fontSize={1.2} color="black" style={{ alignSelf: 'flex-end' }}>
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
