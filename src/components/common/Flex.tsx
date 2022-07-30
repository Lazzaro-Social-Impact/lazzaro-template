import styled from 'styled-components'

interface IProps {
  justify?: TJustifyContent;
  align?: TAlignItems;
  direction?: TFlexDirection;
  wrap?: TFlexWrap;
  width?: TWidth;
  mt?:TMarginTop;
  my?: TMarginBlock;
  gap?: TGap;
}
const Flex = styled.div<IProps>`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  width: ${({ width }) => width};
  margin-top: ${({ mt }) => mt && `${mt}rem`};
  margin-block: ${({ my }) => my && `${my}rem`};
  gap: ${({ gap }) => gap && `${gap}rem`};
`

Flex.defaultProps = {
  justify: 'center',
  align: 'center',
  direction: 'row',
  wrap: 'wrap',
  width: '100%',
}

export default Flex
