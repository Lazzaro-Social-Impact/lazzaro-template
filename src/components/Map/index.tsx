import { memo, type FC } from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import Skeleton from '../Skeleton'

interface IProps {
    lat: number;
    lng: number;
    height: number;
}
const API_KEY = import.meta.env.VITE_GOOGLE_MAP_KEY

const Map: FC<IProps> = ({ height, lat, lng }) => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY })

  return (
    <>
      {!isLoaded && <Skeleton width={100} height={height} number={1} px={0} mt={0} />}

      {isLoaded && (
      <GoogleMap zoom={13} center={{ lat, lng }} mapContainerStyle={{ width: '100%', height: `${height}rem` }}>
        <Marker position={{ lat, lng }} />
      </GoogleMap>
      )}
    </>
  )
}
export default memo(Map)
