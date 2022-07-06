/* eslint-disable react/style-prop-object */
import React, { FC } from 'react'
import styled from 'styled-components'

interface IProps {
  color: string;
  style?: React.CSSProperties;
}

const Bookmark: FC<IProps> = ({ color, style }) => (
  <Wrapper style={style}>
    <svg
      version="1.1"
      id="Capa_1"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 321.188 321.188"
      xmlSpace="preserve"
    >
      <polygon points="61.129,0 61.129,321.188 160.585,250.657 260.059,321.188 260.059,0 " />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  </Wrapper>
)
const Wrapper = styled.div`
  width: 100px;
  position: absolute;
  right: 2.3rem;

  @media (max-width: 565px) {
    width: 65px;
  }
`

Bookmark.defaultProps = {
  style: {},
}
export default Bookmark
