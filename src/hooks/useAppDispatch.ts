import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../app/store'

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch
