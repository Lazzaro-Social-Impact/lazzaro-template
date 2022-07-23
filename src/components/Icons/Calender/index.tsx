/* eslint-disable max-len */
import { CalendarFilled, CalendarOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'

interface IProps {
  date: number;
  type?: 'outlined' | 'filled';
  color: TColor;
  size: string;
  style?: React.CSSProperties;
}

const CalenderIcon = (props: IProps) => {
  const {
    date, type, color, size, style
  } = props

  const CalendarIcon = type === 'outlined' ? CalendarOutlined : CalendarFilled

  const CalendarStyles = { fontSize: size, color }

  return (
    <Calender style={style}>
      <CalendarIcon style={CalendarStyles} />
      <Date>{date}</Date>
    </Calender>
  )
}

const Calender = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
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
}
