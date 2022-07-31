import styled from 'styled-components'
import { getProp } from '../../utils'

interface IProps {
  color?: TColor;
  fontSize?: TFontSize;
  weight?: TFontWeight;
  lineHeight?: TLineHeight;
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
  textAlign?: TTextAlign;
  transform?: TTextTransform;
  decoration?: TTextDecoration;
  textShadow?: TTextShadow;
}

const Text = styled.p<IProps>`
  font-size: ${({ fontSize }) => fontSize && getProp(fontSize)};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ color }) => color && color};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  text-transform: ${({ transform }) => transform && transform};
  text-decoration: ${({ decoration }) => decoration && decoration};
  text-shadow: ${({ textShadow }) => textShadow && textShadow};
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
  width:100%;
`
export default Text

Text.defaultProps = {
  lineHeight: 2.5,
}
