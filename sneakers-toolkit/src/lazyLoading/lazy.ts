import React from "react";

export const Login = React.lazy(()=>import(/* webpackChunkName:"Login"*/'../components/pages/login/Login')
    .then(({ Login }) => ({ default: Login })),)
export const Sneakers = React.lazy(()=>import(/* webpackChunkName:"Sneakers"*/'../components/pages/sneakers/Sneakers')
    .then(({ Sneakers }) => ({ default: Sneakers })),)
export const NotFound = React.lazy(()=>import(/* webpackChunkName:"NotFound"*/'../components/pages/notFound404/NotFound')
    .then(({ NotFound }) => ({ default: NotFound })),)
