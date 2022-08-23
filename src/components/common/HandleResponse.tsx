import { lazy } from 'react'
import { toast } from 'react-toastify'

const LoadingSpinner = lazy(() => import('./LoadingSpinner'))
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
    return <LoadingSpinner />
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
