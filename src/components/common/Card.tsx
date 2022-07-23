import styled from 'styled-components'
import { getProp } from '../../utils'

interface IProps {
  mode?: TFlexDirection;
  smMode?: TFlexDirection;
  maxWidth?: TMaxWidth;
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
  bgColor?: TBgColor;
  textAlign?: TTextAlign;
}

const Card = styled.div<IProps>`
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  flex-direction: ${({ mode }) => mode};
  max-width: ${({ maxWidth }) => maxWidth};
  gap: 0.8rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;
  padding: ${({ p }) => getProp(p)};
  padding-block: ${({ py }) => getProp(py)};
  padding-inline: ${({ px }) => getProp(px)};
  padding-left: ${({ pl }) => getProp(pl)};
  padding-right: ${({ pr }) => getProp(pr)};
  padding-top: ${({ pt }) => getProp(pt)};
  padding-bottom: ${({ pb }) => getProp(pb)};
  margin: ${({ m }) => getProp(m)};
  margin-top: ${({ mt }) => getProp(mt)};
  margin-bottom: ${({ mb }) => getProp(mb)};
  margin-left: ${({ ml }) => getProp(ml)};
  margin-right: ${({ mr }) => getProp(mr)};
  margin-block: ${({ my }) => getProp(my)};
  margin-inline: ${({ mx }) => getProp(mx)};
  background-color: ${({ bgColor }) => bgColor};
  text-align: ${({ textAlign }) => textAlign};

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.45);
  }

  @media (max-width: 768px) {
    flex-direction: ${({ smMode }) => smMode};
    max-width: 100%;
  }
`

Card.defaultProps = {
  mode: 'row',
  smMode: 'row',
  maxWidth: '100%',
  py: 0,
  px: 0,
  pl: 0,
  pr: 0,
  pt: 0,
  pb: 0,
  p: 'initial',
  m: 'initial',
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0,
  mx: 0,
  my: 0,
  bgColor: 'initial',
  textAlign: 'initial',
}

export default Card
