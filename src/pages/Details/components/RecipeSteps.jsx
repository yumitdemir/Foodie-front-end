import React from 'react';
import RecipeIngredients from "./RecipeIngredients.jsx";

function RecipeSteps(props) {
    return (
        <div>
            <RecipeIngredients/>
            <h2 className={"text-3xl font-bold text-title-black border-b-4 border-green-600 pb-4 mt-5"}>Steps</h2>
            <div>
                <p className={"text-lg font-bold "}>Step 1</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet in ipsam minima tempora temporibus ut. Nisi non provident quidem voluptatibus!</p>
            </div>
            <div>
                <p className={"text-lg font-bold "}>Step 1</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet in ipsam minima tempora temporibus ut. Nisi non provident quidem voluptatibus!</p>
            </div> <div>
            <p className={"text-lg font-bold "}>Step 1</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet in ipsam minima tempora temporibus ut. Nisi non provident quidem voluptatibus!</p>
        </div>
            <div>
                <p className={"text-lg font-bold "}>Step 1</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet in ipsam minima tempora temporibus ut. Nisi non provident quidem voluptatibus!</p>
            </div>
            <div>
                <p className={"text-lg font-bold "}>Step 1</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet in ipsam minima tempora temporibus ut. Nisi non provident quidem voluptatibus!</p>
            </div>


        </div>
    );
}

export default RecipeSteps;