import React, {
  MutableRefObject, ReactElement, useRef
} from 'react'
import { Carousel } from 'antd'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { chunk } from 'lodash'
import CourseCard from './CourseCard/CourseCard'
import { SectionTitle } from '../common'
import { useAppSelector, useDependant, useObserver } from '../../hooks'
import { getEventsURL } from '../../api/getApiServices'

interface ICourse {
  title: string;
  description: string;
  location: string;
  imageURL: string;
  start_time: string;
  end_time: string;
  id: number;
  course: boolean;
}

function Courses(): ReactElement {
  const ongId = useAppSelector(({ ong }) => ong?.ongId)
  const sectionRef = useRef() as MutableRefObject<HTMLDivElement>
  const isSectionVisible = useObserver(sectionRef)

  const {
    data: events = []
  } = useDependant(getEventsURL(ongId), ['events'], isSectionVisible && ongId)

  return (
    <CoursesSection id="courses" ref={sectionRef}>
      <SectionTitle padding={0}>Courses</SectionTitle>
      <CustomCarousel
        arrows
        nextArrow={<ArrowRightOutlined />}
        prevArrow={<ArrowLeftOutlined />}
        dots={false}
        autoplay
        autoplaySpeed={5000}
      >
        {[
          ...chunk<ICourse>(events, 2).map((e: ICourse[]) => (
            <React.Fragment key={events}>
              {e.map(
                (event: ICourse) => event.course && (
                <Flex key={event.id}>
                  <CourseCard course={event} />
                </Flex>
                )
              )}
            </React.Fragment>
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

  @media (max-width: 768px) {
    margin-inline: 0;
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

export default Courses
