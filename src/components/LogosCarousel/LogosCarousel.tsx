import { ReactElement, useId } from 'react'
import styled, { useTheme } from 'styled-components'
import { chunk } from 'lodash'
import { Carousel } from '../common'

interface img {
  src: string;
  alt: string;
  key: string;
}

export default function LogosCarousel(): ReactElement {
  const randomImagesArray: img[] = Array.from({ length: 8 }, () => ({
    src: './assets/img/Google.png',
    alt: 'random image',
    key: useId(),
  }))

  const { primary } = useTheme()
  return (
    <Carousel dots={false} bgColor={primary} mt={4.2}>
      {[
        ...chunk<img>(randomImagesArray, 4).map((e: img[]) => (
          <ImageContainer key={useId()}>
            {e.map((image: img) => (
              <img key={image.key} src={image.src} alt={image.alt} />
            ))}
          </ImageContainer>
        )),
      ]}
    </Carousel>
  )
}

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
