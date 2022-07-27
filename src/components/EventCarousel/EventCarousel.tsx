import React, { ReactElement } from 'react'
import { Carousel } from 'antd'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useDependant } from '../../hooks'
import { getEventImages } from '../../api/getApiServices'

interface IImage {
  id: string
  img_url: string
}

export function EventCarousel(): ReactElement {
  const { id } = useParams() as { id: string }

  const { data: images } = useDependant(getEventImages(id), [`images${id}`], id)
  return (
    <Carousel>
      {images?.map((image:IImage) => (
        <ImageContainer key={image.id}>
          <img src={image.img_url} alt="" />
        </ImageContainer>
      ))}
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
