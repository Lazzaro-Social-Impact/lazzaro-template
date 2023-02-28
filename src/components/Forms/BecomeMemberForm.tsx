import { Radio } from 'antd';
import { type ReactElement, useMemo } from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { TypeOf } from 'yup';
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

type MemberSubmitForm = TypeOf<typeof memberSchema>;

type TOption = {
  id: string;
  name: string;
  amount: number;
  stripe_plan_id: string | null;
  type: '1 month' | '12 months';
};

type TOptions = TOption[];

export default function BecomeMemberForm(): ReactElement {
  const ongId = useAppSelector((state) => state.ong.ongId) || '';
  const { t } = useTranslation();
  const currency = useAppSelector((state) => state.ong.ongConfig?.platformConfig.currency_symbol) || '€';
  const { data: donationOptions = [] } = useDependant<TOptions>(getDonationOptions(ongId), ['donation-options'], ongId);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MemberSubmitForm>({ resolver: yupResolver(memberSchema) });
  const { submit, isError, isLoading, isSuccess } = useFormSubmit<MemberSubmitForm>({
    url: getBecomePartnerUrl(),
    isPayment: true,
    redirectPath: 'partners',
  });

  const onSubmit = (data: MemberSubmitForm) => {
    const plan = donationOptions.find((option) => option.id === data.plan);

    const formData = {
      ...data,
      communications: data.communications || false,
      certificate: data.certificate || false,
      birthDate: moment(data.birthDate).format('YYYY-MM-DD'),
      ong_id: ongId,
      subscriptionType: plan?.type,
      stripe_plan_id: plan?.stripe_plan_id || '',
      amount: plan?.amount,
    };

    submit(formData as any);
  };

  const monthlyOptions = useMemo(
    () => donationOptions.filter(({ type }) => type === '1 month'),
    [donationOptions.length],
  );
  const annulOptions = useMemo(
    () => donationOptions.filter(({ type }) => type === '12 months'),
    [donationOptions.length],
  );

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
            <CustomDropdown {...register('plan')}>
              <option defaultChecked value=''>
                {t('membership.quantity')}
              </option>
              <optgroup label={t('membership.monthly')}>
                {monthlyOptions?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name} ({option.amount}
                    {currency})
                  </option>
                ))}
              </optgroup>

              <optgroup label={t('membership.annual')}>
                {annulOptions?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name} ({option.amount}
                    {currency})
                  </option>
                ))}
              </optgroup>
            </CustomDropdown>
          </FormRow>
          {errors.plan?.message && <ErrorInput msg={t('errors.amount_member')} mt={0.4} />}

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
