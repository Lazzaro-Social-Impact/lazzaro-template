import { yupResolver } from '@hookform/resolvers/yup'
import moment from 'moment'
import { type ReactElement } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { getStartProductPaymentUrl } from '../../api/postApiServices'
import { useAppSelector, useFormSubmit } from '../../hooks'
import { buyProductSchema } from '../../validation/schemas'
import {
  Button, Center, Input, Label, SectionTitle
} from '../common'
import { CustomDatePicker, CustomInputDiv, CustomTextArea } from '../common/CustomInput'
import { ErrorInput as ErrorMsg } from '../common/ErrorInput'
import HandleResponse from '../common/HandleResponse'
import PrivacyPolicy from '../common/PrivacyPolicy'

interface IProps {
  modal?: boolean;
  id: string;
  price: number;
  title: string;
}

interface IFormSubmit {
  amount: number;
  firstName: string;
  lastName: string;
  user_email: string;
  home_address: string;
  productAmount: number;
  city: string;
  country: string;
  nif: string;
  cp: number;
  mobile_phone: string;
  privacy_policy: boolean;
  birthDate: string;
}

export function BuyProductForm(props: IProps): ReactElement {
  const {
    modal, id, price, title
  } = props

  const ongId = useAppSelector(({ ong }) => ong?.ongId)
  const { t } = useTranslation()
  const {
    handleSubmit, register, formState: { errors }, control
  } = useForm<IFormSubmit>({ resolver: yupResolver(buyProductSchema) })

  const {
    submit, ...states
  } = useFormSubmit<IFormSubmit>({ url: getStartProductPaymentUrl(), isPayment: true })

  const onSubmit = (data: IFormSubmit) => {
    const donationInfo = {
      ...data,
      ong_id: ongId,
      product_id: id,
      amount: price,
      birthDate: moment(data.birthDate).format('YYYY-MM-DD'),
    }

    submit(donationInfo)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HandleResponse
        {...states}
        successMsg={t('success.paypal_navigate')}
        errorMsg={t('fail.error')}
        successId={`donation_success${id}`}
        errorId={`donation_failed${id}`}
      />
      {modal && <CustomSectionTitle padding={0} textAlign="center" fontSize="x-large">{title}</CustomSectionTitle>}

      <InputTitle>{t('Products_single.your_shopping')}</InputTitle>

      <Input
        placeholder={t('Products_single.contact_form.placeholders.amount')}
        type="number"
        min="1"
        defaultValue={1}
        {...register('productAmount')}
      />
      <ErrorMsg msg={errors.productAmount?.message} />
      <InputTitle>{t('personal_information')}</InputTitle>
      <InputRow>
        <Input placeholder={t('placeholders.firstname')} {...register('firstName')} />
        <Input placeholder={t('placeholders.lastname')} {...register('lastName')} />
      </InputRow>

      <InputRow>
        <ErrorMsg msg={errors.lastName?.message} />
        <ErrorMsg msg={errors.firstName?.message} />
      </InputRow>

      <InputRow>
        <Input placeholder={t('placeholders.email')} {...register('user_email')} />
        <Input placeholder={t('placeholders.phone')} {...register('mobile_phone')} />
      </InputRow>

      <InputRow>
        <ErrorMsg msg={errors.user_email?.message} />
        <ErrorMsg msg={errors.mobile_phone?.message} />
      </InputRow>

      <InputTitle>{t('Products_single.delivery_details')}</InputTitle>
      <InputRow>
        <Input placeholder={t('placeholders.address')} {...register('home_address')} />
        <Input placeholder={t('placeholders.ID')} {...register('nif')} />
      </InputRow>
      <InputRow>
        <ErrorMsg msg={errors.home_address?.message} />
        <ErrorMsg msg={errors.nif?.message} />
      </InputRow>

      <InputRow>
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
        <CustomInputDiv>
          <Input placeholder={t('placeholders.postal_code')} {...register('cp')} type="number" />
        </CustomInputDiv>
      </InputRow>

      <InputRow>
        <ErrorMsg msg={errors.birthDate?.message} />
        <ErrorMsg msg={errors.cp?.message} />
      </InputRow>

      <InputRow>
        <Input placeholder={t('placeholders.city')} {...register('city')} />
        <Input placeholder={t('placeholders.country')} {...register('country')} />
      </InputRow>

      <InputRow>
        <ErrorMsg msg={errors.home_address?.message} />
        <ErrorMsg msg={errors.nif?.message} />
      </InputRow>

      <CustomTextArea placeholder={t('placeholders.message')} rows={4} />

      <Label>
        <Input w="20px" mt={1.8} type="checkbox" {...register('privacy_policy')} />
        <PrivacyPolicy />
      </Label>
      <ErrorMsg msg={errors.privacy_policy?.message} />
      <br />
      <Center my={1.5}>
        <Button py="0.8rem" px="2.4rem" type="submit">
          {t('pay')}
        </Button>
      </Center>
    </form>
  )
}

const InputTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  margin-top: 1.2rem;
  font-size: 1.1rem;
`

const InputRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.8rem;
  justify-content: space-between;
`

const CustomSectionTitle = styled(SectionTitle)`
 @media screen and (max-width: 540px) {
   font-size: 1.4rem;
 }
`

BuyProductForm.defaultProps = {
  modal: false,
}
