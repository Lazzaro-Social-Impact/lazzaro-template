import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
  ReadMore, Button, Text, Image
} from '../../common'

interface ProjectProps {
  imageURL: string;
  title: string;
  id: string;
}

export function Project({ imageURL, title, id }: ProjectProps): ReactElement<ProjectProps> {
  const navigate = useNavigate()
  const navigateTo = (path: `projects/${ProjectProps['id']}`) => () => navigate(path)
  return (
    <ProjectCard>
      <Image src={imageURL} alt="" />
      <Text>{title}</Text>
      <ProjectFooter>
        <ReadMore fontSize={1} onClick={navigateTo(`projects/${id}`)}>
          Read more
        </ReadMore>
        <Button py={0.3} px={0.7} fontSize={1}>
          Donate
        </Button>
      </ProjectFooter>
    </ProjectCard>
  )
}

const ProjectCard = styled.div`
  flex: 1;
  height: 37rem;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  span {
    color: #fff;
    padding: 0 1.2rem;
    font-size: 1.2rem;
    line-height: 1.8;
    width: 55%;
  }

  img {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(0.5);
  }

  @media (max-width: 768px) {
    span {
      width: 100%;
    }
  }
`

const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
`
