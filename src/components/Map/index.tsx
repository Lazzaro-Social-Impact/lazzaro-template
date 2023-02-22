import { memo, useEffect, useRef, type FC } from 'react';
import mapboxgl from 'mapbox-gl';
import { Box } from '../common';
import Skeleton from '../Skeleton';

interface IProps {
  lat: number;
  lng: number;
  height: number;
  isLoading: boolean;
}

const Map: FC<IProps> = ({ height, lat, lng, isLoading }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map>();
  mapboxgl.accessToken = import.meta.env.REACT_APP_MAPBOX_TOKEN;

  useEffect(() => {
    const mapAlreadyDefined = mapRef.current;
    const mapContainerNotDefined = !mapContainerRef.current;

    if (mapAlreadyDefined || mapContainerNotDefined) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 12,
      attributionControl: false,
    });
  }, [lat, lng]);

  if (isLoading) return <Skeleton width={100} height={height} number={1} px={0} mt={0} />;

  return <Box ref={mapContainerRef} height={height} />;
};
export default memo(Map);
