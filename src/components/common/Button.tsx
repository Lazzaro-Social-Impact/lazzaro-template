import styled from 'styled-components'

interface IProps {
  color?: string;
  bgColor?: string;
  p?: string | number;
  px?: number;
  py?: number;
  m?: number;
  mx?: number;
  my?: number;
  fontSize?: number | 'initial' | 'inherit'
  weight?: string;
  disabled?: boolean;
  radius?: number;
  hoverBgColor?: string;
  hoverColor?: string;
}

const Button = styled.button<IProps>`
  color: ${({ color }) => color};
  padding: ${({ p }) => (typeof p === 'string' ? p : `${p}rem`)};
  padding-inline: ${({ px }) => `${px}rem`};
  padding-block: ${({ py }) => `${py}rem`};
  margin: ${({ m }) => `${m}rem`};
  margin-inline: ${({ mx }) => `${mx}rem`};
  margin-block: ${({ my }) => `${my}rem`};
  font-size: ${({ fontSize }) => (typeof fontSize === 'string' ? fontSize : `${fontSize}rem`)};
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
  hoverBgColor: 'none'
}

export default Button
