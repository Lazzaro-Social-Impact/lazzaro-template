import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { chunk } from 'lodash'
import {
  MutableRefObject, ReactElement, useRef
} from 'react'
import styled from 'styled-components'
import { getProjectsURL } from '../../api/getApiServices'
import { useAppSelector, useDependant, useObserver } from '../../hooks'
import { Carousel } from '../common'
import { Project } from './Project/Project'

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
    data: projects,
  } = useDependant(getProjectsURL(ongId), ['projects'], isSectionVisible && ongId)

  return (
    <section ref={sectionRef}>
      <Carousel
        arrows
        nextArrow={<ArrowRightOutlined />}
        prevArrow={<ArrowLeftOutlined />}
        dots={false}
      >
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
      </Carousel>
    </section>
  )
}

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  margin-top: 4.2rem;
  padding: 0 4.1rem;
  gap: 2rem;
  `
