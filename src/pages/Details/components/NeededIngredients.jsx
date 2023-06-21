import React from 'react';
import DetailsTitle from "./ui/DetailsTitle.jsx";
import Ingredient from "./Ingredient.jsx";

function NeededIngredients(props) {
    return (
        <div>
            <DetailsTitle title={"What you’ll need"}/>
            <div className={"overflow-x-auto flex gap-3"}>
                <Ingredient/>
                <Ingredient/>
                <Ingredient/>
                <Ingredient/>
            </div>
        </div>
    );
}

export default NeededIngredients;