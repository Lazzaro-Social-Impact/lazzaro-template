import styled from 'styled-components'

interface IProps {
  size?:TFontSize
}

const Label = styled.label<IProps>`
  color: ${({ color, theme }) => color || theme.primary};
  font-size:  ${({ size }) => size}rem;
  font-weight: bold;
  display: block;
  width: 100%;
  max-width: 500px;
`

Label.defaultProps = {
  size: 1
}
export default Label
