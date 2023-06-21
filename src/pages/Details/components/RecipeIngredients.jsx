import React from 'react';
import Ingredient from "./Ingredient.jsx";
import DetailsTitle from "./ui/DetailsTitle.jsx";
import AllIngredients from "./AllIngredients.jsx";
import NeededIngredients from "./NeededIngredients.jsx";

function RecipeIngredients(props) {
    return (
        <div className={"mt-5"}>
            <NeededIngredients/>
           <AllIngredients/>
        </div>
    );
}

export default RecipeIngredients;