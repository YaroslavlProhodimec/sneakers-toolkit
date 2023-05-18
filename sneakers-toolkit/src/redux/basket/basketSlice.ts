import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {calcTotalPrice} from "../../utilits/calcTotalPrice";
import {getSneakersFromLS} from "../../utilits/getSneakersFromLocalStorage";
import {basketSliceState, SneakerItem} from "./types";


const {items,totalPrice} = getSneakersFromLS()
const initialState:basketSliceState = {
    totalPrice,
    items
}

export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers: {
        addItem(state,action:PayloadAction<SneakerItem>){
            const findItem = state.items.find((el:any) => el.id === action.payload.id)
            if(findItem ) {
                 findItem.quantity++
            } else  {
                    state.items.push({...action.payload,quantity:1});
            }
            state.totalPrice = calcTotalPrice(state.items)
            },
        removeItem(state,action:PayloadAction<SneakerItem>){
            state.items = state.items.filter((el:any)=>el.id !== action.payload)
            state.totalPrice = calcTotalPrice(state.items)
            },
        clearItem(state){
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const {addItem,
    removeItem,
    } = basketSlice.actions

export default basketSlice.reducer