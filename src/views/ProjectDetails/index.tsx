import { type ReactElement } from 'react'
import styled from 'styled-components'
import { type Params, useParams } from 'react-router-dom'
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
  const { id = '' } = useParams<Params<'id'>>()

  const {
    data: images = [], isLoading: isImagesLoading
  } = useDependant<TImages>(getProjectImagesURL(id), [`project-images-${id}`], id)

  const {
    data: projectDetails = {} as IProject, isLoading: isProjectLoading
  } = useDependant<IProject>(getProjectDetailsURL(id), [`project-details-${id}`], id)

  return (
    <>
      <Navbar />
      <ImageCarousel images={images} isLoading={isImagesLoading} />

      <Flex>
        <Tabs projectDetails={projectDetails} />
        <OtherProjects>
          {isProjectLoading && (
            <Skeleton width={25} height={29} number={1} justify="flex-end" px={1} />
          )}

          {projectDetails && <ProjectCard project={projectDetails} />}
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
  margin-inline: 4rem;
  margin-top: 5rem;

  & div {
    flex: 1;
  }
  & > div:last-child {
    flex: 0.7;
  }

  & .ant-tabs {
    max-width: 80%;
  }

  .ant-tabs-tab {
    text-align: center;
  }

  @media (max-width: 968px) {
    flex-direction: column;
    margin-inline: 0;
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
