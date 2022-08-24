import { Link as DomLink } from 'react-router-dom'
import styled from 'styled-components'

interface IProps {
  color?: TColor;
  hoverColor?:TColor;
  size?:TFontSize;
  align?:TAlignSelf
  underlined?:boolean;
  mt?: TMarginTop;
}

const Link = styled(DomLink)<IProps>`
    color: ${({ color, theme }) => color || theme.primary};
    font-size: ${({ size }) => size}rem;
    align-self: ${({ align }) => align};
    text-decoration: ${({ underlined }) => (underlined ? 'underline' : 'none')};
    margin-top: ${({ mt }) => mt && mt}rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      color: ${({ hoverColor, theme }) => hoverColor || theme.secondary};
    }
`

Link.defaultProps = {
  size: 1,
  align: 'center',
  underlined: false,
}

export default Link
