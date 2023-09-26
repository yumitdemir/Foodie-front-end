import React from 'react';
import DetailsTitle from "./ui/DetailsTitle.jsx";
import {useQuery} from "@tanstack/react-query";
import RecipeStep from "../RecipeStep.jsx";
import {nanoid} from "nanoid";

function RecipeSteps(props) {
    const {isLoading, data: recipe} = useQuery(["getRecipe"])

    return (
        <div>
            <DetailsTitle title={"Steps"}/>
            {recipe.steps.map(step => <RecipeStep key={nanoid()} step={step}/>)}
        </div>
    );
}

export default RecipeSteps;