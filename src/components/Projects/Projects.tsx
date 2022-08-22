import chunk from 'lodash/chunk'
import { useMemo, type ReactElement } from 'react'
import styled from 'styled-components'
import { getProjectsURL } from '../../api/getApiServices'
import { useAppSelector, useDependant } from '../../hooks'
import { IProject } from '../../types/interfaces'
import { Box, Carousel } from '../common'
import ProjectCardSkeleton from '../Skeleton'
import { Project } from './Project/Project'

export default function Projects(): ReactElement {
  const ongId = useAppSelector(({ ong }) => ong.ongId) || ''

  const {
    data: projects = [], isLoading
  } = useDependant<IProject[]>(getProjectsURL(ongId), ['projects'], ongId)

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

      <Carousel arrows>
        {memoizedProjects}
      </Carousel>
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
