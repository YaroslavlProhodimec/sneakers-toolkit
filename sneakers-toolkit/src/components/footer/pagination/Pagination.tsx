import React, { ChangeEvent } from 'react';
import {Pagination, PaginationItem} from '@mui/material'
import s from './Pagination.module.css';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import { setCurrentPage } from '../../../redux/filter/filterSlice';
import {selectFilter} from "../../../redux/filter/selectors";

export const SuperPagination = () => {
    const {currentPage} = useAppSelector(selectFilter)
    const dispatch = useAppDispatch()

    const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
        dispatch(setCurrentPage(page))
    }
    return (
        <div className={s.pagination}>
            <Pagination
                count={3}
                color="primary"
                size="large"
                page={currentPage}
                onChange={onChangeCallback}
                renderItem={item => (
                    <PaginationItem
                        components={{ previous:ArrowBack, next: ArrowForward  }}
                        {...item}
                    />
                )}
            />
            </div>
    );
};

