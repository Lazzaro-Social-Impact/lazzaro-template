import styled from 'styled-components'
import { getProp } from '../../utils'

interface IProps {
  radius?: TBorderRadius;
  width?: TWidth;
  height?: THeight;
  maxWidth?: TMaxWidth;
  p?: TPadding;
  maxHeight?: TMaxHeight;
}

const Image = styled.img<IProps>`
  width: ${({ width }) => width || '100%'} !important;
  height: ${({ height }) => height || '100%'};
  max-height: ${({ maxHeight }) => maxHeight && maxHeight};
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  object-fit: cover;
  object-position: center;
  border-radius: ${({ radius }) => radius && `${radius}px`};
  padding: ${({ p }) => p && getProp(p)};
`
export default Image
