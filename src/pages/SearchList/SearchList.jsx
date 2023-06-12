import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import SearchBar from "./components/SearchBar.jsx";
import RecipeList from "./components/RecipeList.jsx";
import {Container} from "postcss";
import PageContainer from "../../components/Container/PageContainer.jsx";
import LoadingSpinner from "../../components/loadingspinner/LoadingSpinner.jsx";


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

    const recipes = useQuery([`recipies`], () => fetchRecipes(pantry, order, input))
    console.log(recipes.isLoading)
    return (<PageContainer>


        <div className={"grid grid-cols-1 lg:grid-cols-[1.5fr,5fr] h-50 mt-5 w-full break-words"}>
            <SearchBar inputArray={inputArray} order={order} input={input} pantry={pantry}/>
            {recipes.isLoading &&
                <div className={"flex justify-center items-center"}>
                    <LoadingSpinner width={52} height={52} boldness={8} />
                </div>}
            {recipes.isSuccess && <RecipeList recipes={recipes}/>}
            {recipes.error != null? <p className={"text-center text-3xl text-red-600"}>Reached to the api call limitation. Please check the website tomorrow.</p>:""}

        </div>
    </PageContainer>);
}

export default SearchList;

