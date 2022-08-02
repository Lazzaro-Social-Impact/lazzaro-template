import axios from 'axios'
import { QueryKey, useQuery } from '@tanstack/react-query'

function useDependant<TData>(url: string, queryKey: QueryKey, exist: string | boolean) {
  const fetchData = async () => {
    const {
      data: { data },
    } = await axios.get(url)
    return data
  }

  const {
    isLoading, isError, data, error
  } = useQuery<TData>(queryKey, fetchData, {
    enabled: !!exist,
  })
  return {
    isLoading,
    isError,
    data,
    error,
  } as {
    isLoading: boolean;
    isError: boolean;
    data: TData;
    error: Error;
  }
}

export default useDependant
