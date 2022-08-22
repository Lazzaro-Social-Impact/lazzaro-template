import { useEffect } from 'react'
import usePostData from './usePostData'

type returnType = { transactionId:string; isLoading:boolean; isError:boolean }

interface IParameters<TParams> {
  params: TParams;
  url: string;
}

const useFinalizePayment = <TParams>({ params, url }:IParameters<TParams>):returnType => {
  const {
    mutateAsync, isError, isLoading, data
  } = usePostData<{ data:string }, TParams>(url)

  const getTransactionId = async ():Promise<void> => {
    await mutateAsync(params)
  }

  useEffect(() => {
    getTransactionId()
  }, [])

  const transactionId = data?.data.data || ''

  return { transactionId, isError, isLoading }
}

export default useFinalizePayment
