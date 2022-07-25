import { ReactElement } from 'react'
import styled from 'styled-components'
import { ProjectCard } from './Tabs/ProjectCard'
import { Footer, Navbar } from '../../components'
import ImageCarousel from './ImageCarousel'
import Tabs from './Tabs'

function ProjectDetails(): ReactElement {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <Flex>
        <Tabs />
        <ProjectCard />
      </Flex>
      <Footer />
    </>
  )
}

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #fff;
  margin-inline: 6rem;
  margin-top: 5rem;
  text-align: center;
  gap: 6rem;

  & div {
    flex: 1;
  }

  & .ant-tabs {
    max-width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width:initial;
    & .ant-tabs {
      max-width: 100%;
    }
  }
`
export default ProjectDetails
