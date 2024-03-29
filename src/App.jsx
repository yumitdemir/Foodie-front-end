import React from 'react';
import Nav from "./components/nav/nav.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import {Routes, Route, createBrowserRouter, Navigate, RouterProvider, BrowserRouter, Router} from "react-router-dom";
import RecipeSearch from "./pages/SearchList/RecipeSearch.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Details from "./pages/Details/Details.jsx";
import AddIngredient from "./pages/admin/AddIngredient.jsx";

function App(props) {


    const queryClient = new QueryClient();
    return (


        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Navigate to="/Home" replace/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/search" element={<RecipeSearch/>}/>
                    <Route path="/details/:id" element={<Details/>}/>
                    <Route path="/admin/add-ingredient" element={<AddIngredient/>}/>
                </Routes>
                <Footer/>
            </QueryClientProvider>
        </BrowserRouter>


    );
}

export default App;