import styled from 'styled-components'

interface IProps {
  w?:TWidth;
  mt?:TMarginTop;
  mr?:TMarginRight;
}

const Input = styled.input<IProps>`
  width: ${({ w }) => w};
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  font-size: 1rem;
  margin-top: ${({ mt }) => mt}rem;
  margin-right: ${({ mr }) => mr && mr}rem;
  flex: 1;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.primary} 0 0 0 2px;
  }
`

Input.defaultProps = {
  w: '100%',
  mt: 1,
}

export default Input
