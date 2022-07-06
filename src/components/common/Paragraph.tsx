import styled from 'styled-components'
import { TTextAlign, TDecoration, TTransform } from './CSSRuleTypes'

interface IProps {
  color?: string;
  fontSize?: number;
  lineHeight?: number;
  m?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mx?: number;
  my?: number;
  p?: string;
  px?: number;
  py?: number;
  pr?: number;
  pl?: number;
  pt?: number;
  pb?: number;
  textAlign?: TTextAlign;
  transform?: TTransform;
  decoration?: TDecoration;
  textShadow?: string;
}

const Paragraph = styled.p<IProps>`
  font-size: ${({ fontSize }) => fontSize}rem;
  line-height: ${({ lineHeight }) => lineHeight};
  margin-bottom: ${({ mb }) => mb}rem;
  padding: ${({ p }) => p};
  margin-top: ${({ mt }) => mt}rem;
  margin-bottom: ${({ mb }) => mb}rem;
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ transform }) => transform};
  text-decoration: ${({ decoration }) => decoration};
  text-shadow: ${({ textShadow }) => textShadow};
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => mt}rem;
  margin-bottom: ${({ mb }) => mb}rem;
  margin-left: ${({ ml }) => ml}rem;
  margin-right: ${({ mr }) => mr}rem;
  margin-block: ${({ my }) => my}rem;
  margin-inline: ${({ mx }) => mx}rem;
  padding: ${({ p }) => p};
  padding-top: ${({ pt }) => pt}rem;
  padding-bottom: ${({ pb }) => pb}rem;
  padding-left: ${({ pl }) => pl}rem;
  padding-right: ${({ pr }) => pr}rem;
  padding-block: ${({ py }) => py}rem;
  padding-inline: ${({ px }) => px}rem;
`
export default Paragraph

Paragraph.defaultProps = {
  color: 'initial',
  fontSize: 1,
  lineHeight: 2.5,
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0,
  mx: 0,
  my: 0,
  p: '0rem',
  px: 0,
  py: 0,
  textAlign: 'initial',
  transform: 'initial',
  decoration: 'initial',
  textShadow: 'initial',
}
