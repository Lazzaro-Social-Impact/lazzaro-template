import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getProp } from '../../utils'

interface IProps {
  fontSize?: TFontSize;
  hoverColor?: TColor;
  color?: TColor;
  textAlign?: TTextAlign;
}

const ReadMore = styled(Link)<IProps>`
  font-size: ${({ fontSize }) => getProp(fontSize)};
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    text-decoration: underline;
  }
`

ReadMore.defaultProps = {
  fontSize: 'inherit',
  hoverColor: '#5CB780',
  color: '#777',
  textAlign: 'center'
}

export default ReadMore
