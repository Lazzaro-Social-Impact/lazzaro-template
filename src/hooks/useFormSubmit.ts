import { useNavigate } from 'react-router-dom'
import useAppSelector from './useAppSelector'
import usePostData from './usePostData'

type TParameters = {
  url: string;
  isPayment: boolean;
}
type TClientSecret = { clientSecret: string };
type TPayPalLink = { data: string };
type TData = TClientSecret | TPayPalLink;

const useFormSubmit = <TMutate>({ url, isPayment }: TParameters) => {
  const navigate = useNavigate()
  const paymentMethod = useAppSelector(({ ong }) => ong.ongConfig?.platformConfig?.payment_method)
  const {
    isLoading, isSuccess, isError, mutateAsync
  } = usePostData<TData, TMutate>(url)

  const submit = async (formData: TMutate & { ongId?: string }) => {
    if (!isPayment) {
      await mutateAsync(formData)
      return
    }

    if (paymentMethod === 'stripe') {
      const {
        data: { clientSecret },
      } = (await mutateAsync(formData)) as { data: TClientSecret }
      return navigate(`/checkout/${clientSecret}`, { state: { formData }, replace: true })
    }

    const {
      data: { data: payPalLink },
    } = (await mutateAsync(formData)) as { data: TPayPalLink }
    window.open(payPalLink, '_blank')
  }

  return {
    isLoading,
    isSuccess,
    isError,
    submit,
  } as {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    submit: (formData: TMutate) => Promise<void>;
  }
}

export default useFormSubmit
