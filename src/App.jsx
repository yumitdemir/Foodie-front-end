import React from 'react';
import Nav from "./components/nav/nav.jsx";
import Index from "./pages/Home/Index.jsx";
import Footer from "./components/footer/Footer.jsx";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";

function App(props) {
    const router = createBrowserRouter([
        {path: "/", element: <Navigate to="/Home" replace/>},
        {path: "/Home", element: <Index/> },
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