import React, {useRef} from 'react';
import RecipeItem from "./components/RecipeItem.jsx";
import {useQuery} from "@tanstack/react-query";
import api from "../../Api.js";
import {useSearchParams} from "react-router-dom";
import {nanoid} from "nanoid";

function RecipesList(props) {
    const [searchParams, setSearchParams] = useSearchParams();

    const {isLoading, data} = useQuery({
        queryKey: ["getttttt"],
        queryFn: () => {
            return api(`Recipes/searchRecipes?` + searchParams.toString())
                .then(response => {
                    console.log(response)
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    return data;
                })
        }
    })
    console.log(data)

    if (isLoading) {
        return <div className={"w-full h-full flex justify-center items-center"}>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div className={"flex flex-col gap-3 w-full "}>
            {data.map(recipe => <RecipeItem key={nanoid()} recipe={recipe}/>)}
        </div>
    );
}

export default RecipesList;