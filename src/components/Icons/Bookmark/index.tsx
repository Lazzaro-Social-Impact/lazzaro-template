import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'
import { getProp } from '../../../utils'

interface IProps {
  color?: TColor;
  style?: React.CSSProperties;
  position?: TPosition;
  top?: TTop;
  left?: TLeft;
  right?: TRight;
  bottom?: TBottom;
  text?: string;
}

const Bookmark: FC<IProps> = (props) => {
  const {
    color, style, position, top, left, right, bottom, text
  } = props
  const { primary } = useTheme() as { primary: string }
  return (
    <Wrapper style={style} position={position} top={top} left={left} right={right} bottom={bottom}>
      {text && <DiscountText>{text}%</DiscountText>}
      <svg
        version="1.1"
        id="Capa_1"
        fill={color || primary}
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
}
const Wrapper = styled.div<Pick<IProps, 'position'|'left'|'right'|'bottom'|'top'>>`
  width: 100px;
  position: ${({ position }) => position};
  top: ${({ top }) => getProp(top)};
  left: ${({ left }) => getProp(left)};
  right: ${({ right }) => getProp(right)};
  bottom: ${({ bottom }) => getProp(bottom)};
  stroke: ${({ theme }) => theme.primary};

  @media (max-width: 565px) {
    width: 65px;
  }
`

const DiscountText = styled.p`
position: absolute;
top: 30%;
right: 30%;
z-index: 1000;
color: white;
font-size: 1rem;
font-weight: bold;
`

Bookmark.defaultProps = {
  style: {},
  position: 'initial',
  top: 'initial',
  left: 'initial',
  right: 'initial',
  bottom: 'initial',
  color: '',
  text: '',

}
export default Bookmark
