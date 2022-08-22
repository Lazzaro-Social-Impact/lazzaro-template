import { type ReactElement } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { ProjectCard } from './Tabs/ProjectCard'
import { Footer, Navbar } from '../../components'
import ImageCarousel from './ImageCarousel'
import Tabs from './Tabs'
import Skeleton from '../../components/Skeleton'
import { useDependant } from '../../hooks'
import { getProjectDetailsURL, getProjectImagesURL } from '../../api/getApiServices'
import { IProject } from '../../types/interfaces'
import { TImages } from '../../types/types'

function ProjectDetails(): ReactElement {
  const id = useParams().id as string

  const {
    data: images = [], isLoading: isImagesLoading
  } = useDependant<TImages>(getProjectImagesURL(id), [`project-images-${id}`], id)

  const {
    data: projectDetails,
    isLoading: isProjectLoading
  } = useDependant<IProject>(getProjectDetailsURL(id), [`project-details-${id}`], id)
  return (
    <>
      <Navbar />
      {isImagesLoading && <Skeleton number={1} width={100} height={40} px={0} mt={0} />}
      <ImageCarousel images={images} />
      <Flex>
        <Tabs projectDetails={projectDetails} />
        <OtherProjects>
          {isProjectLoading && (
            <Skeleton width={25} height={29} number={1} justify="flex-end" px={1} />
          )}

          {
           projectDetails && <ProjectCard project={projectDetails} key={projectDetails.id} />
          }
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
  align-items: center;
  gap: 2rem;
  height: 400px;
`
export default ProjectDetails
