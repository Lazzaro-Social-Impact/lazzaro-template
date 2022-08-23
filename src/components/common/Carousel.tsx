import styled from 'styled-components'
import { Carousel as antdCarousel } from 'antd'
import type { FC, ReactNode } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

interface IProps {
  children: ReactNode
  arrows?:boolean;
  dots?:boolean;
  bgColor?: TBgColor;
  mt?:TMarginTop;
}

const Carousel: FC<IProps> = (props) => {
  const {
    children, arrows, dots, bgColor, mt
  } = props

  return (
    <CustomCarousel
      arrows={arrows}
      nextArrow={arrows ? <ArrowRightOutlined /> : undefined}
      prevArrow={arrows ? <ArrowLeftOutlined /> : undefined}
      autoplay
      autoplaySpeed={5000}
      dots={dots}
      bgColor={bgColor}
      mt={mt}
    >
      {children}
    </CustomCarousel>
  )
}

Carousel.defaultProps = {
  arrows: false,
  dots: false,
  bgColor: 'initial',
  mt: 'initial',
}

export default Carousel

const CustomCarousel = styled(antdCarousel)<IProps>`
background-color: ${({ bgColor }) => bgColor};
margin-top: ${({ mt }) => mt && mt};
  @media (min-width: 768px) {
    & .slick-prev,
    & .slick-prev:hover {
      left: 110px;
      color: white;
      font-size: 35px;
    }

    & .slick-next,
    & .slick-next:hover {
      right: 110px;
      color: white;
      font-size: 35px;
    }

    & .slick-prev,
    & .slick-next {
      z-index: 2;
      color: white;
      right: 100px;
      transition: all 0.5s ease;
    }

    .slick-dots.slick-dots-top li {
      background-color: black;
    }

    .slick-dots.slick-dots-top .slick-active button {
      background-color: rgb(92, 183, 128) !important;
    }
  }

  .slick-dots-bottom {
    bottom: -35px;
  }

  .slick-dots li button {
    background: ${({ theme }) => theme.secondary};
    width: 6px;
    height: 6px;
    border-radius: 100%;
  }
  .slick-dots li.slick-active button {
    background: ${({ theme }) => theme.primary};
    width: 7px;
    height: 7px;
    border-radius: 100%;
  }

  @media screen and (max-width: 768px) {
    span {
      display: none !important;
    }
  }



  & .slick-arrow {
    color: ${({ theme }) => theme.primary};
  }
`
