import { Radio } from 'antd';
import { ChangeEvent, ReactElement, SyntheticEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Button, Center, Input } from '../common';
import HandleResponse from '../common/HandleResponse';
import { useAppSelector, useDependant, useFormSubmit } from '../../hooks';
import { getBecomePartnerUrl } from '../../api/postApiServices';
import { ErrorInput } from '../common/ErrorInput';
import PrivacyPolicy from '../common/PrivacyPolicy';
import { CustomDatePicker, CustomDropdown, CustomInputDiv } from '../common/CustomInput';
import { memberSchema } from '../../validation/schemas';
import { FormRow } from '../common/FormRow';
import { getDonationOptions } from '../../api/getApiServices';
import useSuccessPaymentNotification from '../../hooks/useSuccessPaymentNotification';

type TMemberSubmitForm = {
  firstName: string;
  lastName: string;
  user_email: string;
  home_address: string;
  birthDate: string;
  nif: number;
  terms: boolean;
  certificate: boolean;
  communications: boolean;
  phone: string;
  amount: number;
};

type TOption = {
  id: string;
  name: string;
  amount: number;
};

type TOptions = TOption[];

export default function BecomeMemberForm(): ReactElement {
  const ongId = useAppSelector((state) => state.ong.ongId) || '';
  const [options, setOptions] = useState<TOptions>([]);
  const { t } = useTranslation();
  const currency = useAppSelector((state) => state.ong.ongConfig?.platformConfig.currency_symbol) || '€';
  const { data: donationOptions = [] } = useDependant<TOptions>(getDonationOptions(ongId), ['donation-options'], ongId);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TMemberSubmitForm>({ resolver: yupResolver(memberSchema) });
  const { submit, isError, isLoading, isSuccess } = useFormSubmit<TMemberSubmitForm>({
    url: getBecomePartnerUrl(),
    isPayment: true,
    redirectPath: 'partners',
  });

  const onOptionsChange = (e: SyntheticEvent<HTMLSelectElement, ChangeEvent>) => {
    const optionValue = (e.target as HTMLSelectElement).value;
    if (+optionValue > 0) return;

    setOptions([]);
  };

  const changeOption = () => {
    setOptions(donationOptions);
  };

  const onSubmit = (data: TMemberSubmitForm) => {
    const formData = {
      ...data,
      communications: data.communications || false,
      certificate: data.certificate || false,
      birthDate: moment(data.birthDate).format('YYYY-MM-DD'),
      ong_id: ongId,
    };

    submit(formData);
  };

  useEffect(() => {
    setOptions(donationOptions);
  }, [donationOptions]);

  return (
    <>
      <Navbar />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <HandleResponse
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
            successMsg={useSuccessPaymentNotification()}
            errorMsg={t('fail.message')}
            successId='success-become-member'
            errorId='error-become-member'
          />
          <FormTitle>{t('membership.title')}</FormTitle>
          <FormSubtitle>{t('membership.subtitle')}</FormSubtitle>
          <RadioQuestion style={{ fontWeight: 'bold' }}>{t('membership.amount_label')}</RadioQuestion>
          <FormRow>
            {options?.length ? (
              <CustomDropdown {...register('amount')} onChange={onOptionsChange}>
                <option defaultChecked value=''>
                  {t('membership.quantity')}
                </option>
                {options?.map((option: TOption) => (
                  <option key={option.id} value={option.amount}>
                    {option.name} ({option.amount}
                    {currency})
                  </option>
                ))}
              </CustomDropdown>
            ) : (
              <CustomInputDiv>
                <ChangeOption onClick={changeOption}>⌄</ChangeOption>
                <Input {...register('amount')} type='number' placeholder={t('membership.quantity')} />
              </CustomInputDiv>
            )}
          </FormRow>
          {errors.amount?.message && <ErrorInput msg={t('errors.amount_member')} mt={0.4} />}

          <RadioQuestion style={{ fontWeight: 'bold' }}>Personal Information</RadioQuestion>
          <FormRow>
            <CustomInputDiv>
              <Input placeholder={t('placeholders.firstname')} {...register('firstName')} />
              {errors.firstName?.message && <ErrorInput msg={t('errors.firstname')} mt={0.4} />}
            </CustomInputDiv>
            <CustomInputDiv>
              <Input placeholder={t('placeholders.lastname')} {...register('lastName')} />
              {errors.lastName?.message && <ErrorInput msg={t('errors.lastname')} mt={0.4} />}
            </CustomInputDiv>
          </FormRow>
          <FormRow>
            <CustomInputDiv>
              <Input placeholder={t('placeholders.ID')} {...register('nif')} />
              {errors.nif?.message && <ErrorInput msg={t('errors.ID')} mt={0.4} />}
            </CustomInputDiv>
            <CustomInputDiv>
              <Input placeholder={t('placeholders.phone')} {...register('phone')} />
              {errors.phone?.message && <ErrorInput msg={t('errors.phone')} mt={0.4} />}
            </CustomInputDiv>
          </FormRow>
          <FormRow>
            <CustomInputDiv>
              <Input placeholder={t('placeholders.email')} {...register('user_email')} />
              {errors.user_email?.message && <ErrorInput msg={t('errors.email')} mt={0.4} />}
            </CustomInputDiv>
            <CustomInputDiv>
              <Controller
                control={control}
                name='birthDate'
                render={({ field }: any) => (
                  <CustomDatePicker
                    name='birthDate'
                    placeholderText={t('placeholders.dob')}
                    selected={field.value}
                    onChange={(date: Date) => field.onChange(date)}
                    dateFormat='dd/MM/yyyy'
                    autoComplete='off'
                    dropdownMode='select'
                    showYearDropdown
                    showMonthDropdown
                  />
                )}
              />
              {errors.birthDate?.message && <ErrorInput msg={t('errors.dob')} mt={0.4} />}
            </CustomInputDiv>
          </FormRow>
          <Input placeholder={t('placeholders.address')} {...register('home_address')} />
          {errors.home_address?.message && <ErrorInput msg={t('errors.address')} mt={0.4} />}
          <br />
          <br />
          <div>
            <PrivacyPolicy style={RadioQuestionStyle} />?
          </div>
          <Radio.Group {...register('terms')}>
            <CustomRadio value>{t('I accept')}</CustomRadio>
            <CustomRadio value={false}>{t('membership.dont_accept_membership')}</CustomRadio>
          </Radio.Group>
          {errors.terms?.message && <ErrorInput msg={t('errors.privacypolicy')} mt={0.4} />}

          <RadioQuestion>{t('communication_question')}</RadioQuestion>
          <Radio.Group {...register('communications')}>
            <CustomRadio value>{t('yes')}</CustomRadio>
            <CustomRadio value={false}>{t('no')}</CustomRadio>
          </Radio.Group>
          {errors.communications?.message && <ErrorInput msg={t('errors.communications')} mt={0.4} />}

          <RadioQuestion>{t('Certificate question')}</RadioQuestion>
          <Radio.Group {...register('certificate')}>
            <CustomRadio value>{t('yes')}</CustomRadio>
            <CustomRadio value={false}>{t('no')}</CustomRadio>
          </Radio.Group>
          {errors.certificate?.message && <ErrorInput msg={t('errors.certificate')} mt={0.4} />}

          <Center>
            <Button type='submit'>{t('send')}</Button>
          </Center>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.2rem;
  gap: 2.4rem;
`;

const Form = styled.form`
  margin-block: 3.4rem;
  width: 60%;
`;

const FormTitle = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
`;

const FormSubtitle = styled.p`
  color: #8c8c8c;
  letter-spacing: 1.2px;
  margin: 2.8rem 0;
`;

const RadioQuestionStyle = {
  color: '#8c8c8c',
  letterSpacing: '1.2px',
  marginTop: '1.8rem',
  marginBottom: '0',
  fontSize: '1rem',
};

const RadioQuestion = styled.p`
  ${RadioQuestionStyle}
`;

export const CustomRadio = styled(Radio)`
  display: block;
  span {
    font-weight: 600;
    font-size: 0.9rem;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: ${({ theme }) => theme.primary};
  }
  .ant-radio-inner::after {
    background-color: ${({ theme }) => theme.primary} !important;
  }
`;

const ChangeOption = styled.span`
  position: absolute;
  right: -5px;
  top: 17%;
  transform: translateY(-11%);
  font-size: 1.7rem;
  padding: 0.5rem;
  cursor: default;
`;
