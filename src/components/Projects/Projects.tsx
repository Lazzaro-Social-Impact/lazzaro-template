import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Project } from './Project/Project'

interface IProject {
  text: string
  key: string
}
const projects: IProject[] = [
  {
    key: '1',
    text: 'Today is day to reach out lend a helping hand',
  },
  {
    key: '2',
    text: 'Today is day to reach out lend a helping hand',
  },
  {
    key: '3',
    text: 'Today is day to reach out lend a helping hand',
  }
]
export default function Projects(): ReactElement {
  return (
    <ProjectsSection>
      {projects.map((project: IProject) => (
        <Project key={project.key} text={project.text} />
      ))}
    </ProjectsSection>
  )
}

const ProjectsSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 4.2rem;
  align-items: flex-start;
  padding: 0 4.1rem;    
  `
