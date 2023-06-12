import {createSlice} from "@reduxjs/toolkit";
import {fetchLogin, fetchLogOut} from "./asyncActions";


export const initialState = {
    isInitialzed:false,
    error:null,
    captchaUrl: null
}



const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin(state, action) {
            state.isInitialzed = action.payload
        },
        setLogOut(state, action) {
            state.isInitialzed = action.payload
        },
        setCaptcha(state, action) {
            state.captchaUrl = action.payload
        },
        setAppErrorAC(state, action) {
            state.error = action.payload
        },
    },
    extraReducers:builder => {
    builder
        .addCase(fetchLogin.pending,(state,action)  => {
            })
    .addCase(fetchLogin.fulfilled,(state,action)  => {
        state.isInitialzed = true
        // state.error = false

        })
        .addCase(fetchLogin.rejected,(state,action)  => {
            state.isInitialzed = false
             state.error = 'error'

        })
        .addCase(fetchLogOut.pending,(state,action)  => {
        })
        .addCase(fetchLogOut.fulfilled,(state,action)  => {
        state.isInitialzed = false

    })
        .addCase(fetchLogOut.rejected,(state,action)  => {
            state.isInitialzed = true
        })
    }

})

export const {setCaptcha,setAppErrorAC} = loginSlice.actions

export default loginSlice.reducer