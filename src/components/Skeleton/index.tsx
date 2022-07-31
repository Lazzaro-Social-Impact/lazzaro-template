import { FC, useId } from 'react'
import LoadingSkeleton from 'react-loading-skeleton'
import { Flex } from '../common'

interface IProps {
  width: number;
  height: number;
  number: number;
  mt?:TMarginTop;
  justify?:TJustifyContent;
}

const Skeleton: FC<IProps> = (props) => {
  const {
    width, height, number, mt, justify
  } = props

  return (
    <Flex justify={justify} gap={2} px={4.1} mt={mt}>
      {Array.from({ length: number }).map(() => (
        <LoadingSkeleton key={useId()} width={`${width}rem`} height={`${height}rem`} />
      ))}
    </Flex>
  )
}

Skeleton.defaultProps = {
  mt: 4.1,
  justify: 'space-between',
}

export default Skeleton
