import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Button, Center, Input, TextArea
} from '../common'
import Label from '../common/Label'
import HandleResponse from '../common/HandleResponse'
import { ErrorInput as ErrorMsg } from '../common/ErrorInput'
import { DonateSubmitForm } from '../../types/interfaces'
import { donationSchema } from '../../validation/schemas'

interface IProps {
  submitHandler: SubmitHandler<DonateSubmitForm>;
  projectId?: string;
  states:{
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
  }
}

function DonateForm({ projectId, submitHandler, states }: IProps) {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm<DonateSubmitForm>({ resolver: yupResolver(donationSchema) })

  return (
    <CustomForm onSubmit={handleSubmit(submitHandler)}>
      <HandleResponse
        {...states}
        successMsg="Your request has been sent successfully"
        errorMsg="Something went wrong, please try again"
        successId={`${projectId}-form-success`}
        errorId={`${projectId}-form-error`}
      />
      <FormControl mb={0}>
        <Label htmlFor="amount">You donation</Label>
      </FormControl>
      <FormControl>
        <Input
          type="number"
          placeholder="Please enter the amount of your donation"
          {...register('amount')}
        />
        <ErrorMsg msg={errors.amount?.message} />
      </FormControl>

      <FormControl mb={0}>
        <Label htmlFor="amount">Details</Label>
      </FormControl>

      <FormControl mode="row">
        <Input type="text" placeholder="Name" {...register('firstName')} />
        <Input type="text" placeholder="Surname" {...register('lastName')} />
      </FormControl>

      <FormControl mode="row" justify="space-between">
        <ErrorMsg msg={errors.firstName?.message} />
        <ErrorMsg msg={errors.lastName?.message} />
      </FormControl>

      <FormControl mode="row">
        <Input type="email" placeholder="Email" {...register('user_email')} />
        <Input type="text" placeholder="Address" {...register('home_address')} />
      </FormControl>

      <FormControl mode="row" justify="space-between">
        <ErrorMsg msg={errors.user_email?.message} />
        <ErrorMsg msg={errors.home_address?.message} />
      </FormControl>

      <FormControl mode="row">
        <Input type="text" placeholder="DNI" {...register('nif')} />
        <Input type="text" placeholder="Date of birth" {...register('birthDate')} />
      </FormControl>

      <FormControl mode="row" justify="space-between">
        <ErrorMsg msg={errors.nif?.message} />
        <ErrorMsg msg={errors.birthDate?.message} />
      </FormControl>

      <FormControl>
        <TextArea rows={4} placeholder="Message" {...register('text')} />
      </FormControl>

      {projectId && (
        <>
          <FormControl>
            <Label>What you want your donation to look like?</Label>
          </FormControl>

          <FormControl mode="row" justify="start" mb={0}>
            <RadioBtn type="radio" defaultChecked {...register('anonymous')} />
            <Label color="#777777">Public donation</Label>
          </FormControl>

          <FormControl mode="row" justify="start" mb={0}>
            <RadioBtn type="radio" {...register('anonymous')} />
            <Label color="#777777">Anonymous donation</Label>
          </FormControl>
        </>
      )}

      <FormControl mt={1.5}>
        <Label>Would you like to receive a donation certificate?</Label>
      </FormControl>
      <FormControl mode="row" justify="start" mb={0}>
        <RadioBtn type="radio" defaultChecked {...register('certificate')} />
        <Label color="#777777">Yes</Label>
      </FormControl>

      <FormControl mode="row" justify="start" mb={0}>
        <RadioBtn type="radio" {...register('certificate')} />
        <Label color="#777777">No</Label>
      </FormControl>

      <FormControl mode="row" justify="start" mt={2}>
        <input type="checkbox" {...register('terms')} />
        <Label color="#777777">
          I agree to the <Link to="/terms_and_conditions">Privacy policy</Link>
        </Label>

        <ErrorMsg msg={errors.terms?.message} />
      </FormControl>

      <Center>

        <Button type="submit" aria-label="submit">
          Donate
        </Button>
      </Center>
    </CustomForm>
  )
}
export default DonateForm

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

const RadioBtn = styled.input`
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 1.5rem;
`

DonateForm.defaultProps = {
  projectId: '',
}
