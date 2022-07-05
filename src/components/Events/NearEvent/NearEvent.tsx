/* eslint-disable max-len */
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Bookmark from '../../Bookmark/Bookmark'
import { useTheme } from '../../../app/context/theme-context'
import { Card, ReadMore } from '../../common'

export default function NearEvent(): ReactElement {
  const globalColor = useTheme()

  return (
    <Card mode="column" smMode="column" maxWidth="40%" p={1}>
      <div style={{ position: 'relative' }}>
        <Bookmark color={globalColor} />
        <Image
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="course"
        />
      </div>

      <TextContainer>
        <h2>Deluing is the world best</h2>
        <p>Lorem Ipsum is s galley of type and scrambled i printing and typing i and industry.</p>
        <ReadMore fontSize={1.2} color="black" style={{ alignSelf: 'flex-end' }}>
          Read more
        </ReadMore>
      </TextContainer>
    </Card>
  )
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  width: 100%;

  h2 {
    font-size: 1.6em;
    font-weight: bold;
  }

  p {
    font-size: 1.2em;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.3em;
    }
    p {
      font-size: 1em;
    }
  }
`

const Image = styled.img`
  max-width: 100%;
  height: 100%;
  height: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`
