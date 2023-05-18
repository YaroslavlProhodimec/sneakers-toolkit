import React, {useCallback, useEffect, useState} from 'react';
import {Header} from "./header/Header";
import {Container} from "@mui/material";
import {Main} from "./main/Main";
import s from "./Base.module.css";
import styleSelect from "./main/category/sort/Sort.module.css";
import {Basket} from "./main/basket/Basket";
import {Snack} from "./footer/snack/Snack";
import {Navigate, useSearchParams} from "react-router-dom";
import {SortSelect,} from "./main/category/sort/SortSelect";
import Box from '@mui/material/Box';
import {Skeleton} from "./skeleton/Skeleton";
import {SuperPagination} from "./footer/pagination/Pagination";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {setSearchValue} from "../redux/filter/filterSlice";
import {selectFilter} from "../redux/filter/selectors";
import {fetchSneakers} from "../redux/sneakers/asyncActions";
import {selectSneakers} from "../redux/sneakers/selectors";
import {selectLogin} from "../redux/login/selectors";



const BaseContainer = () => {

    const {items,isLoading} = useAppSelector(selectSneakers)
    const login = useAppSelector(selectLogin)
    const { categoryId, sort, currentPage,searchValue } = useAppSelector(selectFilter)
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()

    const openBasket =  useCallback( ()=> setOpen(true),[])
    const closeBasket = useCallback(() => setOpen(false),[])
    const alertNoticeFalse = useCallback(() => setAlert(false),[])
    const alertNoticeTrue = useCallback(() => setAlert(true),[])

    const onChangeText  = useCallback( (value: string) => {
        const findQuery: { find?: string } = value ? {find: value} : {}
        const {find, ...lastQueries} = Object.fromEntries(searchParams)
        setSearchParams({...lastQueries, ...findQuery})
    },[])
    const getPizzas = async () => {
        const sortBy = sort.sortProperty
        const order = sort.sortProperty
        const params = Object.fromEntries(searchParams)
        dispatch(setSearchValue(params.find || ''))
        dispatch(
            fetchSneakers({
                sortBy,
                order,
                currentPage:String(currentPage),
                searchValue,}),
        );
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        getPizzas();

    }, [categoryId, sort, currentPage]);

    if(!login) {
    return <Navigate to={'/login'}/>
}
    return (
        <div className={s.baseContainer}>
            <Header searchValue={searchValue} sentValue={onChangeText}
                    openBasket={openBasket}/>
            <SortSelect className={styleSelect.select}/>
            <Container sx={{mt: '1rem',}}>
                <main className={s.mainContainer}>
                    {isLoading === 'loading' ?
                        [...new Array(4)].map((_, index) =>
                            <Box key={index} sx={{m: '6px'}}>
                                <Skeleton />
                            </Box>)
                        :
                        items.filter((el: {
                            name: string; }) => el.name.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((el:any) =>
                                <Box key={el.id} sx={{m: '6px'}}>
                                    <Main setAlert={alertNoticeTrue}  {...el}/>
                                </Box>)}
                </main>
                <SuperPagination/>
            </Container>
            <Basket  open={open} closeCart={closeBasket}/>
            <Snack onClose={alertNoticeFalse} isOpen={alert}/>

        </div>
    );
};

export default BaseContainer;