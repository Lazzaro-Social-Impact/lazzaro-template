import styled from 'styled-components'
import type { TBgColor, TTextAlign } from './CssPropertiesTypes'

type TMode = 'row' | 'column';

interface IProps {
  mode?: TMode;
  smMode?: TMode;
  maxWidth?: string;
  py?: number;
  px?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  p?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mx?: number;
  my?: number;
  m?: string;
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
  padding: ${({ p }) => p};
  padding-block: ${({ py }) => `${py}rem`};
  padding-inline: ${({ px }) => `${px}rem`};
  padding-left: ${({ pl }) => `${pl}rem`};
  padding-right: ${({ pr }) => `${pr}rem`};
  padding-top: ${({ pt }) => `${pt}rem`};
  padding-bottom: ${({ pb }) => `${pb}rem`};
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => `${mt}rem`};
  margin-bottom: ${({ mb }) => `${mb}rem`};
  margin-left: ${({ ml }) => `${ml}rem`};
  margin-right: ${({ mr }) => `${mr}rem`};
  margin-block: ${({ my }) => `${my}rem`};
  margin-inline: ${({ mx }) => `${mx}rem`};
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
