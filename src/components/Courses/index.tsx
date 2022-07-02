/* eslint-disable max-len */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import React, { ReactElement, useId } from 'react'
import { Card, Carousel, Typography } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  ArrowLeftOutlined, ArrowRightOutlined, CalendarFilled
} from '@ant-design/icons'

const { Meta } = Card

interface ICourse {
  src: string;
  id: string;
  date: number;
  title: string;
  description: string;
}

function Courses(): ReactElement {
  function makeChunks(arr: ICourse[], len: number) {
    const chunks = []
    let i = 0
    const n = arr.length
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)))
    }
    return chunks
  }

  const dummyCourses = Array.from({ length: 8 }, () => ({
    src: 'https://www.westreadingborough.com/sites/g/files/vyhlif5201/f/styles/news_image/public/pages/special_events_1.jpg?itok=99Rh5N0T',
    id: useId(),
    date: 8,
    title: 'Deluling is the world best',
    description:
      'Lorem Ipsum is s galley of type and scrambled i printing and typing i and industry.',
  }))

  return (
    <Carousel arrows prevArrow={<ArrowLeftOutlined />} nextArrow={<ArrowRightOutlined />} autoplay style={{ margin: '5rem' }} dots dotPosition="top">
      {[
        ...makeChunks(dummyCourses, 2).map((chunk: ICourse[]) => (
          <>
            {chunk.map((course: ICourse) => (
              <Flex key={course.id}>
                <Date>
                  <CalendarFilled style={{ fontSize: '4.5em', color: '#5CB780' }} />
                  <DataNumber style={{ fontSize: '1.7em', fontWeight: 'bold' }}>
                    {course.date}
                  </DataNumber>
                </Date>

                <CustomCard cover={<img alt="course" src={course.src} />} hoverable>
                  <Meta title={course.title} description={course.description} />
                  <div style={{ textAlign: 'right' }}>
                    <Link to="/" style={{ borderBottom: '1px solid black', color: 'black' }}>
                      Read more
                    </Link>
                  </div>
                </CustomCard>
              </Flex>
            ))}
          </>
        )),
      ]}
    </Carousel>
  )
}

const Flex = styled.div`
  display: flex !important;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`

const CustomCard = styled(Card)`
  width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 0 5px 0px #aaa;
`

const Date = styled.div`
  transform: translate(-119px, 55px);
  z-index: 2;
`

const DataNumber = styled(Typography.Text)`
  font-size: 1.5em;
  font-weight: bold;
  top: 42%;
  left: 40%;
  position: absolute;
`
export default Courses
