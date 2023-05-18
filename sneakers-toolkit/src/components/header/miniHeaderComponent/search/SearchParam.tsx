import React, {KeyboardEvent, useState} from 'react';
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {Box} from '@mui/material';
import s from './SearchParam.module.css'
import {setSearchValue} from "../../../../redux/filter/filterSlice";
import {useDispatch} from "react-redux";


type PropsSearchType = {
    menuId: string
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
    searchValue: string
    sentValue: (value: string) => void
}

export const SearchParam = ({
                                menuId,
                                handleProfileMenuOpen,

                                sentValue
                            }: PropsSearchType) => {


    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    const dispatch = useDispatch();
    const [value, setValue] = React.useState<string>('');
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onClickClear = () => {
        sentValue('')
        setValue('');
        inputRef.current?.focus();
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        timerId && clearTimeout(timerId)
        const id = +setTimeout(() => {
            dispatch(setSearchValue(value))
            setTimerId(undefined)
        }, 1500)
        setTimerId(id)


    };
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {

        if (e.key === 'Enter') {
            dispatch(setSearchValue(value))
            sentValue(value)
        }
    }

    return (
        <>
            <Box sx={{flexGrow: 1}}/>
            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                <div>
                    <div className={s.root}>
                        <svg className={s.icon} data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg"><title/>
                            <path
                                d="M16.57,16.15A9,9,0,1,0,15,17.46h0l6.25,6.25,1.42-1.42Zm-3-.14a7.07,7.07,0,1,1,1.56-1.28A6.88,6.88,0,0,1,13.59,16Z"/>
                        </svg>
                        <input
                            onKeyPress={onKeyPressCallback}
                            onChange={onChangeInput}
                            ref={inputRef}
                            value={value}
                            className={s.search} name={'search'} type={"search"} placeholder={'Поиск кроссовок'}/>
                        {value &&
                            <svg onClick={onClickClear} className={s.clearIcon} fill="none"
                                 height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
                                    fill="currentColor"/>
                                <path clipRule="evenodd"
                                      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                                      fill="currentColor" fillRule="evenodd"/>
                            </svg>
                        }                </div>
                </div>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>

            </Box>
        </>
    )
};

