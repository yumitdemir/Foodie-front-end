import React from 'react';
import RecipeIngredients from "./RecipeIngredients.jsx";
import DetailsTitle from "./ui/DetailsTitle.jsx";

function RecipePreperation(props) {
    return (
        <div>
            <RecipeIngredients/>

            <DetailsTitle title={"Steps"}/>
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

export default RecipePreperation;