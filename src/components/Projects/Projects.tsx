/* eslint-disable max-len */
import React, { MutableRefObject, ReactElement, useRef } from 'react'
import styled from 'styled-components'
import { getProjectsURL } from '../../api/getApiServices'
import { useAppSelector, useDependant, useObserver } from '../../hooks'
import { Project } from './Project/Project'

interface IProject {
  imageURL: string;
  id: string;
  title: string;
}

export default function Projects(): ReactElement {
  const sectionRef = useRef() as MutableRefObject<HTMLElement>
  const isSectionVisible = useObserver(sectionRef)
  const ongId = useAppSelector(({ ong }) => ong.ongId)

  const {
    data: projects,
    isLoading,
    isError,
  } = useDependant(getProjectsURL(ongId), ['causes'], isSectionVisible && ongId)

  return (
    <ProjectsSection id="projects" ref={sectionRef}>
      {isLoading && <div>loading...</div>}
      {isError && <div>lisError</div>}

      {projects?.map((project: IProject) => (<Project {...project} />))}
    </ProjectsSection>
  )
}

const ProjectsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  margin-top: 4.2rem;
  padding: 0 4.1rem;
  gap: 2rem;
`
