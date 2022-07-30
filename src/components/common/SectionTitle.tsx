import styled from 'styled-components'
import { getProp } from '../../utils'

interface IProps {
  fontSize?: TFontSize;
  padding?: TPadding;
  marginTop?: TMarginTop;
  marginBottom?: TMarginBottom;
  color?: TColor;
  textAlign?:TTextAlign
}

const SectionTitle = styled.h2<IProps>`
  margin-bottom: ${({ marginBottom }) => getProp(marginBottom)};
  padding: 0 ${({ padding }) => getProp(padding)};
  margin-top: ${({ marginTop }) => getProp(marginTop)};
  font-weight: bold;
  font-size: ${({ fontSize }) => getProp(fontSize)};
  margin-bottom: ${({ marginBottom }) => getProp(marginBottom)};
  color: ${({ color, theme }) => color || theme.primary};
  text-align: ${({ textAlign }) => textAlign && textAlign};
`

SectionTitle.defaultProps = {
  fontSize: 3.8,
  padding: 4.1,
  marginTop: 4.2,
  marginBottom: 2.4
}

export default SectionTitle
