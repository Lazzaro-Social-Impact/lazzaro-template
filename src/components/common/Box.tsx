import styled from 'styled-components'
import { getProp } from '../../utils'

interface IProps {
  maxWidth?: TMaxWidth;
  width?: TWidth;
  height?: THeight;
  maxHeight?: TMaxHeight;
  py?: TPaddingBlock;
  px?: TPaddingInline;
  pl?: TPaddingLeft;
  pr?: TPaddingRight;
  pt?: TPaddingTop;
  pb?: TPaddingBottom;
  p?: TPadding;
  mt?: TMarginTop;
  mb?: TMarginBottom;
  ml?: TMarginLeft;
  mr?: TMarginRight;
  mx?: TMarginInline;
  my?: TMarginBlock;
  m?: TMargin;
  bgColor?: TBgColor;
  textAlign?: TTextAlign;
  fontSize?: TFontSize;
  lineHeight?: TLineHeight;
  position?: TPosition;
  cursor?: TCursor;
  border?: TBorder;
  onHover?: TOnHover;
  flex?: TFlex;
}

const Box = styled.div<IProps>`
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => (typeof height === 'number' ? `${height}rem` : height)};
  max-height: ${({ maxHeight }) => maxHeight && maxHeight};
  padding: ${({ p }) => p && getProp(p)};
  padding-block: ${({ py }) => py && getProp(py)};
  padding-inline: ${({ px }) => px && getProp(px)};
  padding-left: ${({ pl }) => pl && getProp(pl)};
  padding-right: ${({ pr }) => pr && getProp(pr)};
  padding-top: ${({ pt }) => pt && getProp(pt)};
  padding-bottom: ${({ pb }) => pb && getProp(pb)};
  margin: ${({ m }) => m && getProp(m)};
  margin-top: ${({ mt }) => mt && getProp(mt)};
  margin-bottom: ${({ mb }) => mb && getProp(mb)};
  margin-left: ${({ ml }) => ml && getProp(ml)};
  margin-right: ${({ mr }) => mr && getProp(mr)};
  margin-block: ${({ my }) => my && getProp(my)};
  margin-inline: ${({ mx }) => mx && getProp(mx)};
  color: ${({ color }) => color && color};
  background-color: ${({ bgColor }) => bgColor && bgColor};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  font-size: ${({ fontSize }) => fontSize && getProp(fontSize)};
  line-height: ${({ lineHeight }) => lineHeight && lineHeight};
  position: ${({ position }) => position};
  cursor: ${({ cursor }) => cursor && cursor};
  flex: ${({ flex }) => flex && flex};

  &:hover {
    border: 
    ${({ onHover, theme }) => onHover?.border && `${onHover.border} solid ${theme.primary}`};
  }
`

Box.defaultProps = {
  width: 'auto',
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '100%',
  position: 'relative',
}

export default Box
