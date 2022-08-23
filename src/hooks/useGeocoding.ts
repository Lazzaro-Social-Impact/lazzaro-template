import useDependant from './useDependant'

type TGeocode = {
  features: [{ center: [lng:number, lat:number] }]
}

const token = import.meta.env.VITE_MAPBOX_TOKEN

const useGeocoding = (address: string) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${token}&limit=1;`

  const { data: { features } = {}, ...rest } = useDependant<TGeocode>(url, [url], address)

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
