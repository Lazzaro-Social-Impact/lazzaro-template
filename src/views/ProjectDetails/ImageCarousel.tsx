import { useMemo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components'
import { Carousel } from '../../components/common'
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
      <LazyImage
        effect="blur"
        src={imgUrl}
        alt="project"
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

const LazyImage = styled(LazyLoadImage)`
width: 100% !important;
height: 100%;
max-width: 100%;
object-fit: cover;
object-position: center;
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
