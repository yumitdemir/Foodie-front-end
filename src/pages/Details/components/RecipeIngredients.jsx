import React from 'react';
import Ingredient from "./Ingredient.jsx";

function RecipeIngredients(props) {
    return (
        <div className={"mt-5"}>
            <h2 className={"text-3xl font-bold text-title-black border-b-4 border-green-600 pb-4 "}>What you’ll need</h2>
            <div className={"overflow-x-auto flex gap-3"}>
                <Ingredient/>
                <Ingredient/>
                <Ingredient/>
                <Ingredient/>
            </div>
            <h2 className={"text-3xl font-bold text-title-black border-b-4 border-green-600 pb-4 mt-5"}>Ingredients</h2>
            <div className={"overflow-x-auto flex gap-3"}>
                <ul>
                    <li>dsadas</li>
                    <li>1kg. sdaasd</li>
                    <li>5xdasads</li>
                    <li>adsasd</li>
                    <li>dasasd</li>
                    <li>2xdasads</li>
                </ul>
            </div>
        </div>
    );
}

export default RecipeIngredients;