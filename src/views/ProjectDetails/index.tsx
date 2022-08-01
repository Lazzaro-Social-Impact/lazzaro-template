import { ReactElement } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { ProjectCard } from './Tabs/ProjectCard'
import { Footer, Navbar } from '../../components'
import ImageCarousel from './ImageCarousel'
import Tabs from './Tabs'
import { useAppSelector, useDependant } from '../../hooks'
import { getProjectImagesURL, getProjectsURL } from '../../api/getApiServices'
import Skeleton from '../../components/Skeleton'

interface IProject {
  id: string;
  title: string;
  donated: number;
  amount: number;
  description: string;
}

type TImages = {
  id: string;
  img_url: string;
}[];

function ProjectDetails(): ReactElement {
  const projectId = useParams().id as string
  const ongId = useAppSelector(({ ong }) => ong.ongId)

  const {
    data: projects = [], isLoading: isProjectsLoading
  } = useDependant<IProject[]>(getProjectsURL(ongId), ['projects'], ongId)

  const {
    data: images = [], isLoading: isImagesLoading
  } = useDependant<TImages>(getProjectImagesURL(projectId), [`images${projectId}`], projectId)

  const projectDetails = projects.find(({ id }) => id === projectId) as IProject

  return (
    <>
      <Navbar />
      {isImagesLoading && <Skeleton number={1} width={100} height={40} px={0} mt={0} />}
      <ImageCarousel images={images} />
      <Flex>
        <Tabs projectDetails={projectDetails} />
        <OtherProjects>
          {isProjectsLoading && (
            <Skeleton width={25} height={29} number={3} justify="flex-end" px={1} />
          )}

          {projects?.map((project) => (
            <ProjectCard project={project} />
          ))}
        </OtherProjects>
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

  & div {
    flex: 1;
  }

  & .ant-tabs {
    max-width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: initial;
    & .ant-tabs {
      max-width: 100%;
    }
  }
`

const OtherProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
  height: 65rem;
  overflow-y: auto;
`
export default ProjectDetails
