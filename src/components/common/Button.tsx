import styled from 'styled-components'
import { getProp } from '../../utils'

interface IProps {
  color?: TColor;
  bgColor?: TBgColor;
  p?: TPadding;
  px?: TPaddingInline;
  py?: TPaddingBlock;
  m?: TMargin;
  mt?: TMarginBlock;
  mx?: TMarginInline;
  my?: TMarginBlock;
  fontSize?: TFontSize;
  weight?: TWeight;
  disabled?: boolean;
  radius?: TBorderRadius;
  hoverBgColor?: TBgColor;
  hoverColor?: TColor;
}

const Button = styled.button<IProps>`
  color: ${({ color }) => color};
  padding: ${({ p }) => p && getProp(p)};
  padding-inline: ${({ px }) => getProp(px)};
  padding-block: ${({ py }) => getProp(py)};
  margin: ${({ m }) => m && getProp(m)};
  margin-inline: ${({ mx }) => mx && getProp(mx)};
  margin-block: ${({ my }) => my && getProp(my)};
  margin-top: ${({ mt }) => mt && getProp(mt)};
  font-size: ${({ fontSize }) => fontSize && getProp(fontSize)};
  font-weight: ${({ weight }) => weight};
  border-radius: ${({ radius }) => `${radius}px`};
  border: none;
  font-family: inherit;
  text-align: center;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme, bgColor }) => bgColor || theme.primary};

  &:hover {
    transform: scale(1.05);
    background-color: ${({ hoverBgColor, theme }) => hoverBgColor || theme.secondary};
    color: ${({ hoverColor }) => hoverColor && hoverColor};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

Button.defaultProps = {
  color: '#fff',
  weight: 'bold',
  radius: 25,
  px: '1.8rem',
  py: '0.8rem',
}

export default Button
