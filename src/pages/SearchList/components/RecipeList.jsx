import React from 'react';
import RecipeItem from "./RecipeItem.jsx";
import recipieslist from "/public/response.json"

function RecipeList({recipes}) {
    return (
        <div className={"flex flex-col w-full items-center bg-gray-100 py-8 px-6 rounded-xl"}>

            {recipes.map((item, index) => {
                return <RecipeItem key={item + index} recipe={item}/>
            })}
        </div>
    );
}

export default RecipeList;