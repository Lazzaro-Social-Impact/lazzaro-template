import styled from 'styled-components'
import { getProp } from '../../utils'

interface IProps {
  fontSize?: TFontSize;
  hovercolor?: TColor;
  color?: TColor;
  textAlign?: TTextAlign;
}

const ReadMore = styled.a<IProps>`
  font-size: ${({ fontSize }) => getProp(fontSize)};
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ color, theme }) => color || theme.primary};

  &:hover {
    color: ${({ hovercolor }) => hovercolor};
    text-decoration: underline;
  }
`

ReadMore.defaultProps = {
  fontSize: 'inherit',
  hovercolor: 'white',
}

export default ReadMore
