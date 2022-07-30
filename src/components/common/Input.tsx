import styled from 'styled-components'

interface IProps {
  w?:TWidth;
  mt?:TMarginTop;
}

const Input = styled.input<IProps>`
  width: ${({ w }) => w};
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  font-size: 1rem;
  margin-top: ${({ mt }) => mt}rem;
  flex:1;

  &:focus {
    outline: none;
  }
`

Input.defaultProps = {
  w: '100%',
  mt: 1,
}

export default Input
