import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {SneakerItem} from "../basket/types";



export const fetchSneakers = createAsyncThunk<SneakerItem[], Record<string, string>>(
    'pizza/fetchPizzasStatus',
    async (params:Record<string, string> ) => {
        const { sortBy, order, category, search, currentPage } = params;
        const { data } = await axios.get<SneakerItem[]>(`https://64542d14c18adbbdfeb0f6bc.mockapi.io/items`
            ,{
            params:
                {
                    page: currentPage,
                    limit: 4,
                    sortBy,
                    order,
                    search,
                },


        }
        );

        return data as SneakerItem[]
    },
);