import {SneakerItem} from "../redux/basket/types";

export const calcTotalPrice = (items:SneakerItem[]) => {
    return   items.reduce((sum: any, el: any) => sum + (el.price * el.quantity)
    , 0);
}