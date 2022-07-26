import styled from 'styled-components'

interface IProps {
  justify?: TJustifyContent;
  align?: TAlignItems;
  direction?: TFlexDirection;
  wrap?: TFlexWrap;
  width?:TWidth
}
const Flex = styled.div<IProps>`
  display: flex;
  justify-content:  ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  width:  ${({ width }) => width};
`

Flex.defaultProps = {
  justify: 'center',
  align: 'center',
  direction: 'row',
  wrap: 'wrap',
  width: '100%'
}

export default Flex
