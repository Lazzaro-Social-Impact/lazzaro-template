import { CalendarFilled, CalendarOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { getProp } from '../../../utils'

interface IProps {
  date: number;
  type?: 'outlined' | 'filled';
  color: TColor;
  size?: TFontSize;
  style?: React.CSSProperties;
  position?: TPosition;
  top?: TTop
  left?: TLeft;
  right?: TRight;
  bottom?: TBottom;
}

const CalenderIcon = (props: IProps) => {
  const {
    date, type, color, size, position, top, left, right, bottom, style
  } = props

  const Icon = type === 'outlined' ? CalendarOutlined : CalendarFilled

  const IconStyles = { fontSize: size, color }

  return (
    <Calender style={style} position={position} top={top} left={left} right={right} bottom={bottom}>
      <Icon style={IconStyles} />
      <Date>{date}</Date>
    </Calender>
  )
}

const Calender = styled.div<Pick<IProps, 'position'| 'top'|'bottom'|'right'|'left'>>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
  position: ${({ position }) => position};
  top: ${({ top }) => getProp(top)};
  right: ${({ right }) => getProp(right)};
  left: ${({ left }) => getProp(left)};
  bottom: ${({ bottom }) => getProp(bottom)};
`

const Date = styled(Typography.Text)`
  font-size: 1.4em;
  font-weight: bold;
  position: absolute;
  margin-bottom: 0.14em;
`
export default CalenderIcon

CalenderIcon.defaultProps = {
  style: {},
  type: 'outlined',
  position: 'initial',
  top: 'initial',
  left: 'initial',
  right: 'initial',
  bottom: 'initial',
  size: '1.4em',
}
