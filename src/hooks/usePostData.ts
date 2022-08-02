import axios, { AxiosResponse } from 'axios'
import { useMutation } from '@tanstack/react-query'

export default function usePostData<T, K>(url: string) {
  return useMutation<AxiosResponse<T>, unknown, K>((data) => axios.post(url, data))
}
