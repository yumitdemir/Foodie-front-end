import React from 'react';
import Nav from "./components/nav/nav.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import {Routes, Route, createBrowserRouter, Navigate, RouterProvider, BrowserRouter, Router} from "react-router-dom";
import SearchList from "./pages/SearchList/SearchList.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Details from "./pages/Details/Details.jsx";

function App(props) {


    const queryClient = new QueryClient();
    return (


        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Navigate to="/Home" replace/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/search" element={<SearchList/>}/>
                    <Route path="/details/:id" element={<Details/>}/>
                </Routes>
                <Footer/>
            </QueryClientProvider>
        </BrowserRouter>


    );
}

export default App;