import axios, { type AxiosError } from 'axios'
import { type QueryKey, useQuery } from '@tanstack/react-query'

function useDependant<TData>(url: string, queryKey: QueryKey, exist: string | boolean) {
  const fetchData = async () => {
    const { data } = await axios.get(url)

    if (data.data) return data.data

    return data// because of useGeoCoding hook
  }
  const {
    isLoading, isError, data, error
  } = useQuery<TData, AxiosError>(queryKey, fetchData, { enabled: !!exist, })

  return {
    isLoading,
    isError,
    data,
    error,
  }
}

export default useDependant
