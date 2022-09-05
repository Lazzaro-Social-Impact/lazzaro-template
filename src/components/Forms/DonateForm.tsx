import styled from 'styled-components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  Button, Center, Input
} from '../common'
import Label from '../common/Label'
import HandleResponse from '../common/HandleResponse'
import { ErrorInput as ErrorMsg } from '../common/ErrorInput'
import { DonateSubmitForm } from '../../types/interfaces'
import { donationSchema } from '../../validation/schemas'
import { CustomDatePicker, CustomInputDiv, CustomTextArea } from '../common/CustomInput'
import PrivacyPolicy from '../common/PrivacyPolicy'

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
    register, handleSubmit, formState: { errors }, control
  } = useForm<DonateSubmitForm>({ resolver: yupResolver(donationSchema) })

  const { t } = useTranslation()
  return (
    <CustomForm onSubmit={handleSubmit(submitHandler)}>
      <HandleResponse
        {...states}
        successMsg={t('success.paypal_navigate')}
        errorMsg={t('fail.error')}
        successId={`${projectId}-form-success`}
        errorId={`${projectId}-form-error`}
      />
      <FormControl mb={0}>
        <Label htmlFor="amount">{t('your_donation')}</Label>
      </FormControl>
      <FormControl>
        <Input
          type="number"
          placeholder={t('placeholders.amount')}
          {...register('amount')}
        />
        <ErrorMsg msg={errors.amount?.message} />
      </FormControl>

      <FormControl mb={0}>
        <Label htmlFor="amount">{t('details')}</Label>
      </FormControl>

      <FormControl mode="row">
        <Input type="text" placeholder={t('placeholders.firstname')} {...register('firstName')} />
        <Input type="text" placeholder={t('placeholders.lastname')} {...register('lastName')} />
      </FormControl>

      <FormControl mode="row" justify="space-between">
        <ErrorMsg msg={errors.firstName?.message} />
        <ErrorMsg msg={errors.lastName?.message} />
      </FormControl>

      <FormControl mode="row">
        <Input type="email" placeholder={t('placeholders.email')} {...register('user_email')} />
        <Input type="text" placeholder={t('placeholders.address')} {...register('home_address')} />
      </FormControl>

      <FormControl mode="row" justify="space-between">
        <ErrorMsg msg={errors.user_email?.message} />
        <ErrorMsg msg={errors.home_address?.message} />
      </FormControl>

      <FormControl mode="row">
        <CustomInputDiv>
          <Input type="text" placeholder={t('placeholders.ID')} {...register('nif')} />
        </CustomInputDiv>
        <CustomInputDiv>
          <Controller
            control={control}
            name="birthDate"
            render={({ field }: any) => (
              <CustomDatePicker
                name="birthDate"
                placeholderText={t('placeholders.dob')}
                selected={field.value}
                onChange={(date: Date) => field.onChange(date)}
                dateFormat="dd/MM/yyyy"
                autoComplete="off"
                dropdownMode="select"
                showYearDropdown
                showMonthDropdown
              />
            )}
          />
        </CustomInputDiv>
      </FormControl>

      <FormControl mode="row" justify="space-between">
        <ErrorMsg msg={errors.nif?.message} />
        <ErrorMsg msg={errors.birthDate?.message} />
      </FormControl>

      <FormControl>
        <CustomTextArea rows={4} placeholder={t('placeholders.message')} {...register('text')} />
      </FormControl>

      {projectId && (
        <>
          <FormControl>
            <Label>{t('donation_publicity.question')}</Label>
          </FormControl>

          <FormControl mode="row" justify="start" mb={0}>
            <RadioBtn type="radio" defaultChecked {...register('anonymous')} />
            <Label color="#777777">{t('donation_publicity.public')}</Label>
          </FormControl>

          <FormControl mode="row" justify="start" mb={0}>
            <RadioBtn type="radio" {...register('anonymous')} />
            <Label color="#777777">{t('donation_publicity.anonymous')}</Label>
          </FormControl>
        </>
      )}

      <FormControl mt={1.5}>
        <Label>{t('Certificate question')}</Label>
      </FormControl>
      <FormControl mode="row" justify="start" mb={0}>
        <RadioBtn type="radio" defaultChecked {...register('certificate')} />
        <Label color="#777777">{t('yes')}</Label>
      </FormControl>

      <FormControl mode="row" justify="start" mb={0}>
        <RadioBtn type="radio" {...register('certificate')} />
        <Label color="#777777">{t('no')}</Label>
      </FormControl>

      <FormControl mode="row" justify="start" mt={2}>
        <input type="checkbox" {...register('terms')} />
        <PrivacyPolicy />
      </FormControl>
      <ErrorMsg msg={errors.terms?.message} />

      <Center>

        <Button mt="1.2rem" type="submit" aria-label="submit">
          {t('Donate')}
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
