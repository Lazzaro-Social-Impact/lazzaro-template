/* eslint-disable max-len */
import React, { ReactElement, useId } from 'react'
import { Carousel } from 'antd'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import makeChunks from '../../app/utils/makeChunks'
import CourseCard from './CourseCard/CourseCard'
import CalendarIcon from '../CalenderIcon/CalenderIcon'

interface ICourse {
  src: string;
  id: string;
  date: number;
  title: string;
  description: string;
}

function Courses(): ReactElement {
  const dummyCourses = Array.from({ length: 8 }, () => ({
    src: 'https://www.westreadingborough.com/sites/g/files/vyhlif5201/f/styles/news_image/public/pages/special_events_1.jpg?itok=99Rh5N0T',
    id: useId(),
    date: 8,
    title: 'Deluling is the world best',
    description:
      'Lorem Ipsum is s galley of type and scrambled i printing and typing i and industry.',
  }))

  return (
    <CustomCarousel
      arrows
      nextArrow={<ArrowRightOutlined />}
      prevArrow={<ArrowLeftOutlined />}
      autoplay
      autoplaySpeed={5000}
    >
      {[
        ...makeChunks(dummyCourses, 2).map((chunk: ICourse[]) => (
          <>
            {chunk.map((course: ICourse) => (
              <Flex key={course.id}>
                <CalendarIcon
                  date={course.date}
                  type="filled"
                  color="#5CB780"
                  size="4em"
                  style={{ position: 'absolute', top: '-0.2rem', left: '8rem' }}
                />
                <CourseCard course={course} />
              </Flex>
            ))}
          </>
        )),
      ]}
    </CustomCarousel>
  )
}
const CustomCarousel = styled(Carousel)`
  margin: 4.1rem 5rem;

  @media (min-width: 768px) {
    & .slick-prev,
    & .slick-prev:hover {
      left: 10px;
      z-index: 2;
      color: Black;
      font-size: 20px;
      height: 30px;
    }

    & .slick-next,
    & .slick-next:hover {
      right: 10px;
      z-index: 2;
      color: Black;
      font-size: 20px;
      height: 30px;
    }

    .slick-dots.slick-dots-top li {
      background-color: black;
    }

    .slick-dots.slick-dots-top .slick-active button {
      background-color: rgb(92, 183, 128) !important;
    }
  }
`
const Flex = styled.div`
  display: flex !important;
  width: fit-content;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  position: relative;
`

export default Courses
