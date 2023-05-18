import {RootState} from "../store";

export const selectorBasket = (state:RootState) => (state.basket)
export const selectorItems = (state:RootState) => (state.basket.items.length)