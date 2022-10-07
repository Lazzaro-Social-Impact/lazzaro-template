import { useEffect, useState } from 'react'

type IProps = {
    objectToResizeInitialWidth: number
    mediumSize: number
    smallSize: number
}
const useResize = ({
  objectToResizeInitialWidth,
  mediumSize,
  smallSize,
}: IProps) => {
  const [objectSize, setobjectSize] = useState(objectToResizeInitialWidth)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const resize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', resize)

    switch (true) {
      case screenWidth < 768:
        setobjectSize(smallSize)
        break
      case screenWidth < 992:
        setobjectSize(mediumSize)
        break
      default:
        setobjectSize(objectToResizeInitialWidth)
    }

    return () => {
      window.removeEventListener('resize', resize)
    }
  })

  return objectSize
}

export default useResize
