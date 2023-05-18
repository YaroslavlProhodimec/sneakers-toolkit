import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";

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
}
type ResponseData = {
    data: {
        userId: string
    }
    fieldErrors: []
    messages: []
    resultCode: 0
}

export const fetchLogin = createAsyncThunk<ResponseData, any>(
    'login/fetchLoginStatus',
    async (params: ParamsProps) => {

        const {data} = await instance.post<ResponseData>('auth/login'
            , params
        );

        return data;
    },
);
export const fetchLogOut = createAsyncThunk(
    'fetchLogOut/fetchLogOutStatus',
    async () => {
        const {data} = await instance.delete('auth/login');
        return data;
    },
);