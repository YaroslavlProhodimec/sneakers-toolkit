import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./basketItem/BasketItem";
import Typography from "@mui/material/Typography";
import {useAppSelector} from "../../../redux/store";
import s from './Basket.module.css'
import {selectorBasket} from "../../../redux/basket/selectors";
type BasketPropsType = {
    open: boolean
    closeCart: () => void
}
export const Basket = ({open, closeCart}: BasketPropsType) => {
    const {totalPrice} = useAppSelector(selectorBasket)
    const {items} = useAppSelector(selectorBasket)
    const isMounted = React.useRef(false);

    React.useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(items);
            localStorage.setItem('sneakers', json);
        }
        isMounted.current = true;
    }, [items]);
    return (<>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={closeCart}
            >
                <List className={s.list} >
                    <ListItem>
                        <ListItemIcon>
                            <ShoppingBasket/>
                        </ListItemIcon>
                        <ListItemText primary={'Корзина'}/>
                    </ListItem>
                    <Divider/>
                    {
                        !items.length ? (
                                <ListItem>Корзина пуста!</ListItem>)
                            : (
                                <>
                                    {items.map((el: any) => (
                                        <BasketItem key={el.id} {...el}/>
                                    ))}
                                    <Divider/>
                                    <ListItem>
                                        <Typography sx={{fontWeight: 700}}>
                                            Общая стоимость:{totalPrice}$
                                        </Typography>
                                    </ListItem>
                                </>
                            )}
                </List>
            </Drawer>
        </>
    );
};
