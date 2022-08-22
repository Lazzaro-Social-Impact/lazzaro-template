import styled from 'styled-components'

interface IProps {
  mt?:TMarginTop;
  my?:TMarginBlock;
}

const Center = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ mt }) => mt && mt}rem;
  margin-block: ${({ my }) => my && my}rem;
`

export default Center
