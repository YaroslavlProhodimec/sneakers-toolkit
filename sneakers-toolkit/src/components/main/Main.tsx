import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import s from '../main/Main.module.css';
import {ImageButtonCard} from "./imageButtonCard/ImageButtonCard";
import {Button} from "@mui/material";
import {addItem} from "../../redux/basket/basketSlice";
import {useAppDispatch} from "../../redux/store";
import {NavLink} from "react-router-dom";
import {SneakerItem} from "../../redux/basket/types";


type PropsMainType = {
    id: string
    image?: any
    name: string
    style: string
    price: number
    quantity?: number
    setAlert: () => void
}

export const  Main= React.memo(({id, image, price, name, setAlert}: PropsMainType) => {
    const dispatch = useAppDispatch()
    const buttonClick = () => {
        const item: SneakerItem = {
            quantity: 0,
            id,
            name,
            price,
            image
        }
        dispatch(addItem(item))
        setAlert()
    }
    return (
        <Card sx={{
            maxWidth: 345,
            background: 'linear-gradient(89.9deg, rgb(208, 246, 255) 0.1%, rgb(255, 237, 237) 47.9%, rgb(255, 255, 231) 100.2%)'
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: 'skyBlue',}}>БТ</Avatar>}/>
            <NavLink to={`/sneakers/${id}`} style={{textDecoration: 'none'}}>
                <ImageButtonCard id={id}  image={image}/></NavLink>
            <CardContent>
                <span className={s.name}>
                    {name}
                </span>
            </CardContent>
            <CardActions disableSpacing>
                <Button onClick={buttonClick} variant={'outlined'} sx={{
                    border: '1px solid pink',
                    background: 'linear-gradient(89.9deg, rgb(208, 246, 255) 0.1%, rgb(255, 237, 237) 47.9%, rgb(255, 255, 231) 100.2%)'
                }}>
                    Купить
                </Button>
                <span className={s.price}>{price}$</span>
            </CardActions>
        </Card>
    );
})