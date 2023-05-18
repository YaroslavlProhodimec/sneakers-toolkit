import React from 'react';
import {Alert, Snackbar} from "@mui/material";


type TypeSnackProps = {
    isOpen: boolean
    onClose: () => void
}
export const Snack = ({isOpen, onClose}: TypeSnackProps) => {

    return (
        <Snackbar open={isOpen} onClose={onClose}
                  autoHideDuration={3000}
        >
            <Alert severity={'success'}>
                Товар добавлен в корзину!
            </Alert>
        </Snackbar>
    );
};

