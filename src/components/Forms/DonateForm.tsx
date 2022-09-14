import styled from 'styled-components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Radio } from 'antd'
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
import { CustomRadio } from './BecomeMemberForm'
import { FormRow } from '../common/FormRow'

interface IProps {
  submitHandler: SubmitHandler<DonateSubmitForm>;
  projectId?: string;
  states:{
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
  };
  modal?: boolean;
}

function DonateForm({
  projectId, submitHandler, states, modal
}: IProps) {
  const {
    register, handleSubmit, control, formState: { errors }
  } = useForm<DonateSubmitForm>({ resolver: yupResolver(donationSchema) })

  const { t } = useTranslation()
  return (
    <CustomForm
      style={{ width: modal ? '100%' : '60%' }}
      onSubmit={handleSubmit(submitHandler)}
    >
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
      <CustomInputDiv>
        <Input
          type="number"
          placeholder={t('placeholders.amount')}
          {...register('amount')}
        />
        {errors.amount?.message && <ErrorMsg msg={t('errors.amount')} />}
      </CustomInputDiv>

      <FormControl mt={1.8} mb={0}>
        <Label htmlFor="amount">{t('details')}</Label>
      </FormControl>

      <FormRow>

        <CustomInputDiv>
          <Input type="text" placeholder={t('placeholders.firstname')} {...register('firstName')} />
          {errors.firstName?.message && <ErrorMsg msg={t('errors.firstname')} />}
        </CustomInputDiv>

        <CustomInputDiv>
          <Input type="text" placeholder={t('placeholders.lastname')} {...register('lastName')} />
          {errors.lastName?.message && <ErrorMsg msg={t('errors.lastname')} />}
        </CustomInputDiv>
      </FormRow>
      <FormRow>
        <CustomInputDiv>
          <Input type="email" placeholder={t('placeholders.email')} {...register('user_email')} />
          {errors.user_email?.message && <ErrorMsg msg={t('errors.email')} />}
        </CustomInputDiv>

        <CustomInputDiv>
          <Input type="text" placeholder={t('placeholders.address')} {...register('home_address')} />
          {errors.home_address?.message && <ErrorMsg msg={t('errors.address')} />}
        </CustomInputDiv>
      </FormRow>

      <FormRow>
        <CustomInputDiv>
          <Input
            type="text"
            placeholder={t('placeholders.ID')}
            {...register('nif')}
          />
          {errors.nif?.message && <ErrorMsg msg={t('errors.ID')} />}
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
          {errors.birthDate?.message && <ErrorMsg msg={t('errors.dob')} />}
        </CustomInputDiv>
      </FormRow>

      <FormRow>
        <CustomTextArea rows={4} placeholder={t('placeholders.message')} {...register('text')} />
      </FormRow>

      {projectId && (
        <>

          <FormControl mt={2.4}>
            <Label>{t('donation_publicity.question')}</Label>
          </FormControl>

          <Radio.Group {...register('anonymous')}>
            <CustomRadio value={false}>
              {t('donation_publicity.public')}
            </CustomRadio>
            <CustomRadio value>
              {t('donation_publicity.anonymous')}
            </CustomRadio>
          </Radio.Group>
        </>
      )}

      <FormControl mt={1.5}>
        <Label>{t('Certificate question')}</Label>
      </FormControl>
      <Radio.Group {...register('certificate')}>
        <CustomRadio value>
          {t('yes')}
        </CustomRadio>
        <CustomRadio value={false}>
          {t('no')}
        </CustomRadio>
      </Radio.Group>

      <FormControl mode="row" justify="start" mt={2}>
        <input type="checkbox" {...register('terms')} />
        <PrivacyPolicy />
      </FormControl>
      {errors.terms?.message && <ErrorMsg msg={t('errors.privacypolicy')} />}

      <Center>

        <Button fontSize={0.9} mt="1.2rem" type="submit" aria-label="submit">
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

  @media (max-width: 768px) {
    padding: 0rem;
  }
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

// const RadioBtn = styled.input`
//   border: none;
//   outline: none;
//   cursor: pointer;
//   margin-left: 1.5rem;
// `

DonateForm.defaultProps = {
  projectId: '',
  modal: false
}
