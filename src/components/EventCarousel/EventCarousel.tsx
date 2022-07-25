import React, { ReactElement } from 'react'
import { Carousel } from 'antd'
import styled from 'styled-components'

export function EventCarousel(): ReactElement {
  return (
    <Carousel>
      <ImageContainer>
        <img src="https://via.placeholder.com/817x420" alt="" />
      </ImageContainer>
      <ImageContainer>
        <img src="https://picsum.photos/200/300" alt="" />
      </ImageContainer>
      <ImageContainer>
        <img src="https://picsum.photos/200/300" alt="" />
      </ImageContainer>
    </Carousel>
  )
}

const ImageContainer = styled.div`
    width: 817px;
    height: 420px;

    img {
        max-width: 100%;
        width: 100%;
        height: 420px;
    }
`
