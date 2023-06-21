import React from 'react';
import RecipeIngredients from "./RecipeIngredients.jsx";
import DetailsTitle from "./ui/DetailsTitle.jsx";
import RecipeSteps from "./RecipeSteps.jsx";

function RecipePreperation(props) {
    return (
        <div>
            <RecipeIngredients/>
            <RecipeSteps/>
        </div>
    );
}

export default RecipePreperation;