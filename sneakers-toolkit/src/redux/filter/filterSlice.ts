import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterSliceState, Sort} from "./types";


export const initialState:FilterSliceState = {
    searchValue: '',
    categoryId:0,
    sort: {
        name:'популярности',
        sortProperty:Sort.RATING
    },
    currentPage:1
}


const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        setCategoryId(state,action:PayloadAction<number>){
            state.categoryId = action.payload;
        },
        setSearchValue(state, action:PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setSort(state,action:PayloadAction<{ name:string,sortProperty:string}>){
            state.currentPage = 1
                state.sort = action.payload;
        },
        setCurrentPage(state,action:PayloadAction<number>){
            state.currentPage = action.payload
        },
        setFilters(state,action:PayloadAction<FilterSliceState>){
            if(Object.keys(action.payload).length) {
                state.currentPage = Number(action.payload.currentPage)
                state.categoryId = Number(action.payload.categoryId)
                state.sort = action.payload.sort
            } else {
                state.currentPage = 1;
                state.categoryId = 0
                state.sort = {
                    name:'популярности',
                    sortProperty:Sort.RATING
                }
            }
        }
    },
})
export const {
    setSearchValue,
    setSort,
    setCurrentPage,} = filterSlice.actions

export default filterSlice.reducer