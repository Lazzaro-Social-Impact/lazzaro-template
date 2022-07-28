import React, { ReactElement, useId } from 'react'
import { Carousel } from 'antd'
import styled, { useTheme } from 'styled-components'
import { chunk } from 'lodash'

interface img {
  src: string;
  alt: string;
  key: string;
}

export default function LogosCarousel(): ReactElement {
  const { primary } = useTheme() as {primary: string}

  const randomImagesArray: img[] = Array.from({ length: 8 }, () => ({
    src: './assets/img/Google.png',
    alt: 'random image',
    key: useId(),
  }))
  return (
    <CustomCarousel
      style={{
        backgroundColor: primary,
      }}
      dots={false}
      autoplay
      autoplaySpeed={5000}
    >
      {[
        ...chunk<img>(randomImagesArray, 4).map((e: img[]) => (
          <ImageContainer key={useId()}>
            {e.map((image: img) => (
              <img key={image.key} src={image.src} alt={image.alt} />
            ))}
          </ImageContainer>
        )),
      ]}
    </CustomCarousel>
  )
}

const CustomCarousel = styled(Carousel)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  padding: 0 4.1rem;
  margin-top: 4.2rem;
`

const ImageContainer = styled.div`
  display: flex !important;
  justify-content: space-between;
  height: 150px !important;
  padding: 0 4.8rem;
  align-items: center;
  align-content: center;
  @media (max-width: 799px) {
    padding: 0;
  }

  img {
    width: 200px;
  }
`
