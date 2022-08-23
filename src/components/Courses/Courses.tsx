import { Fragment, useMemo, type ReactElement } from 'react'
import chunk from 'lodash/chunk'
import CourseCard from './CourseCard/CourseCard'
import {
  Box, Carousel, Flex, SectionTitle
} from '../common'
import { useAppSelector, useDependant } from '../../hooks'
import { getCoursesURL } from '../../api/getApiServices'
import CourseCardSkeleton from '../Skeleton'
import { ICourse } from '../../types/interfaces'

function Courses(): ReactElement {
  const ongId = useAppSelector(({ ong }) => ong.ongId) || ''

  const {
    data: events = [], isLoading
  } = useDependant<ICourse[]>(getCoursesURL(ongId), ['courses'], ongId)

  const memoizedCourses:JSX.Element[] = useMemo(
    () => [
      ...chunk(events, 2).map((e, i) => (
        <Fragment key={events[i].id}>
          {e.map((event) => (
            <Flex key={event.id} direction="column">
              <CourseCard course={event} />
            </Flex>
          ))}
        </Fragment>
      )),
    ],
    [events]
  )

  return (
    <Box id="courses" px={4.1} mt={4}>
      <SectionTitle padding={0}>Courses</SectionTitle>
      {isLoading && <CourseCardSkeleton number={2} width={45} height={14} justify="center" />}
      <Carousel arrows dots>
        {memoizedCourses}
      </Carousel>
    </Box>
  )
}

export default Courses
