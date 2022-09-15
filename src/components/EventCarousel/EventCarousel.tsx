import { ReactElement, useMemo } from 'react'
import { Box, Carousel } from '../common'
import { LazyImageComponent } from '../common/LazyImage'
import Skeleton from '../Skeleton'

interface IProps {
  imgs: { id: string; img_url: string }[];
  isLoading?: boolean;
}

export function EventCarousel({ imgs, isLoading }: IProps): ReactElement {
  if (isLoading) return <Skeleton width={25} height={27} number={1} />

  const memoizedImages = useMemo(() => imgs?.map((img) => (
    <Box key={img.id} maxHeight="420px" width="817px">
      <LazyImageComponent
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          maxWidth: '100%'
        }}
        effect="black-and-white"
        src={img.img_url}
        alt={img.id}
        placeholderSrc={img.img_url}
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
