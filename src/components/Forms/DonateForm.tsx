import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { type TypeOf } from 'yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Radio } from 'antd';
import { type ReactElement } from 'react';
import { DatePicker, Button, Center, Input, NftGiftBanner, Flex, Box } from '../common';
import Label from '../common/Label';
import HandleResponse from '../common/HandleResponse';
import { ErrorInput as ErrorMsg } from '../common/ErrorInput';
import { donationSchema } from '../../validation/schemas';
import { CustomInputDiv, CustomTextArea } from '../common/CustomInput';
import PrivacyPolicy from '../common/PrivacyPolicy';
import { CustomRadio } from './BecomeMemberForm';
import { FormRow } from '../common/FormRow';
import useSuccessPaymentNotification from '../../hooks/useSuccessPaymentNotification';
import { useFormSubmit } from '../../hooks';
import { getStartDonationUrl } from '../../api/postApiServices';
import { useNFT, useOngConfig } from '../../hooks/Api';

type DonateSubmitForm = TypeOf<typeof donationSchema>;

function DonateForm(): ReactElement {
  const { minDonationAmount = 0 } = useNFT();
  const { currencySymbol = '$', ongId } = useOngConfig();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<DonateSubmitForm>({ resolver: yupResolver(donationSchema) });

  const { submit, ...states } = useFormSubmit<DonateSubmitForm>({
    url: getStartDonationUrl(ongId || ''),
    isPayment: true,
    redirectPath: 'donate',
  });

  const submitHandler = (values: DonateSubmitForm) => {
    const donationInfo = { ...values, ong_id: ongId };

    submit(donationInfo);
  };

  const connectToMetamask = () => {
    window.location.href = '/';
  };

  const donationAmount = watch('amount') || 0;
  const receiveNft = watch('receiveNft');

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <HandleResponse
        {...states}
        successMsg={useSuccessPaymentNotification()}
        errorMsg={t('fail.error')}
        successId={`${ongId}-form-success`}
        errorId={`${ongId}-form-error`}
      />

      <NftGiftBanner amount={minDonationAmount} currencySymbol={currencySymbol} />

      <FormControl mt={2}>
        <Label htmlFor='amount'>{t('your_donation')}</Label>
      </FormControl>

      <CustomInputDiv>
        <Input type='number' placeholder={t('placeholders.amount')} {...register('amount')} />
        {errors.amount?.message && <ErrorMsg msg={t('errors.amount')} />}
      </CustomInputDiv>

      <FormControl mt={1.8}>
        <Label htmlFor='amount'>{t('details')}</Label>
      </FormControl>

      <FormRow>
        <CustomInputDiv>
          <Input type='text' placeholder={t('placeholders.firstname')} {...register('firstName')} />
          {errors.firstName?.message && <ErrorMsg msg={t('errors.firstname')} />}
        </CustomInputDiv>

        <CustomInputDiv>
          <Input type='text' placeholder={t('placeholders.lastname')} {...register('lastName')} />
          {errors.lastName?.message && <ErrorMsg msg={t('errors.lastname')} />}
        </CustomInputDiv>
      </FormRow>

      <FormRow>
        <CustomInputDiv>
          <Input type='email' placeholder={t('placeholders.email')} {...register('user_email')} />
          {errors.user_email?.message && <ErrorMsg msg={t('errors.email')} />}
        </CustomInputDiv>

        <CustomInputDiv>
          <Input type='text' placeholder={t('placeholders.address')} {...register('home_address')} />
          {errors.home_address?.message && <ErrorMsg msg={t('errors.address')} />}
        </CustomInputDiv>
      </FormRow>

      <FormRow>
        <CustomInputDiv>
          <Input type='text' placeholder={t('placeholders.ID')} {...register('nif')} />
          {errors.nif?.message && <ErrorMsg msg={t('errors.ID')} />}
        </CustomInputDiv>

        <CustomInputDiv>
          <DatePicker control={control} />
          {errors.birthDate?.message && <ErrorMsg msg={t('errors.dob')} />}
        </CustomInputDiv>
      </FormRow>

      <FormRow>
        <CustomTextArea rows={4} placeholder={t('placeholders.message')} {...register('text')} />
      </FormRow>

      {donationAmount >= minDonationAmount && (
        <FormControl mt={2.4}>
          <Label>
            {t('receive_nft_first_part')}
            {minDonationAmount}
            {currencySymbol},{t('receive_nft_second_part')}
          </Label>

          <Radio.Group {...register('receiveNft')}>
            <CustomRadio value>{t('yes')}</CustomRadio>
            <CustomRadio value={false}>{t('no')}</CustomRadio>
          </Radio.Group>
        </FormControl>
      )}

      {donationAmount >= minDonationAmount && receiveNft && (
        <FormControl mt={2}>
          <Flex gap={1} width='100%'>
            <Input
              style={{ flex: 1 }}
              placeholder={t('placeholders.wallet_address')}
              {...register('wallet_address')}
              mt={0}
            />
            o
            <Button style={{ flex: 1 }} radius={5} type='button' onClick={connectToMetamask}>
              {t('connect_metamask')}
            </Button>
          </Flex>

          <Box mt={0.5}>
            {t('dont_have_wallet')}{' '}
            <a href='/' target='_blank'>
              {t('discover_how')}
            </a>
          </Box>
        </FormControl>
      )}

      <FormControl mt={3}>
        <Label>{t('donation_publicity.question')}</Label>

        <Radio.Group {...register('anonymous')}>
          <CustomRadio value={false}>{t('donation_publicity.public')}</CustomRadio>
          <CustomRadio value>{t('donation_publicity.anonymous')}</CustomRadio>
        </Radio.Group>
      </FormControl>

      <FormControl mt={1.5}>
        <Label>{t('Certificate question')}</Label>

        <Radio.Group {...register('certificate')}>
          <CustomRadio value>{t('yes')}</CustomRadio>
          <CustomRadio value={false}>{t('no')}</CustomRadio>
        </Radio.Group>
      </FormControl>

      <FormControl mode='row' justify='start' mt={2}>
        <input type='checkbox' {...register('terms')} />
        <PrivacyPolicy />
        {errors.terms?.message && <ErrorMsg msg={t('errors.privacypolicy')} />}
      </FormControl>

      <Center>
        <Button fontSize={0.9} mt='1.2rem' type='submit' aria-label='submit'>
          {t('Donate')}
        </Button>
      </Center>
    </Form>
  );
}
export default DonateForm;

interface IFormControlProps {
  mode?: TFlexDirection;
  justify?: TJustifyContent;
  align?: TAlignItems;
  mb?: TMarginBottom;
  mt?: TMarginTop;
}

const Form = styled.form`
  padding: 3rem;
  width: 65%;
  @media (max-width: 768px) {
    padding: 0rem;
  }
`;

export const FormControl = styled.div<IFormControlProps>`
  display: flex;
  flex-direction: ${({ mode }) => mode || 'column'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'auto'};
  gap: 1rem;
  margin-bottom: ${({ mb = 0 }) => `${mb}rem`};
  margin-top: ${({ mt }) => mt && `${mt}rem`};
`;
