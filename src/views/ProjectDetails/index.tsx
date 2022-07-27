import { ReactElement } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { ProjectCard } from './Tabs/ProjectCard'
import { Footer, Navbar } from '../../components'
import ImageCarousel from './ImageCarousel'
import Tabs from './Tabs'
import { useAppSelector, useDependant } from '../../hooks'
import { getProjectImagesURL, getProjectsURL } from '../../api/getApiServices'

interface IProject {
  id: string;
  title: string;
  donated: number;
  amount: number;
}

function ProjectDetails(): ReactElement {
  const projectId = useParams().id as string
  const ongId = useAppSelector(({ ong }) => ong.ongId)

  const {
    data: projects
  } = useDependant(getProjectsURL(ongId), ['projects'], ongId)

  const {
    data: images,
  } = useDependant(getProjectImagesURL(projectId), [`images${projectId}`], projectId)

  const projectDetails = projects?.find(({ id }:IProject) => id === projectId)

  return (
    <>
      <Navbar />
      <ImageCarousel {...images} />
      <Flex>
        <Tabs {...projectDetails} />
        {projects.map((project: IProject) => (<ProjectCard project={project} />))}
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
