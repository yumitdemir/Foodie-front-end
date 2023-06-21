import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {BsBookmarkPlus} from "react-icons/bs";
import RecipeHeader from "./components/RecipeHeader.jsx";
import RecipeDescription from "./components/RecipeDescription.jsx";
import RecipePreperation from "./components/RecipePreperation.jsx";
import CommentSection from "./components/CommentSection.jsx";

async function fetchInstructions(id) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch recipes');
    }

    return response.json();
}


async function fetchDetails(id) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch recipes');
    }
    return response.json();
}


function Details(props) {
    const {id} = useParams();
    const details = useQuery([`details`], () => fetchDetails(id))
    const instructions = useQuery([`instructions`], () => fetchInstructions(id))
    console.log(details.data)
    console.log(instructions.data)
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