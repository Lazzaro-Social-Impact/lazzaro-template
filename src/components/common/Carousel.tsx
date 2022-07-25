import styled from 'styled-components'
import { Carousel as antdCarousel } from 'antd'
import { getProp } from '../../utils'

interface IProps {
  py?: TPaddingBlock;
  px?: TPaddingInline;
  pl?: TPaddingLeft;
  pr?: TPaddingRight;
  pt?: TPaddingTop;
  pb?: TPaddingBottom;
  p?: TPadding;
  mt?: TMarginTop;
  mb?: TMarginBottom;
  ml?: TMarginLeft;
  mr?: TMarginRight;
  mx?: TMarginInline;
  my?: TMarginBlock;
  m?: TMargin;
}

const Carousel = styled(antdCarousel)<IProps>`
  padding: ${({ p }) => p && getProp(p)};
  padding-block: ${({ py }) => py && getProp(py)};
  padding-inline: ${({ px }) => px && getProp(px)};
  padding-left: ${({ pl }) => pl && getProp(pl)};
  padding-right: ${({ pr }) => pr && getProp(pr)};
  padding-top: ${({ pt }) => pt && getProp(pt)};
  padding-bottom: ${({ pb }) => pb && getProp(pb)};
  margin: ${({ m }) => m && getProp(m)};
  margin-top: ${({ mt }) => mt && getProp(mt)};
  margin-bottom: ${({ mb }) => mb && getProp(mb)};
  margin-left: ${({ ml }) => ml && getProp(ml)};
  margin-right: ${({ mr }) => mr && getProp(mr)};
  margin-block: ${({ my }) => my && getProp(my)};
  margin-inline: ${({ mx }) => mx && getProp(mx)};

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
`

export default Carousel
