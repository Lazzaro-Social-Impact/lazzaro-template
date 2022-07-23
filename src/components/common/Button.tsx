import styled from 'styled-components'
import getProp from './utils'

interface IProps {
  color?: TColor;
  bgColor?: TBgColor;
  p?: TPadding;
  px?: TPaddingInline;
  py?: TPaddingBlock;
  m?: TMargin;
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
  padding: ${({ p }) => getProp(p)};
  padding-inline: ${({ px }) => getProp(px)};
  padding-block: ${({ py }) => getProp(py)};
  margin: ${({ m }) => getProp(m)};
  margin-inline: ${({ mx }) => getProp(mx)};
  margin-block: ${({ my }) => getProp(my)};
  font-size: ${({ fontSize }) => getProp(fontSize)};
  font-weight: ${({ weight }) => weight};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ radius }) => `${radius}px`};
  border: none;
  font-family: inherit;
  text-align: center;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ hoverBgColor }) => hoverBgColor};
    color: ${({ hoverColor }) => hoverColor};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

Button.defaultProps = {
  color: '#fff',
  p: 'initial',
  px: 0,
  py: 0,
  m: 0,
  mx: 0,
  my: 0,
  fontSize: 'inherit',
  weight: 'bold',
  disabled: false,
  radius: 25,
  hoverColor: 'none',
  hoverBgColor: 'none',
}

export default Button
