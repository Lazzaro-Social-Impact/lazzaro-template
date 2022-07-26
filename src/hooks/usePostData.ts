import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

/**
 * @param {string} url
 * @returns { mutateAsync, mutate, isSuccess, data, error, isLoading, isError, status }
 */

export default function usePostData(url: string) {
  return useMutation((data: object) => axios.post(url, data))
}
