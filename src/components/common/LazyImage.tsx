import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

export const LazyImageComponent = styled(LazyLoadImage)`
  width: 100% !important;
  height: 100%;
  object-fit: cover;
  object-position: center;
  max-width: 100%;
`;
