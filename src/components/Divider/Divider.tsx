import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface IProps {
  order?: number
  display?: string
}

export default function Divider({ order, display }: IProps): ReactElement {
  return (
    <DividerDiv display={display} order={order} />
  )
}

const DividerDiv = styled.div<IProps>`
    width: 100vw;
    height: 11.6rem;
    order: ${({ order }) => order};
    display: ${({ display }) => display};
    background-color: ${({ theme }) => theme.primary};
    margin-top: 3.2rem;
`

Divider.defaultProps = {
  order: 0,
  display: 'block',
}
