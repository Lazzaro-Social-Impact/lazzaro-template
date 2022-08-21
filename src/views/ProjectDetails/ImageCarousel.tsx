import { useMemo } from 'react'
import styled from 'styled-components'
import { Carousel, Image } from '../../components/common'

interface IProps {
  images: {
    id: string;
    img_url: string;
  }[];
}

function ImageCarousel({ images }: IProps) {
  const memoizedImages = useMemo(() => images.map(({ id, img_url: imgUrl }) => (
    <ImageWrapper key={id}>
      <Image src={imgUrl} alt="project" />
    </ImageWrapper>
  )), [images])

  return (
    <Section>
      <Carousel arrows>
        {memoizedImages}
      </Carousel>

      <Triangle />
    </Section>
  )
}

export default ImageCarousel

const Section = styled.section`
  position: relative;
`

const ImageWrapper = styled.div`
  width: 100%;
  max-height: 40rem;
`
const Triangle = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 99%);
  border: 2.2rem solid transparent;
  border-top: 2.2rem solid ${({ theme }) => theme.primary};
`
