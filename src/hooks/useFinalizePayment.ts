/* eslint-disable no-console */
import { useEffect } from 'react'
import usePostData from './usePostData'

type returnType = { transactionId:string; isLoading:boolean; isError:boolean }

interface IParameters<TParams> {
  params: TParams;
  url: string;
}

const useFinalizePayment = <TParams>({ params, url }:IParameters<TParams>):returnType => {
  const {
    mutateAsync, isError, isLoading, data, error
  } = usePostData<{ data:string }, TParams>(url)
  console.log('🚀 ~ file: useFinalizePayment.ts ~ line 15 ~ useFinalizePayment ~ data', data)
  console.log('🚀 ~ file: useFinalizePayment.ts ~ line 15 ~ useFinalizePayment ~ error', error)

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
