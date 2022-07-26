import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

export default function usePostData<T>(url: string) {
  return useMutation((data: T) => axios.post(url, data))
}
