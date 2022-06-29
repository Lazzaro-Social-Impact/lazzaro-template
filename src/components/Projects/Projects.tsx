import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Project } from './Project/Project'

const projects: object[] = [
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
export function Projects(): ReactElement {
  return (
    <ProjectsSection>
      {projects.map((project: any) => (
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
  padding: 0 4.8rem;    
  `
