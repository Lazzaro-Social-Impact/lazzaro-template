import { ReactElement, useMemo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Box, Carousel } from '../common'
import Skeleton from '../Skeleton'

interface IProps {
  imgs: { id: string; img_url: string }[];
  isLoading?: boolean;
}

export function EventCarousel({ imgs, isLoading }: IProps): ReactElement {
  if (isLoading) return <Skeleton width={25} height={27} number={1} />

  const memoizedImages = useMemo(() => imgs?.map((img) => (
    <Box key={img.id} maxHeight="420px" width="817px">
      <LazyLoadImage
        width="100% !important"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          maxWidth: '100%'
        }}
        effect="black-and-white"
        src={img.img_url}
        alt={img.id}
      />
    </Box>
  )), [imgs])

  return (
    <>
      {!isLoading && (
        <Carousel dots>
          {memoizedImages}
        </Carousel>
      )}
    </>
  )
}

EventCarousel.defaultProps = {
  isLoading: false,
}
