import styled from 'styled-components'
import { getProp } from '../../utils'

interface IProps {
  mode?: TFlexDirection;
  smMode?: TFlexDirection;
  maxWidth?: TMaxWidth;
  width?: TWidth;
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
  gap?: TGap;
  flex?: TFlex;
}

const Card = styled.div<IProps>`
  display: flex;
  justify-content: flex-start;
  flex-direction: ${({ mode }) => mode};
  width: ${({ width }) => width && width};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  gap: ${({ gap }) => getProp(gap)};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;
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
  background-color: ${({ bgColor }) => bgColor && bgColor};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  flex: ${({ flex }) => flex && flex};

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.45);
  }

  @media (max-width: 768px) {
    flex-direction: ${({ smMode }) => smMode};
    max-width: 100%;
  }
`

Card.defaultProps = {
  mode: 'row',
  smMode: 'row',
  gap: 0.8,
}

export default Card
