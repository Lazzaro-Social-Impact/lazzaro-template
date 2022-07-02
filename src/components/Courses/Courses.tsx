/* eslint-disable max-len */
import React, { ReactElement, useId } from 'react'
import { Card, Carousel, Typography } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined, CalendarFilled } from '@ant-design/icons'
import makeChunks from '../../app/utils/makeChunks'

const { Meta } = Card

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
      dots
      dotPosition="top"
    >
      {[
        ...makeChunks(dummyCourses, 2).map((chunk: ICourse[]) => (
          <>
            {chunk.map((course: ICourse) => (
              <Flex key={course.id}>
                <Date>
                  <CalendarFilled style={{ fontSize: '4em', color: '#5CB780' }} />
                  <DateNumber>{course.date}</DateNumber>
                </Date>

                <CustomCard cover={<img alt="course" src={course.src} />} hoverable>
                  <Meta title={course.title} description={course.description} />
                  <div style={{ textAlign: 'right' }}>
                    <CustomLink to="/">Read more</CustomLink>
                  </div>
                </CustomCard>
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
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`

const CustomCard = styled(Card)`
  max-width: 37.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 0 5px 0px #aaa;

  .ant-card-cover img {
    width: 100%;
    padding: 0.7rem;
  }
`

const Date = styled.div`
  transform: translate(-7.2rem, 3.2rem);
  z-index: 2;
`

const DateNumber = styled(Typography.Text)`
  font-size: 1.7em;
  font-weight: bold;
  top: 42%;
  left: 40%;
  position: absolute;
`

const CustomLink = styled(Link)`
  border-bottom: 1px solid black;
  color: black;
`

export default Courses
