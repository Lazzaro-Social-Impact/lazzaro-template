import styled from 'styled-components'

interface IProps {
  radius?: TRadius;
  width?: TWidth;
  height?: THeight;
  maxWidth?: TMaxWidth;
}

const Image = styled.img<IProps>`
  width: ${({ width }) => width || '100%'} !important;
  height: ${({ height }) => height || '100%'};
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  object-fit: cover;
  object-position: center;
  border-radius: ${({ radius }) => radius && `${radius}px`};
`
export default Image
