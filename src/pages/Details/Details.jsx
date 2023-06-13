import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";

async function fetchInstructions(id){

    const url = `https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=49a32b520f314d1294660ea61e7ff18e`
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
    console.log(details.data)
    return (
        <div>

        </div>
    );
}

export default Details;