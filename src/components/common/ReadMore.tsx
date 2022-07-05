import styled from 'styled-components'

interface IProps {
  fontSize?: number | 'initial' | 'inherit';
  hoverColor?: string | undefined;
  color?: string;
}
const ReadMore = styled.a<IProps>`
  font-size: ${({ fontSize }) => (typeof fontSize === 'string' ? fontSize : `${fontSize}rem`)};
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ color }) => color};

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    text-decoration: underline;
  }
`

ReadMore.defaultProps = {
  fontSize: 'inherit',
  hoverColor: '#5CB780',
  color: '#777',
}

export default ReadMore