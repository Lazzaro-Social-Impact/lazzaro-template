import * as yup from 'yup'

const personalDetailsSchema = {
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  user_email: yup.string().required('Email is required'),
}
export const memberSchema = yup.object().shape({
  ...personalDetailsSchema,
  home_address: yup.string().required('Address is required'),
  birthDate: yup.date().required('Birth of Date is required')
    .typeError('Birth of Date is required'),
  nif: yup.string().required('ID is required').typeError('ID must be a number'),
  terms: yup.boolean().typeError('You must accept the terms and conditions'),
  membership: yup.boolean().typeError('You must accept the membership'),
  phone: yup.string().required('Phone is required')
}).required()

export const buyCourseTicketSchema = yup.object({
  ...personalDetailsSchema,
  mobilePhone: yup.string().required('Mobile phone is required'),
  terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
})

export const buyTicketSchema = yup.object({
  ...personalDetailsSchema,
  mobilePhone: yup.string().required('Mobile phone is required'),
  terms_and_conditions: yup.boolean().oneOf([true], 'You must accept the privacy policy'),
  tickets: yup.array().of(yup.object({
    amount: yup.number().required('Amount is required'),
    id: yup.string().required('Ticket id is required'),
  })).required('Tickets are required'),

})

export const buyProductSchema = yup.object({
  ...personalDetailsSchema,
  home_address: yup.string().required('Address is required'),
  productAmount: yup.number().typeError('please enter an amount').required(),
  city: yup.string().required('City is required'),
  country: yup.string().required('Country is required'),
  nif: yup.string().required('DNI is required'),
  cp: yup.number().typeError('CP is required').required(),
  mobile_phone: yup.string().required('Phone is required'),
  birthDate: yup.date().typeError('date of birth is required').required(),
  privacy_policy: yup.boolean().isTrue('You must accept the privacy policy').required(),
})

export const contactEventSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required'),
  text: yup.string().required('Message is required'),
}).required()

export const contactSchema = yup.object({
  name: yup.string().required('Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().required('Email is required').email('Invalid email'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
  terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
})

export const donationSchema = yup.object({
  ...personalDetailsSchema,
  home_address: yup.string().required('Address is required'),
  nif: yup.string().required('ID is required').typeError('ID must be a number'),
  terms: yup.boolean().required('You must accept the terms and conditions'),
  amount: yup.number().required('Amount is required').typeError('Amount must be a number'),
  text: yup.string()
})

export const volunteerSchema = yup.object().shape({
  ...personalDetailsSchema,
  home_address: yup.string().required('Address is required'),
}).required()
