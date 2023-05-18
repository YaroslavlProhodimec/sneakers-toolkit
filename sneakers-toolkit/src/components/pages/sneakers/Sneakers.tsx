import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import s from './Sneakers.module.css'
import {Sneaker} from "./sneaker/Sneaker";
import {CircularProgress} from "@mui/material";

export const Sneakers = () => {
   const [sneaker,setSneaker] = useState<any>([])
   const navigate =  useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        async function fetchSneaker() {
            try {
                const {data} = await  axios.get('https://64542d14c18adbbdfeb0f6bc.mockapi.io/items/' + id)
                setSneaker(data)
            } catch (error){
                 alert('Не существует')
                navigate('/')
            }
        }
        fetchSneaker()
    },[])

    if(!sneaker){
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }
    return (
        <div className={s.sneakers}>

           < Sneaker id={id} sneaker={sneaker} />

        </div>
    );
};

