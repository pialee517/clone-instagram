import React from 'react'
import Layout from './feature/components/Layout'
import Viewing from './feature/pages/Viewing'
import Login from './feature/pages/Login'
import { createBrowserRouter, createRoutesFromElements,Route } from "react-router-dom";
import Explore from './feature/pages/Explore';


const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Layout />}>
            <Route index element={<Viewing />} />
            <Route path='home' element={<Viewing />} />
            <Route path='profile' element={<Viewing />} />
            <Route path='explore' element={<Explore />} />
            <Route path='*' element={<Viewing/>} />
        </Route>
    </Route>
    )
)

export default router

