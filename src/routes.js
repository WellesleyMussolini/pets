import React, { useState } from 'react';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Router from "./constants/routes";
import Pet from './pages/pet-details/Pet';
import NotFound from './components/not-found/NotFound';
import Header from './layout/header/Header';

const Routers = () => {
    const [search, setSearch] = useState("");
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={Router.HOME} element={
                    <>
                        <Header handleSearch={(event) => setSearch(event.target.value)} />
                        <Home />
                    </>
                } />
                <Route path={Router.PET} element={
                    <>
                        <Header handleSearch={(event) => setSearch(event.target.value)} />
                        <Pet />
                    </>
                } />
                <Route path={Router.NOT_FOUND} element={
                    <>
                        <Header />
                        <NotFound />
                    </>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;