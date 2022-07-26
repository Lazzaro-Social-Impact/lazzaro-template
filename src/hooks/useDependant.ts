import axios from 'axios'
import { useQuery } from 'react-query'

export default function useDependant(url: string, queryKey: string, exist: string | undefined) {
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
