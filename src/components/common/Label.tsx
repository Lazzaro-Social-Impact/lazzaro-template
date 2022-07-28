import styled from 'styled-components'

const Label = styled.label`
  color: ${({ color, theme }) => color || theme.primary};
  font-size: 1rem;
  font-weight: bold;
  display: block;
  text-align: left;
  width: 100%;
  max-width: 500px;
`

export default Label
