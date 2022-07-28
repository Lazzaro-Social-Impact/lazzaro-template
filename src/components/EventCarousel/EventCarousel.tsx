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

export function EventCarousel({ imgs, isLoading }: any): ReactElement {
  return (
    <>
      {isLoading && <h1>Loading</h1>}
      {!isLoading && (
      <Carousel autoplay>
        {imgs?.map(({ img_url, id }: any) => (
          <ImageContainer>
            <img src={img_url} alt={id} />
          </ImageContainer>
        ))}
      </Carousel>
      )}
    </>

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
