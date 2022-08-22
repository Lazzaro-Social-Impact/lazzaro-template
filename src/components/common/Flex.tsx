import styled from 'styled-components'
import { getProp } from '../../utils'

interface IProps {
  justify?: TJustifyContent;
  align?: TAlignItems;
  direction?: TFlexDirection;
  wrap?: TFlexWrap;
  width?: TWidth;
  mx?: TMarginInline;
  my?: TMarginBlock;
  mt?: TMarginTop;
  mb?: TMarginBottom;
  p?: TPadding;
  py?:TPaddingBlock;
  pb?: TPaddingBottom;
  px?: TPaddingInline;
  pl?: TPaddingLeft;
  gap?: TGap;
  textAlign?: TTextAlign;
  flex?: TFlex;
  bgColor?: TBgColor;
  border?: TBorder;
  radius?: TBorderRadius;

}
const Flex = styled.div<IProps>`
  display: flex;
  position: relative;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  width: ${({ width }) => width};
  margin-top: ${({ mt }) => mt && `${mt}rem`};
  margin-block: ${({ my }) => my && getProp(my)};
  margin-inline: ${({ mx }) => mx && getProp(mx)};
  margin-bottom: ${({ mb }) => mb && `${mb}rem`};
  padding: ${({ p }) => p && `${p}rem`};
  padding-block: ${({ py }) => py && `${py}rem`};
  padding-bottom: ${({ pb }) => pb && `${pb}rem`};
  padding-inline: ${({ px }) => px && `${px}rem`};
  padding-left: ${({ pl }) => pl && `${pl}rem`};
  gap: ${({ gap }) => gap && `${gap}rem`};
  text-align: ${({ textAlign }) => textAlign};
  flex: ${({ flex }) => flex && flex};
  background-color: ${({ bgColor }) => bgColor && bgColor};
  border: ${({ border, theme }) => border && `${border} solid ${theme.primary}`};
  border-radius: ${({ radius }) => radius && `${radius}px`};
`

Flex.defaultProps = {
  justify: 'space-between',
  align: 'center',
  direction: 'row',
  wrap: 'wrap',
  width: '100%',
  textAlign: 'center',
}

export default Flex
