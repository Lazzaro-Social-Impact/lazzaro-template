import { ReactElement } from 'react'
import { Carousel } from 'antd'
import styled from 'styled-components'

interface IImage {
  id: string
  img_url: string
}

interface IProps {
  imgs: IImage[]
  isLoading?: boolean
}

export function EventCarousel({ imgs, isLoading }: IProps): ReactElement {
  return (
    <>
      {isLoading && <h1>Loading</h1>}
      {!isLoading && (
        <Carousel autoplay>
          {imgs?.map((img: IImage) => (
            <ImageContainer key={img.id}>
              <img src={img.img_url} alt={img.id} />
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

EventCarousel.defaultProps = {
  isLoading: false,
}
