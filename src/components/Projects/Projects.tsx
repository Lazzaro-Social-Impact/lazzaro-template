import { chunk } from 'lodash'
import { MutableRefObject, ReactElement, useRef } from 'react'
import styled from 'styled-components'
import { getProjectsURL } from '../../api/getApiServices'
import { useAppSelector, useDependant, useObserver } from '../../hooks'
import { IProject } from '../../types/interfaces'
import { Box, Carousel } from '../common'
import ProjectCardSkeleton from '../Skeleton'
import { Project } from './Project/Project'

export default function Projects(): ReactElement {
  const sectionRef = useRef() as MutableRefObject<HTMLDivElement>
  const isSectionVisible = useObserver(sectionRef)

  const ongId = useAppSelector(({ ong }) => ong.ongId)

  const {
    data: projects = [], isLoading
  } = useDependant<IProject[]>(getProjectsURL(ongId), ['projects'], isSectionVisible && ongId)

  return (
    <section ref={sectionRef}>
      {isLoading && <ProjectCardSkeleton number={3} width={25} height={37} />}

      <Carousel arrows>
        {[
          ...chunk(projects, 3).map((ThreeProjects, i) => (
            <Box key={projects[i].id} id="causes">
              <Grid>
                {ThreeProjects.map((project) => (<Project {...project} key={project.id} />))}
              </Grid>
            </Box>
          )),
        ]}
      </Carousel>
    </section>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  margin-top: 4.2rem;
  padding-inline: 4.1rem;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    padding-inline: 2rem;
  }
`
