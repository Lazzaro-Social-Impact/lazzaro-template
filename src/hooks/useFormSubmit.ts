import { useNavigate } from 'react-router-dom';
import finalizePaymentRoutes from '../app/router/finalizePaymentRoutes';
import useAppSelector from './useAppSelector';
import usePostData from './usePostData';

type TParameters = {
  url: string;
  isPayment: boolean;
  redirectPath?: keyof typeof finalizePaymentRoutes;
};
type TClientSecret = { clientSecret: string };
type TData = TClientSecret;

const useFormSubmit = <TMutate>({ url, isPayment, redirectPath }: TParameters) => {
  const navigate = useNavigate();
  const paymentMethod = useAppSelector(({ ong }) => ong.ongConfig?.platformConfig?.payment_method);
  const { isLoading, isSuccess, isError, mutateAsync } = usePostData<TData, TMutate>(url);

  const submit = async (formData: TMutate & { ongId?: string }) => {
    if (!isPayment) {
      await mutateAsync(formData);
      return;
    }

    if (paymentMethod === 'stripe') {
      const {
        data: { clientSecret },
      } = (await mutateAsync(formData)) as { data: TClientSecret };
      return navigate(`/checkout/${clientSecret}`, { state: { formData, redirectPath }, replace: true });
    }

    const windowReference = window.open();

    const {
      data: { data: checkoutUrl },
    } = (await mutateAsync(formData)) as any;

    if (windowReference) {
      windowReference.location.href = checkoutUrl;
    }
  };

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
  };
};

export default useFormSubmit;
