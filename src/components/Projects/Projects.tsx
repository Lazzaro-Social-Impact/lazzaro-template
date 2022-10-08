import chunk from 'lodash/chunk'
import { useEffect, useMemo, type ReactElement } from 'react'
import styled from 'styled-components'
import { getProjectsURL } from '../../api/getApiServices'
import { useAppDispatch, useAppSelector, useDependant } from '../../hooks'
import { setPremiumProject } from '../../redux/features'
import { IProject } from '../../types/interfaces'
import { Box, Carousel } from '../common'
import ProjectCardSkeleton from '../Skeleton'
import { Project } from './Project/Project'

export default function Projects(): ReactElement {
  const ongId = useAppSelector(({ ong }) => ong.ongId) || ''
  const dispatch = useAppDispatch()
  const {
    data: projects = [], isLoading
  } = useDependant<IProject[]>(getProjectsURL(ongId), ['projects'], ongId)

  const premiumProject = projects.find(({ isPremium }) => isPremium)
  useEffect(() => {
    dispatch(setPremiumProject(premiumProject))
  }, [premiumProject])

  const memoizedProjects = useMemo(() => [
    ...chunk(projects, 3).map((ThreeProjects, i) => (
      <Box key={projects[i].id}>
        <Grid>
          {ThreeProjects.map((project) => (<Project {...project} key={project.id} />))}
        </Grid>
      </Box>
    )),
  ], [projects])

  return (
    <section id="causes">
      {isLoading && <ProjectCardSkeleton number={3} width={25} height={37} />}

      <CustomCarousel mt={0.4} arrows>
        {memoizedProjects}
      </CustomCarousel>
    </section>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  margin-top: 4.2rem;
  padding-inline: 4.1rem;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    padding-inline: 2rem;
  }
`

const CustomCarousel = styled(Carousel)`
 .anticon.anticon-arrow-right.slick-arrow.slick-next:focus,
 .anticon.anticon-arrow-left.slick-arrow.slick-prev:focus {
  color: ${({ theme }) => theme.secondary};
}
`
