import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import BaseContainer from "./components/BaseContainer";
import {Login, NotFound, Sneakers} from "./lazyLoading/lazy";
import {withSuspense} from "./utilits/withSuspense";


function App() {
  return (
    <div className={"App"}>
        <Routes>
            <Route path="/" element={<BaseContainer/>} />
            <Route path="/login" element={
                withSuspense(Login)
            } />
            <Route path="/sneakers/:id" element={
                withSuspense(Sneakers)
               } />
            <Route path="*" element={
                withSuspense(NotFound)} />
        </Routes>
    </div>
  );
}

export default App;
