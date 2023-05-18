import React, {Suspense} from "react";
import {CircularProgress} from "@mui/material";
import s from "../lazyLoading/Load.module.css";

export const withSuspense = (Component:any) => {

    return <Suspense fallback={<div className={s.load}>
        <CircularProgress/>
        </div>}>
            <Component />
        </Suspense>

}