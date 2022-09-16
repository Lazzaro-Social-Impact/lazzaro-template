import { useMemo } from 'react'
import styled from 'styled-components'
import { Carousel } from '../../components/common'
import { LazyImageComponent } from '../../components/common/LazyImage'
import Skeleton from '../../components/Skeleton'

interface IProps {
  images: {
    id: string;
    img_url: string;
  }[];
  isLoading: boolean;
}

function ImageCarousel({ images, isLoading }: IProps) {
  const memoizedImages = useMemo(() => images.map(({ id, img_url: imgUrl }) => (
    <ImageWrapper key={id}>
      <LazyImageComponent
        effect="blur"
        src={imgUrl}
        alt="project"
        placeholderSrc={imgUrl}
        width="100%"
        height="100%"
      />
    </ImageWrapper>
  )), [images])

  if (isLoading) return <Skeleton number={1} width={130} height={40} px={0} mt={0} />

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
  height: 55vh;
`
const Triangle = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 99%);
  border: 2.2rem solid transparent;
  border-top: 2.2rem solid ${({ theme }) => theme.primary};
`
