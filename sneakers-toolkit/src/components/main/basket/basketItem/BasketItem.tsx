import React from 'react';
import {Close} from "@mui/icons-material";
import {ListItem} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {removeItem} from "../../../../redux/basket/basketSlice";
import {useAppDispatch} from "../../../../redux/store";

type PropsBasketItemType = {
    id: string
    name: string
    price: number
    quantity?: number
}
const BasketItem = ({id, name, price, quantity}: PropsBasketItemType) => {

    const dispatch = useAppDispatch()
const onClickRemove = (id: any) => {
    dispatch(removeItem(id))
}

    return (
        <ListItem>
            <Typography
                variant={'body1'}
            >{name} {price}$ х{quantity}
            </Typography>
            <IconButton onClick={()=>onClickRemove(id)}>
                <Close/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;