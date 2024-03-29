import { yupResolver } from '@hookform/resolvers/yup';
import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { TypeOf } from 'yup';
import { getStartProductPaymentUrl } from '../../api/postApiServices';
import { useAppSelector, useFormSubmit } from '../../hooks';
import useSuccessPaymentNotification from '../../hooks/useSuccessPaymentNotification';
import { buyProductSchema } from '../../validation/schemas';
import { Button, Center, Input, Label, SectionTitle } from '../common';
import { CustomInputDiv, CustomTextArea } from '../common/CustomInput';
import { ErrorInput as ErrorMsg } from '../common/ErrorInput';
import { FormRow } from '../common/FormRow';
import HandleResponse from '../common/HandleResponse';
import PrivacyPolicy from '../common/PrivacyPolicy';

interface IProps {
  modal?: boolean;
  id: string;
  price: number;
  title: string;
  disabled?: boolean;
}

type FormSubmit = TypeOf<typeof buyProductSchema>;

export function BuyProductForm(props: IProps): ReactElement {
  const { modal, id, price, title, disabled } = props;

  const ongId = useAppSelector(({ ong }) => ong?.ongId);
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormSubmit>({ resolver: yupResolver(buyProductSchema) });

  const { submit, ...states } = useFormSubmit<FormSubmit>({
    url: getStartProductPaymentUrl(),
    isPayment: true,
    redirectPath: 'shop',
  });

  const onSubmit = (data: FormSubmit) => {
    const donationInfo = {
      ...data,
      ong_id: ongId,
      product_id: id,
      amount: price,
    };

    submit(donationInfo);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HandleResponse
        {...states}
        successMsg={useSuccessPaymentNotification()}
        errorMsg={t('fail.error')}
        successId={`donation_success${id}`}
        errorId={`donation_failed${id}`}
      />
      {modal && (
        <CustomSectionTitle padding={0} textAlign='center' fontSize='x-large'>
          {title}
        </CustomSectionTitle>
      )}

      <InputTitle>{t('Products_single.your_shopping')}</InputTitle>

      <Input
        placeholder={t('Products_single.contact_form.placeholders.amount')}
        type='number'
        min='1'
        defaultValue={1}
        {...register('productAmount')}
      />
      {errors.productAmount?.message && <ErrorMsg msg={t('errors.product_amount')} />}
      <InputTitle>{t('personal_information')}</InputTitle>
      <FormRow>
        <CustomInputDiv>
          <Input placeholder={t('placeholders.firstname')} {...register('firstName')} />
          {errors.firstName?.message && <ErrorMsg msg={t('errors.firstname')} />}
        </CustomInputDiv>
        <CustomInputDiv>
          <Input placeholder={t('placeholders.lastname')} {...register('lastName')} />
          {errors.lastName?.message && <ErrorMsg msg={t('errors.lastname')} />}
        </CustomInputDiv>
      </FormRow>

      <FormRow>
        <CustomInputDiv>
          <Input placeholder={t('placeholders.email')} {...register('user_email')} />
          {errors.user_email?.message && <ErrorMsg msg={t('errors.email')} />}
        </CustomInputDiv>
        <CustomInputDiv>
          <Input placeholder={t('placeholders.phone')} {...register('mobile_phone')} />
          {errors.mobile_phone?.message && <ErrorMsg msg={t('errors.phone')} />}
        </CustomInputDiv>
      </FormRow>

      <InputTitle>{t('Products_single.delivery_details')}</InputTitle>
      <FormRow>
        <CustomInputDiv>
          <Input placeholder={t('placeholders.address')} {...register('home_address')} />
          {errors.home_address?.message && <ErrorMsg msg={t('errors.address')} />}
        </CustomInputDiv>
        <CustomInputDiv>
          <Input placeholder={t('placeholders.ID')} {...register('nif')} />
          {errors.nif?.message && <ErrorMsg msg={t('errors.ID')} />}
        </CustomInputDiv>
      </FormRow>

      <FormRow>
        <CustomInputDiv>
          <Input placeholder={t('placeholders.postal_code')} {...register('cp')} type='number' />
          {errors.cp?.message && <ErrorMsg msg={t('errors.cp')} />}
        </CustomInputDiv>
        <CustomInputDiv>
          <Input placeholder={t('placeholders.city')} {...register('city')} />
          {errors.city?.message && <ErrorMsg msg={t('errors.city')} />}
        </CustomInputDiv>
      </FormRow>

      <FormRow>
        <CustomInputDiv>
          <Input placeholder={t('placeholders.country')} {...register('country')} />
          {errors.country?.message && <ErrorMsg msg={t('errors.country')} />}
        </CustomInputDiv>
      </FormRow>
      <br />
      <CustomTextArea placeholder={t('placeholders.message')} rows={4} />

      <Label>
        <Input w='20px' mt={1.8} type='checkbox' {...register('privacy_policy')} />
        <PrivacyPolicy />
      </Label>
      {errors.privacy_policy?.message && <ErrorMsg msg={t('errors.privacypolicy')} />}
      <br />
      <Center my={1.5}>
        <Button py='0.8rem' px='2.4rem' type='submit' disabled={disabled}>
          {t('pay')}
        </Button>
      </Center>
    </form>
  );
}

const InputTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  margin-top: 1.2rem;
  font-size: 1.1rem;
`;

const CustomSectionTitle = styled(SectionTitle)`
  @media screen and (max-width: 540px) {
    font-size: 1.4rem;
  }
`;

BuyProductForm.defaultProps = {
  modal: false,
  disabled: false,
};
