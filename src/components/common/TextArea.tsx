import styled from 'styled-components'

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  padding: 0.5rem;
  font-size: 1rem;
  color: #333;
  margin-top: 1rem;
  background-color: #fff;

  &:focus {
    outline: none;
  }
  
`
export default TextArea
