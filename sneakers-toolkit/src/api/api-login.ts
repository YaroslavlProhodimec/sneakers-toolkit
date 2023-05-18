import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a4e56366-fe3d-4e5d-8c7b-0714b5ffdb22'
    }
})
type ParamsProps = {
    email:string
    password:string
    rememberMe:boolean
}

export const authAPI = {
    login(params:ParamsProps) {
      return   instance.post('auth/login',params)
    }
}
