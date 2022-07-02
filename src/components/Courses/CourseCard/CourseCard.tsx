import { Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const { Meta } = Card

interface ICourseCard {
  course: {
    src: string;
    title: string;
    description: string;
  };
}

const CourseCard = ({ course }: ICourseCard) => (
  <CustomCard cover={<img alt="course" src={course.src} />} hoverable>
    <Meta title={course.title} description={course.description} />

    <ReadMore>
      <CustomLink to="/">Read more</CustomLink>
    </ReadMore>
  </CustomCard>
)

export default CourseCard

const CustomLink = styled(Link)`
  border-bottom: 1px solid black;
  color: black;
`

const CustomCard = styled(Card)`
  margin-top: 2rem;
  max-width: 47.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 0 5px 0px #aaa;

  .ant-card-cover img {
    width: 100%;
    padding: 0.7rem;
  }
`

const ReadMore = styled.div`
  text-align: right;
  margin-top: 2rem;
  font-weight: bold;
`
