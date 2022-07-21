import styled from 'styled-components'
import type { TFontSize } from './CssPropertiesTypes'

interface IProps {
  fontSize?: TFontSize;
  padding?: number;
  marginTop?: number;
  marginBottom?: number;
}
const SectionTitle = styled.h2<IProps>`
  margin-bottom: 2.4rem;
  padding: 0 ${({ padding }) => padding}rem;
  margin-top: ${({ marginTop }) => marginTop}rem;
  font-weight: bold;
  font-size: ${({ fontSize }) => `${fontSize}rem}`};
  margin-bottom: ${({ marginBottom }) => marginBottom}rem;
`

SectionTitle.defaultProps = {
  fontSize: 3.8,
  padding: 4.1,
  marginTop: 4.2,
}

export default SectionTitle
