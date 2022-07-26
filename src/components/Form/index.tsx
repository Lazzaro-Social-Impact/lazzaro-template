import { FormEvent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useTheme } from '../../app/context/theme-context'
import Label from '../common/Label'
import { Input } from '../common'

interface IProps {
  submitHandler: (e: FormEvent<HTMLFormElement>) => void;
  projectId?: string;
}

function Form({ submitHandler, projectId }: IProps) {
  const color = useTheme()
  return (
    <CustomForm onSubmit={submitHandler}>
      <FormControl mb={0}>
        <Label htmlFor="amount" color={color}>
          You donation
        </Label>
      </FormControl>
      <FormControl>
        <Input type="number" id="amount" placeholder="Please enter the amount of your donation " />
      </FormControl>

      <FormControl mb={0}>
        <Label htmlFor="amount" color={color}>
          Details
        </Label>
      </FormControl>

      <FormControl mode="row">
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Surname" />
      </FormControl>

      <FormControl mode="row">
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Address" />
      </FormControl>

      <FormControl mode="row">
        <Input type="text" placeholder="DNI" />
        <Input type="text" placeholder="Date of birth" />
      </FormControl>

      <FormControl>
        <TextArea placeholder="Message" />
      </FormControl>

      {projectId && (
      <>
        <FormControl>
          <Label color={color}>What you want your donation to look like?</Label>
        </FormControl>

        <FormControl mode="row" justify="start" mb={0}>
          <RadioBtn color={color} type="radio" name="donation" value="Public" defaultChecked />
          <Label color="#777777">Public donation</Label>
        </FormControl>

        <FormControl mode="row" justify="start" mb={0}>
          <RadioBtn color={color} type="radio" name="donation" value="Anonymous" />
          <Label color="#777777">Anonymous donation</Label>
        </FormControl>
      </>
      )}

      <FormControl mt={1.5}>
        <Label color={color}>Would you like to receive a donation certificate?</Label>
      </FormControl>
      <FormControl mode="row" justify="start" mb={0}>
        <RadioBtn color={color} type="radio" name="certificate" value="true" checked />
        <Label color="#777777">Yes</Label>
      </FormControl>

      <FormControl mode="row" justify="start" mb={0}>
        <RadioBtn color={color} type="radio" name="certificate" value="false" />
        <Label color="#777777">No</Label>
      </FormControl>

      <FormControl mode="row" justify="start" mt={2}>
        <input type="checkbox" color={color} />
        <Label color="#777777">
          I agree to the <Link to="/terms_and_conditions">Privacy policy</Link>
        </Label>
      </FormControl>
    </CustomForm>
  )
}

interface IFormControlProps {
  mode?: TFlexDirection;
  justify?: TJustifyContent;
  mb?: TMarginBottom;
  mt?: TMarginTop;
}

const CustomForm = styled.form`
  padding: 3rem;
`

const FormControl = styled.div<IFormControlProps>`
  display: flex;
  flex-direction: ${({ mode }) => mode || 'column'};
  justify-content: ${({ justify }) => justify || 'center'};
  max-width: 700px;
  gap: 1rem;
  margin-bottom: ${({ mb = 1.3 }) => `${mb}rem`};
  margin-top: ${({ mt }) => mt && `${mt}rem`};
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
`

const RadioBtn = styled.input<{ color: TColor }>`
  accent-color: ${({ color }) => color};
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 1.5rem;
`

export default Form

Form.defaultProps = {
  projectId: ''
}
