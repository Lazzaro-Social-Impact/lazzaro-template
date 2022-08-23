import axios, { type AxiosError, type AxiosResponse } from 'axios'
import { useMutation } from '@tanstack/react-query'

export default function usePostData<TData, TMutate>(url: string) {
  return useMutation<AxiosResponse<TData>, AxiosError, TMutate>((data) => axios.post(url, data))
}
