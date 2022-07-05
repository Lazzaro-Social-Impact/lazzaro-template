import styled from 'styled-components'

interface IProps {
    fontSize?: number;
    padding?: number;
    marginTop?: number;
    marginBottom?: number;
}
const SectionTitle = styled.p`
    margin-bottom: 2.4rem;
    padding: 0 ${({ padding }: IProps) => padding}rem;
    margin-top: ${({ marginTop }: IProps) => marginTop}rem;
    font-weight: bold;
    font-size: ${({ fontSize }: IProps) => `${fontSize}rem}`};
    margin-bottom: ${({ marginBottom }: IProps) => marginBottom}rem;
`

SectionTitle.defaultProps = {
  fontSize: 3.8,
  padding: 4.1,
  marginTop: 4.2,
  marginBottom: 4.2,
}

export default SectionTitle
