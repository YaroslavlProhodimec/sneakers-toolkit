import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchSneakers} from "./asyncActions";
import {SneakerItem} from "../basket/types";
import {SneakersSliceState, Status} from "./types";





export const initialState:SneakersSliceState = {
    items: [],
    isLoading: Status.LOADING
}



const sneakersSlice = createSlice({
    name: 'sneakers',
    initialState,
    reducers: {
        setItems(state, action:PayloadAction<SneakerItem[]>) {
            state.items = action.payload
        },

    },
    extraReducers:(builder) =>{
        builder.addCase(fetchSneakers.pending,(state)=> {
            state.isLoading = Status.LOADING
            state.items = []
        })
        builder.addCase(fetchSneakers.fulfilled,(state,action)=> {
            state.isLoading = Status.SUCCESS
            state.items = action.payload
        })
        builder.addCase(fetchSneakers.rejected,(state)=> {
            state.isLoading = Status.ERROR
            state.items = []
        })
    }
})
export const {setItems,} = sneakersSlice.actions

export default sneakersSlice.reducer