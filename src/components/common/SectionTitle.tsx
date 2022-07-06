import styled from 'styled-components'

interface IProps {
    fontSize?: number;
    padding?: number;
    marginTop?: number;
    marginBottom?: number;
    color?: string;
    textAlign?: 'center' | 'left' | 'right' | 'justify' | 'inherit' | 'initial';
}
const SectionTitle = styled.p<IProps>`
    margin-bottom: 2.4rem;
    padding: 0 ${({ padding }) => padding}rem;
    margin-top: ${({ marginTop }) => marginTop}rem;
    font-weight: bold;
    font-size: ${({ fontSize }) => `${fontSize}rem}`};
    margin-bottom: ${({ marginBottom }) => marginBottom}rem;
    color: ${({ color }) => color};
    text-align: ${({ textAlign }) => textAlign};
`

SectionTitle.defaultProps = {
  fontSize: 3.8,
  padding: 4.1,
  marginTop: 0,
  marginBottom: 0,
  color: 'initial',
  textAlign: 'initial',
}

export default SectionTitle
