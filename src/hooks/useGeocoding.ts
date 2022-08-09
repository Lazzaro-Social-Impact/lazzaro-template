import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

type TGeocode = {
  features: [{ center: [number, number] }]
}

const { REACT_APP_MAPBOX_TOKEN: token } = process.env

const useGeocoding = (address: string) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${token}&limit=1;`

  const { data: { features } = {}, ...rest } = useQuery<TGeocode>([url], async () => {
    const { data } = await axios.get(url)
    return data
  })

  if (!features?.length) {
    return {
      lng: 0, lat: 0, ...rest
    }
  }

  const [lng, lat] = features[0].center

  return {
    lng, lat, ...rest
  }
}

export default useGeocoding
