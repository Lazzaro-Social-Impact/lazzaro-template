import React from 'react'
import { toast } from 'react-toastify'

interface IProps {
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    successMsg: string
    errorMsg: string
    successId: string
    errorId: string
}
function HandleResponse({
  isLoading, isSuccess, isError, successMsg, errorMsg, successId, errorId,
}: IProps) {
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isSuccess) {
    toast.success(successMsg, {
      toastId: successId,
    })
  }

  if (isError) {
    toast.error(errorMsg, {
      toastId: errorId,
    })
  }

  return null
}

export default HandleResponse
