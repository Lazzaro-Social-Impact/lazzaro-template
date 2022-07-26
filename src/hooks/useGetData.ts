import axios from 'axios'
import { useQuery } from 'react-query'

export default function useGetData(url:string, queryKey: string) {
  const fetchData = async () => {
    const { data: { data } } = await axios.get(url)
    return data
  }

  const {
    isLoading, isError, data, error
  } = useQuery(queryKey, fetchData)

  return {
    isLoading, isError, data, error
  }
}
