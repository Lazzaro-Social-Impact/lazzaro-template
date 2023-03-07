import { getOngByUrl } from '../../../api/getApiServices';
import useFetch from '../../useDependant';

const { REACT_APP_PRO_URL: prodUrl, REACT_APP_PRE_URL: preUrl } = import.meta.env;

const ongUrl = preUrl;
// const ongUrl = prodUrl;
// const ongUrl = window.location.host;

const useOngConfig = () => {
  const { data: ongConfig, ...states } = useFetch<TPlatformConfig>(getOngByUrl(ongUrl), ['ong-config'], ongUrl);

  return {
    ongId: ongConfig?.ong_id,
    active: ongConfig?.active,
    currency: ongConfig?.currency,
    currencySymbol: ongConfig?.currency_symbol,
    language: ongConfig?.language,
    poweredByLazzaro: ongConfig?.powered_by_lazzaro,
    url: ongConfig?.url,
    paymentMethod: ongConfig?.payment_method,

    ...states,
  };
};

export default useOngConfig;
