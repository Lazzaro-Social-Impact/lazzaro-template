import {
  memo, useEffect, useRef, type FC
} from 'react'
import mapboxgl from 'mapbox-gl'
import { Box } from '../common'

interface IProps {
    lat: number;
    lng: number;
    height: number;
}

const Map: FC<IProps> = ({ height, lat, lng }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map>()
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

  useEffect(() => {
    if (mapRef.current) return

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 12,
      attributionControl: false,
    })
  }, [lat, lng])

  return <Box ref={mapContainerRef} height={height} />
}
export default memo(Map)
