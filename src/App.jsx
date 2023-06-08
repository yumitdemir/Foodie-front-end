import React from 'react';
import Nav from "./components/nav/nav.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import SearchList from "./pages/SearchList/SearchList.jsx";

function App(props) {
    const router = createBrowserRouter([
        {path: "/", element: <Navigate to="/Home" replace/>},
        {path: "/Home", element: <Home/> },
        {path: "/search/:pantry/:order/:input", element: <SearchList/> },
    ])
    return (
        <>
                <Nav/>
                <RouterProvider router={router}/>
                <Footer/>
        </>
    );
}

export default App;