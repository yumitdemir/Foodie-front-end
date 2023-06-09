import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import SearchBar from "./components/SearchBar.jsx";
import RecipeList from "./components/RecipeList.jsx";


async function fetchRecipes(pantry, order, input) {
    const apiKey = '49a32b520f314d1294660ea61e7ff18e';
    let inputArray = input.split(" ").join(",+");
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&number=${5}&apiKey=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch recipes');
    }
    return response.json();
}

function SearchList(props) {
    const {pantry, order, input} = useParams();
    let inputArray = input.split(" ");

    const recipes = useQuery(
        [`recipies`],
        () => fetchRecipes(pantry, order, input)
    )

    return (
        <div className={"mx-10"}>
            <div className={"grid grid-cols-1 lg:grid-cols-[1.5fr,5fr] h-50 mt-5 w-full break-words"}>
                <SearchBar inputArray={inputArray} order={order} input={input} pantry={pantry}/>
                <RecipeList/>
            </div>
        </div>
    );
}

export default SearchList;

