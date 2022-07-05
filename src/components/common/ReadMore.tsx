import styled from 'styled-components'

interface IProps {
    fontSize?: string | number;
    hoverColor?: string | undefined;
    onClick?: () => void;
    color?: string;
}
const ReadMore = styled.a`
 font-size: ${({ fontSize }: IProps) => `${fontSize}rem`};
 text-decoration: underline;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
    color: ${({ color }: IProps) => color};
 &:hover {
        color: ${({ hoverColor }: IProps) => hoverColor};
        text-decoration: underline;
 }
`

ReadMore.defaultProps = {
  fontSize: 1,
  hoverColor: '#5CB780',
  color: '#777'
}

export default ReadMore
