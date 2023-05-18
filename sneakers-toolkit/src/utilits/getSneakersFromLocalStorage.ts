import {calcTotalPrice} from "./calcTotalPrice";
import {SneakerItem} from "../redux/basket/types";

export const getSneakersFromLS = ()=> {
    const data = localStorage.getItem('sneakers')
    const items = data ? JSON.parse(data) : []
    const totalPrice = calcTotalPrice(items)

        return {
            items: items as SneakerItem[],
            totalPrice
        }
    }
