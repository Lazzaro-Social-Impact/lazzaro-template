import styled from 'styled-components'
import { useTheme } from '../../app/context/theme-context'
import {
  Button, Flex, Input, SectionTitle
} from '../../components/common'

function BecomeVolunteerForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const color = useTheme()

  return (
    <CustomForm onSubmit={handleSubmit}>
      <SectionTitle color={color} fontSize={2.4}>I want to volunteer</SectionTitle>
      <Flex justify="space-evenly" gap={2}>
        <Input placeholder="Name" />
        <Input placeholder="surname" />
      </Flex>

      <Input type="email" placeholder="Email" />
      <TextArea placeholder="Tell us about yourself..." />

      <Button fontSize={1.2} py="0.8rem" px="2.8rem" bgColor={color} type="submit">
        Send
      </Button>
    </CustomForm>
  )
}

const CustomForm = styled.form`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`
const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  resize: none;
  font-size: 1rem;
  outline: none;
  margin-block: 2rem;
`
export default BecomeVolunteerForm
