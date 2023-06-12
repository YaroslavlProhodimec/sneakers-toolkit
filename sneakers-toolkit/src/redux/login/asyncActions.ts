import {createAsyncThunk} from '@reduxjs/toolkit';
import {authAPI} from "api/api-login";
import {securityAPI} from "api/security-api";
import axios from "axios";
import {setAppErrorAC, setCaptcha} from "redux/login/loginSlice";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a4e56366-fe3d-4e5d-8c7b-0714b5ffdb22'
    }
})
type ParamsProps = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl?:string
}
type ResponseData = {
    data: {
        userId: string
    }
    fieldErrors: []
    messages: []
    resultCode: 0 | 1 | 10
}

export const fetchLogin = createAsyncThunk<ResponseData, any>('login/fetchLoginStatus',
    async (params: ParamsProps,thunkAPI:any) => {
    const {rejectWithValue,dispatch} = thunkAPI

     try   {
            const {data} = await authAPI.login(params)
            if(data.resultCode === 0) {

                return data;
            } if (data.resultCode === 10){
             const response = await securityAPI.getCaptchaUrl()
             const captchaUrl = response.data.url
             return dispatch(setCaptcha(captchaUrl)) && rejectWithValue(null)

         } if (data.resultCode === 1) {
             // dispatch(setAppErrorAC('error'))
                return  rejectWithValue(null)

        }
        } catch (e:any) {
         console.log(e.response,"e")
        }
    },
);


export const fetchLogOut = createAsyncThunk(
    'fetchLogOut/fetchLogOutStatus',
    async () => {
        const {data} = await instance.delete('auth/login');
        return data;
    },
);