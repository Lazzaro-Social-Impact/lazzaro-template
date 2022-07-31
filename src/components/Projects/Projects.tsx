import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { chunk } from 'lodash'
import { MutableRefObject, ReactElement, useRef } from 'react'
import styled from 'styled-components'
import { getProjectsURL } from '../../api/getApiServices'
import { useAppSelector, useDependant, useObserver } from '../../hooks'
import { Carousel } from '../common'
import { Project } from './Project/Project'
import ProjectCardSkeleton from '../Skeleton'

interface IProject {
  imageURL: string;
  id: string;
  title: string;
}

export default function Projects(): ReactElement {
  const sectionRef = useRef() as MutableRefObject<HTMLDivElement>
  const isSectionVisible = useObserver(sectionRef)
  const ongId = useAppSelector(({ ong }) => ong.ongId)

  const {
    data: projects = [], isLoading
  } = useDependant(getProjectsURL(ongId), ['projects'], isSectionVisible && ongId)

  return (
    <section ref={sectionRef}>
      {isLoading && <ProjectCardSkeleton number={3} width={25} height={37} />}

      <CustomCarousel arrows nextArrow={<ArrowRightOutlined />} prevArrow={<ArrowLeftOutlined />}>
        {[
          ...chunk<IProject>(projects, 3).map((e: IProject[]) => (
            <div key={projects}>
              <Div id="projects">
                {e.map((image: IProject) => (
                  <Project {...image} key={image.id} />
                ))}
              </Div>
            </div>
          )),
        ]}
      </CustomCarousel>
    </section>
  )
}

const Div = styled.div`
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

const CustomCarousel = styled(Carousel)`
  .slick-dots-bottom {
    bottom: -52px;
  }

  .slick-dots li button {
    background: ${({ theme }) => theme.primary};
  }
  @media screen and (max-width: 768px) {
    span {
      display: none !important;
    }
  }
`
