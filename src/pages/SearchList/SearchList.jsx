import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";


async function fetchRecipes(pantry, order, input) {
    const apiKey = '49a32b520f314d1294660ea61e7ff18e';
    input = input.split(" ").join(",+");
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&number=${5}&apiKey=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch recipes');
    }
    return response.json();
}

function SearchList(props) {
    const {pantry, order, input} = useParams();

    const recipes = useQuery(
        [`recipies`],
        () => fetchRecipes(pantry, order, input)
    )
    console.log(recipes.data)
    return (
        <div>{pantry + order + input}

        </div>
    );
}

export default SearchList;