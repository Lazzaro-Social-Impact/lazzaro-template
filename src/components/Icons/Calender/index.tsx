import { CalendarFilled, CalendarOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import React from 'react'
import styled, { useTheme } from 'styled-components'
import { getProp } from '../../../utils'

interface IProps {
  date: string | number;
  type?: 'outlined' | 'filled';
  color?: TColor;
  size?: TFontSize;
  style?: React.CSSProperties;
  position?: TPosition;
  top?: TTop
  left?: TLeft;
  right?: TRight;
  bottom?: TBottom;
  dateBottom?: TBottom;
  dateColor?: TColor;
  dateSize?: TFontSize;
  month?: string;
  lineHeight?: TLineHeight;
}

const CalenderIcon = (props: IProps) => {
  const { primary } = useTheme()
  const {
    date, type, size, position, top, left, right, bottom, style, color, dateBottom, dateColor, dateSize, month,
    lineHeight
  } = props

  const Icon = type === 'outlined' ? CalendarOutlined : CalendarFilled

  const IconStyles = { fontSize: size }

  return (
    <Calender
      style={style}
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      color={color || primary}
    >
      <Icon style={IconStyles} />
      <Date style={{
        marginBottom: dateBottom,
        color: dateColor || 'black',
        fontSize: dateSize || '1.4rem',
        lineHeight: lineHeight || 'inherit'
      }}
      >{date}
        {month && <p>{month}</p>}
      </Date>
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
  color: ${({ color, theme }) => color || theme.primary};

`

const Date = styled(Typography.Text)`
  font-size: 1.4em;
  font-weight: bold;
  position: absolute;
  margin-bottom: 0.14em;
  line-height: 0.9;
  text-align: center;
  p {
    font-size: 2rem;
    text-align: center;
  }

  @media screen and (max-width: 1301px) {
    margin-bottom: 1rem !important;
    
  }
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
  color: '',
  dateBottom: '0.14em',
  dateColor: 'black',
  dateSize: '1.4rem',
  month: '',
  lineHeight: 'inherit'

}
