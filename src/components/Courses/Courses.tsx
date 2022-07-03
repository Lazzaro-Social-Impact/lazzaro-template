/* eslint-disable max-len */
import React, { ReactElement, useId } from 'react'
import { Carousel, Typography } from 'antd'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import makeChunks from '../../app/utils/makeChunks'
import CourseCard from './CourseCard/CourseCard'

interface ICourse {
  src: string;
  id: string;
  date: number;
  title: string;
  description: string;
}

function Courses(): ReactElement {
  const dummyCourses = Array.from({ length: 8 }, () => ({
    src: 'https://images.unsplash.com/photo-1500823050524-096fd13fa287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    id: useId(),
    date: 8,
    title: 'Deluling is the world best',
    description:
      'Lorem Ipsum is s galley of type and scrambled i printing and typing i and industry.',
  }))

  return (
    <CoursesSection>
      <SectionTitle>Courses</SectionTitle>
      <CustomCarousel
        arrows
        nextArrow={<ArrowRightOutlined />}
        prevArrow={<ArrowLeftOutlined />}
        dots={false}
        autoplay
        autoplaySpeed={5000}
      >
        {[
          ...makeChunks(dummyCourses, 2).map((chunk: ICourse[]) => (
            <>
              {chunk.map((course: ICourse) => (
                <Flex key={course.id}>
                  <CourseCard course={course} />
                </Flex>
              ))}
            </>
          )),
        ]}
      </CustomCarousel>
    </CoursesSection>
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

const CoursesSection = styled.section`
  padding: 0 4.1rem;
  margin-top: 4rem;
  
`
const Flex = styled.div`
  display: flex !important;
  width: fit-content;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  position: relative;
`

const SectionTitle = styled(Typography.Title)`
  margin-top: 0;
  margin-bottom: 2.4rem;
  font-size: 3.8rem !important;
  font-weight: bold !important;

`

export default Courses
