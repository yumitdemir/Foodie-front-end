import React from 'react';
import Ingredient from "./Ingredient.jsx";
import DetailsTitle from "./ui/DetailsTitle.jsx";
import AllIngredients from "./AllIngredients.jsx";
import NeededIngredients from "./NeededIngredients.jsx";
import {useQuery} from "@tanstack/react-query";
import ingredientCard from "../../../components/IngredientCard.jsx";
import IngredientCard from "../../../components/IngredientCard.jsx";
import {nanoid} from "nanoid";

function RecipeIngredients(props) {
    const {isLoading, data: recipe} = useQuery(["getRecipe"])
    return (
        <div>
            <DetailsTitle title={"Ingredients"}/>
            <div className={"mt-5 flex gap-3 overflow-x-auto"}>
                {recipe.ingredients.map(ingredeient => <IngredientCard key={nanoid()} imgClass={"w-24 h-24"}
                                                                       ingredient={ingredeient}/>)}
            </div>
        </div>

    );
}

export default RecipeIngredients;