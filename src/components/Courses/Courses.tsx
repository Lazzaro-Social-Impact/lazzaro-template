import {
  Fragment, MutableRefObject, ReactElement, useRef
} from 'react'
import styled from 'styled-components'
import { chunk } from 'lodash'
import CourseCard from './CourseCard/CourseCard'
import { Carousel, SectionTitle } from '../common'
import { useAppSelector, useDependant, useObserver } from '../../hooks'
import { getCoursesURL } from '../../api/getApiServices'
import CourseCardSkeleton from '../Skeleton'

interface ICourse {
  title: string;
  description: string;
  location: string;
  imageURL: string;
  start_time: string;
  end_time: string;
  id: string;
  course: boolean;
}

function Courses(): ReactElement {
  const ongId = useAppSelector(({ ong }) => ong?.ongId)
  const sectionRef = useRef() as MutableRefObject<HTMLDivElement>
  const isSectionVisible = useObserver(sectionRef)

  const {
    data: events = [], isLoading
  } = useDependant(getCoursesURL(ongId), ['courses'], isSectionVisible && ongId)

  return (
    <CoursesSection id="courses" ref={sectionRef}>
      <SectionTitle padding={0}>Courses</SectionTitle>
      {isLoading && <CourseCardSkeleton number={2} width={45} height={14} justify="center" />}
      <Carousel arrows dots>
        {[
          ...chunk<ICourse>(events, 2).map((e: ICourse[]) => (
            <Fragment key={events}>
              {e.map((event: ICourse) => (
                <Flex key={event.id}>
                  <CourseCard course={event} />
                </Flex>
              ))}
            </Fragment>
          )),
        ]}
      </Carousel>
    </CoursesSection>
  )
}

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
