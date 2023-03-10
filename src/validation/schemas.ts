import * as yup from 'yup';

export const commonSchema = {
  firstName: yup.string().required('errors.firstname'),
  lastName: yup.string().required('errors.lastname'),
  user_email: yup.string().required('errors.email'),
};
export const memberSchema = yup.object({
  ...commonSchema,
  home_address: yup.string().required('errors.address'),
  birthDate: yup.date().required('errors.dob').typeError('errors.dob'),
  nif: yup.string().required('errors.ID').typeError('errors.ID'),
  terms: yup.boolean().typeError('errors.privacypolicy').oneOf([true]).nullable(),
  certificate: yup.boolean().typeError('errors.certificate').nullable(),
  phone: yup.string().required('errors.phone'),
  plan: yup.string().optional(),
  communications: yup.boolean().typeError('errors.certifications').nullable(),
  amount: yup.number().optional(),
});

export const buyCourseTicketSchema = yup.object({
  ...commonSchema,
  mobilePhone: yup.string().required('errors.phone'),
  terms: yup.boolean().oneOf([true], 'errors.privacypolicy'),
});

export const buyTicketSchema = yup.object({
  ...commonSchema,
  mobilePhone: yup.string().required('errors.phone'),
  terms_and_conditions: yup.boolean().oneOf([true], 'errors.privacypolicy'),
  tickets: yup
    .array()
    .of(
      yup.object({
        amount: yup.number().required('errors.amount').default(0),
        price: yup.number().required('errors.amount').default(0),
        id: yup.string().required('errors.ticket'),
      }),
    )
    .required('errors.ticket'),
  nif: yup.string().required('errors.ID').typeError('errors.ID'),
  image_rights: yup.boolean().oneOf([true], 'errors.image_rights'),
  certificate: yup.boolean().typeError('errors.certificate').nullable(),
});

export const buyProductSchema = yup.object({
  ...commonSchema,
  home_address: yup.string().required('errors.address'),
  productAmount: yup.number().typeError('errors.amount').required(),
  city: yup.string().required('errors.city'),
  country: yup.string().required('errors.country'),
  nif: yup.string().required('errors.ID').typeError('errors.ID'),
  cp: yup.number().typeError('errors.cp').required(),
  mobile_phone: yup.string().required('errors.phone'),
  privacy_policy: yup.boolean().isTrue('errors.privacypolicy').required(),
});

export const contactEventSchema = yup
  .object()
  .shape({
    name: yup.string().required('errors.name'),
    email: yup.string().required('errors.email'),
    text: yup.string().required('errors.message'),
  })
  .required();

export const contactSchema = yup.object({
  name: yup.string().required('errors.firstname'),
  lastName: yup.string().required('errors.lastname'),
  email: yup.string().required('errors.email').email('errors.invalid_email'),
  subject: yup.string().required('errors.subject'),
  message: yup.string().required('errors.message'),
  terms: yup.boolean().oneOf([true], 'errors.privacypolicy'),
});

export const donationSchema = yup.object({
  ...commonSchema,
  home_address: yup.string().required('errors.address'),
  nif: yup.string().required('errors.ID').typeError('errors.ID'),
  terms: yup.boolean().required('errors.privacypolicy').oneOf([true], 'errors.privacypolicy'),
  amount: yup.number().required('errors.amount').typeError('errors.amount'),
  text: yup.string(),
  birthDate: yup.date().required('errors.dob').typeError('errors.dob'),
  anonymous: yup.boolean().default(false).nullable(),
  certificate: yup.boolean().default(false).nullable(),
  receiveNft: yup.boolean().default(false),
  wallet_address: yup.string(),
});

export const projectFormSchema = yup.object({
  ...commonSchema,
  home_address: yup.string().required('errors.address'),
  nif: yup.string().required('errors.ID').typeError('errors.ID'),
  terms: yup.boolean().required('errors.privacypolicy').oneOf([true], 'errors.privacypolicy'),
  amount: yup.number().required('errors.amount').typeError('errors.amount'),
  text: yup.string(),
  birthDate: yup.date().required('errors.dob').typeError('errors.dob'),
  certificate: yup.boolean().default(false).required(),
  anonymous: yup.boolean().default(false).required(),
});

export const volunteerSchema = yup
  .object()
  .shape({
    ...commonSchema,
    message: yup.string().required('errors.message'),
  })
  .required();
