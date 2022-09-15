import { JSXElementConstructor } from 'react'
import Divider from '../Divider/Divider'

type TProps = {
  feature: boolean | undefined
  zones: number
  orderWithZones: number
  Component: JSXElementConstructor<{order: number}>
  orderWithoutZones: number
  display: string
}

export default function ReorderComponent({
  feature,
  zones,
  Component,
  orderWithZones,
  orderWithoutZones,
  display
}: TProps) {
  return (
    <>
      {feature && zones
        ? <Component order={orderWithZones} />
        : !zones && feature
          ? <Component order={orderWithoutZones} />
          : (zones === 3 || zones === 2) && feature === false ? <Divider display={display} order={orderWithZones} />
            : null}
    </>
  )
}
