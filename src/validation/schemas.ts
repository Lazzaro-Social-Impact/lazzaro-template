import * as yup from 'yup'
import i18n from '../i18n/config'

const { t } = i18n

const personalDetailsSchema = {
  firstName: yup.string().required(t('errors.firstname')),
  lastName: yup.string().required(t('errors.lastname')),
  user_email: yup.string().required(t('errors.email')),
}
export const memberSchema = yup.object().shape({
  ...personalDetailsSchema,
  home_address: yup.string().required(t('errors.address')),
  birthDate: yup.date().required(t('errors.dob')).typeError(t('errors.dob')),
  nif: yup.string().required(t('errors.ID')).typeError(t('errors.ID')),
  terms: yup.boolean().typeError(t('errors.privacypolicy')).oneOf([true], t('errors.privacypolicy')),
  membership: yup.boolean().typeError(t('errors.membership')).oneOf([true], t('errors.membership')),
  phone: yup.string().required(t('errors.phone')),
}).required()

export const buyCourseTicketSchema = yup.object({
  ...personalDetailsSchema,
  mobilePhone: yup.string().required(t('errors.phone')),
  terms: yup.boolean().oneOf([true], t('errors.privacypolicy')),
})

export const buyTicketSchema = yup.object({
  ...personalDetailsSchema,
  mobilePhone: yup.string().required(t('errors.phone')),
  terms_and_conditions: yup.boolean().oneOf([true], t('errors.privacypolicy')),
  tickets: yup.array().of(yup.object({
    amount: yup.number().required(t('errors.amount')),
    id: yup.string().required(t('errors.ticket')),
  })).required(t('errors.ticket')),

})

export const buyProductSchema = yup.object({
  ...personalDetailsSchema,
  home_address: yup.string().required(t('errors.address')),
  productAmount: yup.number().typeError(t('errors.amount')).required(),
  city: yup.string().required(t('errors.city')),
  country: yup.string().required(t('errors.country')),
  nif: yup.string().required(t('errors.ID')).typeError(t('errors.ID')),
  cp: yup.number().typeError(t('errors.cp')).required(),
  mobile_phone: yup.string().required(t('errors.phone')),
  birthDate: yup.date().required(t('errors.dob')).typeError(t('errors.dob')),

  privacy_policy: yup.boolean().isTrue(t('errors.privacypolicy')).required(),
})

export const contactEventSchema = yup.object().shape({
  name: yup.string().required(t('errors.name')),
  email: yup.string().required(t('errors.email')),
  text: yup.string().required(t('errors.message')),
}).required()

export const contactSchema = yup.object({
  name: yup.string().required(t('errors.firstname')),
  lastName: yup.string().required(t('errors.lastname')),
  email: yup.string().required(t('errors.email')).email(t('errors.invalid_email')),
  subject: yup.string().required(t('errors.subject')),
  message: yup.string().required(t('errors.message')),
  terms: yup.boolean().oneOf([true], t('errors.privacypolicy'))
})

export const donationSchema = yup.object({
  ...personalDetailsSchema,
  home_address: yup.string().required(t('errors.address')),
  nif: yup.string().required(t('errors.ID')).typeError(t('errors.ID')),
  terms: yup.boolean().required(t('errors.privacypolicy')).oneOf([true], t('errors.privacypolicy')),
  amount: yup.number().required(t('errors.amount')).typeError(t('errors.amount')),
  text: yup.string(),
  birthDate: yup.date().required(t('errors.dob')).typeError(t('errors.dob')),

})

export const volunteerSchema = yup.object().shape({
  ...personalDetailsSchema,
  home_address: yup.string().required(t('errors.address')),
}).required()
