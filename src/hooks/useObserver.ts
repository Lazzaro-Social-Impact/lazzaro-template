import {
  type MutableRefObject, useEffect, useMemo, useState
} from 'react'

function useObserver(ref: MutableRefObject<HTMLElement>) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const observer = useMemo(
    () => new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsIntersecting(entry.isIntersecting)
    }),
    []
  )

  useEffect(() => {
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}

export default useObserver
