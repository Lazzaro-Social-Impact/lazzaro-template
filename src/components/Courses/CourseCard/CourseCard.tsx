import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CalendarIcon from '../../CalenderIcon/CalenderIcon'

interface IProps {
  course: {
    src: string;
    title: string;
    description: string;
    date: number;
  };
}

const CourseCard = ({ course }: IProps) => (
  <CustomCard>
    <div style={{ position: 'relative' }}>
      <CalendarIcon
        date={course.date}
        type="filled"
        color="#5CB780"
        size="4em"
        style={{ position: 'absolute', top: '-0.5rem', right: '0.3rem' }}
      />
      <img src={course.src} alt="course" />
    </div>
    <TextContainer>
      <h2>Deluing is the world best</h2>
      <p>Lorem Ipsum is s galley of type and scrambled i printing and typing i and industry.</p>
      <CustomLink to="/">Read more</CustomLink>
    </TextContainer>
  </CustomCard>
)

export default CourseCard

const CustomCard = styled.div`
  padding: 1rem;
  max-width: 47rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  margin-top: 2rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.45);
  }

  & img {
    max-width: 100%;
    width: 100% !important;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

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

const CustomLink = styled(Link)`
  border-bottom: 1px solid black;
  color: black;
  align-self: flex-end;
  width: fit-content;

  &:hover {
    color: #5cb780;
  }
`
