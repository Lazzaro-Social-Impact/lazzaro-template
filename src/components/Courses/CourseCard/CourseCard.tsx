import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTheme } from '../../../app/context/theme-context'
import CalendarIcon from '../../CalenderIcon/CalenderIcon'
import { Card } from '../../common/Card'
import ReadMore from '../../common/ReadMore'

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
    <Card mode="row" smMode="column" gutter={2} p={2} maxWidth="45rem">
      <div style={{ position: 'relative' }}>
        <CalendarIcon
          date={course.date}
          type="filled"
          color={globalColor}
          size="4em"
          style={{ position: 'absolute', top: '-0.5rem', right: '0.3rem' }}
        />
        <Image src={course.src} alt="course" />
      </div>
      <TextContainer>
        <h2>Deluing is the world best</h2>
        <p>Lorem Ipsum is s galley of type and scrambled i printing and typing i and industry.</p>
        <ReadMore
          fontSize="0.8"
          color="black"
          style={{ alignSelf: 'flex-end' }}
        >Read more
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

  p {
    font-size: 1.2em;
    line-height: 1.5;
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

const Image = styled.img`
  max-width: 100%;
  width: 800px !important;
  height: auto;
`
