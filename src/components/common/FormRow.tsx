import styled from 'styled-components'

export const FormRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.8rem;

  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`
