import styled from 'styled-components'

type TMode = 'row' | 'column';

interface IProps {
  mode?: TMode;
  smMode?: TMode;
  maxWidth?: string;
  gutter?: number;
  py?: number;
  px?: number;
  p?: number;
}

export const Card = styled.div`
  max-width: 45rem;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ mode }: IProps) => mode};
  max-width: ${({ maxWidth }: IProps) => maxWidth};
  gap: 0.8rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;
  margin-block: ${({ gutter }) => `${gutter}rem`};
  padding-block: ${({ py }) => `${py}rem`};
  padding-inline: ${({ px }) => `${px}rem`};
  padding:${({ p }) => `${p}rem`};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.45);
  }

  @media (max-width: 768px) {
    flex-direction: ${({ smMode }: IProps) => smMode};
    max-width: 100%;
  }
`

Card.defaultProps = {
  mode: 'row',
  smMode: 'row',
  maxWidth: '100%',
  gutter: 0,
  py: 0,
  px: 0,
}
