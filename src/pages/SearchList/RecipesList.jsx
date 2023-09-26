import React, { useEffect } from 'react';
import RecipeItem from "./components/RecipeItem.jsx";
import {nanoid} from "nanoid";
import {useQuery} from "@tanstack/react-query";
import {useSearchParams} from "react-router-dom";
import api from "../../Api.js";

function RecipesList(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const { isLoading, data, refetch } = useQuery({
        queryKey: ["getRecipes"],
        queryFn: () => {
            return api(`Recipes/searchRecipes?` + searchParams.toString())
                .then(response => {
                    console.log(response);
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    return data;
                });
        }
    });

    useEffect(() => {
        refetch();
    }, []);

    if (isLoading) {
        return <div className={"w-full h-full flex justify-center items-center"}>
            <span className="loading loading-spinner loading-lg"></span>
        </div>;
    }

    return (
        <div className={"flex flex-col gap-3 w-full "}>
            {data?.map(recipe => (
                <RecipeItem key={nanoid()} recipe={recipe} />
            ))}
        </div>
    );
}

export default RecipesList;
