import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {BsBookmarkPlus} from "react-icons/bs";
import RecipeHeader from "./components/RecipeHeader.jsx";
import RecipeDescription from "./components/RecipeDescription.jsx";
import RecipePreperation from "./components/RecipePreperation.jsx";
import CommentSection from "./components/CommentSection.jsx";
import api from "../../Api.js";


function Details(props) {
    const {id} = useParams();

    const {isLoading, data} = useQuery({
        queryKey: ["getRecipe"],
        queryFn: () => {
            return api(`Recipes/GetRecipeDetails?id=` + id)
                .then(response => {
                    console.log(response);
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    return data;
                })
        }
    })
    if (isLoading) {
        return <div className={"w-full h-screen flex justify-center items-center"}>
            <span className={"loading-lg loading-spinner loading"}></span>
        </div>
    }

    return (
        <div>
            <RecipeHeader/>
            <div className={"px-32 mt-16"}>
                <RecipeDescription/>
                <RecipePreperation/>
                <CommentSection/>
            </div>
        </div>
    );
}

export default Details;