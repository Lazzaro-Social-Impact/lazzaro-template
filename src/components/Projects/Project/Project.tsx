/* eslint-disable max-len */
import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Typography } from 'antd'

const { Text } = Typography
interface ProjectProps {
   text: string
}

export function Project({ text } : ProjectProps): ReactElement<ProjectProps> {
  return (
    <ProjectCard>
      <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
      <Text>{text}</Text>
      <ProjectFooter>
        <a>Read more</a>
        <DonateButton>Donate</DonateButton>
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

const DonateButton = styled.button`
    color: white;
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
    background-color: #5CB780;
    text-align: center;
    border: none;
    border-radius: 35px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        background-color: #5CB799;
    }
  `
