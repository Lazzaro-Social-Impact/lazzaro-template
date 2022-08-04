import { ReactElement } from 'react'
import { Box, Carousel, Image } from '../common'

interface IProps {
  imgs: { id: string; img_url: string }[];
  isLoading?: boolean;
}

export function EventCarousel({ imgs, isLoading }: IProps): ReactElement {
  return (
    <>
      {isLoading && <h1>Loading</h1>}
      {!isLoading && (
        <Carousel dots>
          {imgs?.map((img) => (
            <Box key={img.id} maxHeight="420px" width="817px">
              <Image src={img.img_url} alt={img.id} />
            </Box>
          ))}
        </Carousel>
      )}
    </>
  )
}

EventCarousel.defaultProps = {
  isLoading: false,
}
