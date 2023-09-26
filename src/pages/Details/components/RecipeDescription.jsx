import React from 'react';
import {useQuery} from "@tanstack/react-query";

function RecipeDescription(props) {
    const {isLoading, data: recipe} = useQuery(["getRecipe"])

    return (
        <div >
            <p className={"text-lg text-paragraph-black font-dmSans "}>{recipe.description}</p>
        </div>
    );
}

export default RecipeDescription;