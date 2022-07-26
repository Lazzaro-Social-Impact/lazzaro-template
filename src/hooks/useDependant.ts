import axios from 'axios'
import { QueryKey, useQuery } from '@tanstack/react-query'

export default function useDependant(url: string, queryKey: QueryKey, exist: string | undefined) {
  const fetchData = async () => {
    const {
      data: { data },
    } = await axios.get(url)
    return data
  }

  const {
    isLoading, isError, data, error,
  } = useQuery(queryKey, fetchData, {
    enabled: !!exist,

  })
  return {
    isLoading, isError, data, error,
  }
}
