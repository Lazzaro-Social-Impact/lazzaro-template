import React, { ReactElement } from 'react'
import styled from 'styled-components'

export default function Divider(): ReactElement {
  return (
    <DividerDiv />
  )
}

const DividerDiv = styled.div`
    width: 100vw;
    height: 11.6rem;
    background-color: #5CB780;
`
