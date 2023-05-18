import {createSlice} from "@reduxjs/toolkit";
import {fetchLogin, fetchLogOut} from "./asyncActions";


export const initialState = {
    isInitialzed:false
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
        }
    },
    extraReducers: {
        [fetchLogin.pending]: () => {
            },
        [fetchLogin.fulfilled]: (state ) => {
            state.isInitialzed = true

        },
        [fetchLogin.rejected]: (state ) => {
            state.isInitialzed = false

        },
        [fetchLogOut.pending]: () => {
            },
        [fetchLogOut.fulfilled]: (state ) => {
            state.isInitialzed = false

        },
        [fetchLogOut.rejected]: (state) => {
            state.isInitialzed = true

        }
    }

})


export default loginSlice.reducer