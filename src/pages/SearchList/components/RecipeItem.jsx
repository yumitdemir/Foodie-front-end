import React, {useCallback, useEffect, useState} from 'react';
import {CiCircleChevDown} from "react-icons/ci";
import {useNavigate} from "react-router-dom";
import IngredientCard from "../../../components/IngredientCard.jsx";
import {nanoid} from "nanoid";
import {useFormContext} from "react-hook-form";

function RecipeItem({recipe}) {
    const navigate = useNavigate();
    const {getValues} = useFormContext();
    const [selectedIngredients, setSelectedIngredients] = useState(getValues("ingredients"));

    console.log(selectedIngredients)
    let getMissingIngredientCount = () => {
        if (!recipe.ingredients || !selectedIngredients) {
            return undefined;
        }

        // Ensure selectedIngredients is an array before using the loop
        if (!Array.isArray(selectedIngredients)) {
            return 0;
        }

        let count = 0;
        for (const ingredient of recipe.ingredients) {
            for (const selectedIngredient of selectedIngredients) {
                if (selectedIngredient.value === ingredient.id) {
                    count++;
                    break; // Exit the inner loop once a match is found
                }
            }
        }

        return count;
    };



    console.log(getMissingIngredientCount())
    const onClickHandler = () => {


        navigate(`/details/${recipe.id}`);
    };

    return (
        <div
            className={"bg-base-100  hover:bg-green-400 hover:bg-opacity-20 shadow-xl shadow-green-100  px-8 py-6 cursor-pointer rounded-md"}>
            <div onClick={onClickHandler} className={"flex justify-between items-center  "}>
                <p className={"text-3xl font-thin  text-title-black border-s-[3px] ps-1 border-green-600 "}>{recipe.title}</p>
                <div
                    className={"rounded-full border border-green-600 p-4 flex flex-col justify-center items-center"}>
                    <p className={"text-[7px]"}>Ingredients</p>
                    <p className={"text-lg"}>{getMissingIngredientCount()}/{recipe.ingredients.length}</p>
                </div>
            </div>
            <div
                className="card sm:card-side max-h-[600px] ">
                <figure><img onClick={onClickHandler} src={recipe.thumbnailImage.filePath}
                             className={"rounded-xl h-80 w-80"}
                             alt=""/>
                </figure>
                <div className="card-body w-fit flex flex-col">
                    <div className={" w-full max-w-xl h-20 flex-wrap "}>
                        <p className={"line-clamp-3"}>{recipe.description}</p>
                    </div>


                    <div className="collapse bg-green-400  border border-base-300 collapse-arrow">
                        <input type="checkbox" defaultChecked/>
                        <div className="collapse-title  font-medium text-white">
                            <p className={"flex items-center"}>Used Ingredients </p>
                        </div>
                        <div className="collapse-content flex cursor-auto overflow-x-auto gap-3">
                            {recipe.ingredients.map(ingredient => {
                                if (selectedIngredients && selectedIngredients.some(i => i.value === ingredient.id)) {
                                    return <IngredientCard ingredient={ingredient} key={nanoid()}/>;
                                } else {
                                    return null; // or any other suitable fallback
                                }
                            })}

                        </div>
                    </div>
                    {getMissingIngredientCount() != 0 ?
                        <div className="collapse bg-red-400  border border-base-300 collapse-arrow">
                            <input type="checkbox" defaultChecked/>
                            <div className="collapse-title font-medium text-white">
                                <p className={"flex items-center"}>Missed Ingredients</p>
                            </div>
                            <div className="collapse-content cursor-auto flex overflow-x-auto gap-3 ">
                                {recipe.ingredients
                                    .filter(ingredient => !selectedIngredients.some(selected => selected.value === ingredient.id))
                                    .map(ingredient => (
                                        <IngredientCard ingredient={ingredient} key={nanoid()}/>
                                    ))
                                }


                            </div>
                        </div> : undefined
                    }


                </div>
            </div>
        </div>
    );
}

export default RecipeItem;