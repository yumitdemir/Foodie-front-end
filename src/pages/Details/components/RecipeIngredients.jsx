import React from 'react';
import Ingredient from "./Ingredient.jsx";
import DetailsTitle from "./ui/DetailsTitle.jsx";

function RecipeIngredients(props) {
    return (
        <div className={"mt-5"}>
            <DetailsTitle title={"What you’ll need"}/>
            <div className={"overflow-x-auto flex gap-3"}>
                <Ingredient/>
                <Ingredient/>
                <Ingredient/>
                <Ingredient/>
            </div>
            <DetailsTitle title={"Ingredients"}/>
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