import {useEffect} from "react";
import {setAppErrorAC} from "redux/login/loginSlice";
import {RootState, useAppDispatch, useAppSelector} from "redux/store";
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export const GlobalError = () => {
    const {error} = useAppSelector((state:RootState) => state.login)
    const dispatch = useAppDispatch()


    if (error !== null) {
        toast.error(error )
    }
    useEffect(() => {
        setTimeout(() => {
            dispatch(setAppErrorAC(null))
        },2000)
    },[error])
    console.log(error,'error')
    return (
        <ToastContainer
            position="top-center"
            autoClose={5076}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    )
}