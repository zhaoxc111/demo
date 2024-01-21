import React from 'react';
import { useRoutes } from "react-router-dom"
import Home from "../pages/home/index"
import Login from "../pages/login/index"

function routes () {
    const element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
    ])
    return element
}

export default routes