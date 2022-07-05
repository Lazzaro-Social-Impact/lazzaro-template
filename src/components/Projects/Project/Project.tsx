/* eslint-disable max-len */
import React, { ReactElement, } from 'react'
import styled from 'styled-components'
import { Typography } from 'antd'
import { useTheme } from '../../../app/context/theme-context'
import { Button } from '../../common'

const { Text } = Typography
interface ProjectProps {
   text: string
}

export function Project({ text } : ProjectProps): ReactElement<ProjectProps> {
  const globalColor = useTheme()

  return (
    <ProjectCard>
      <img src="https://images.unsplash.com/photo-1606963303394-3bd3608a5c9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
      <Text>{text}</Text>
      <ProjectFooter>
        <a style={{ color: globalColor }}>Read more</a>
        <Button py={0.8} px={1.6} bgColor={globalColor}>Donate</Button>
      </ProjectFooter>
    </ProjectCard>

  )
}

const ProjectCard = styled.div`
  height:37rem;
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

  `

const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;

   a {
    color: #91D2AB;
    text-decoration: underline;
    cursor: pointer;
    font-size: 1.2rem;

   }
  `
