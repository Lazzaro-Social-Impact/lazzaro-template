import { type ReactElement } from 'react'
import styled from 'styled-components'
import { ErrorInputProps } from '../../types/interfaces'

export function ErrorInput({ msg, mt, align }: ErrorInputProps): ReactElement {
  return (
    <ErrorMsg align={align} mt={mt}>
      {msg}
    </ErrorMsg>
  )
}

const ErrorMsg = styled.p<ErrorInputProps>`
  color: red;
  margin-bottom: 0;
  margin-top: ${({ mt }) => `${mt}rem` || '0'};
  align-self: ${({ align }) => align && align};
`

ErrorInput.defaultProps = {
  mt: 0,
  msg: '',
}
