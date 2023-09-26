import React from 'react';
import {CiCircleChevDown} from "react-icons/ci";
import {useNavigate} from "react-router-dom";
import IngredientCard from "../../../components/IngredientCard.jsx";
import {nanoid} from "nanoid";
import {useFormContext} from "react-hook-form";

function RecipeItem({recipe}) {
    const navigate = useNavigate();
    const {watch} = useFormContext();
    let selectedIngredients = watch("ingredients");
    let getMissingIngredientCount = () => {
        if (recipe.ingredients.length === 0 || recipe.ingredients === null) {
            return undefined;
        }

        return recipe.ingredients.filter(ingredient => selectedIngredients.some(i => i.value === ingredient.id)).length;
    }
    const onClickHandler = () => {


        navigate(`/details/${recipe.id}`);
    };

    return (
        <div onClick={onClickHandler}
             className={"bg-base-100  hover:bg-green-400 hover:bg-opacity-20 shadow-xl shadow-green-100  px-8 py-6 cursor-pointer rounded-md"}>
            <div className={"flex justify-between items-center  "}>
                <p className={"text-3xl font-thin  text-title-black border-s-[3px] ps-1 border-green-600 "}>{recipe.title}</p>
                <div
                    className={"rounded-full border border-green-600 p-4 flex flex-col justify-center items-center"}>
                    <p className={"text-[7px]"}>Ingredients</p>
                    <p className={"text-lg"}>{getMissingIngredientCount()}/{recipe.ingredients.length}</p>
                </div>
            </div>
            <div
                className="card sm:card-side max-h-[600px] ">
                <figure><img src={recipe.thumbnailImage.filePath} className={"rounded-xl h-80 w-80"}
                             alt=""/>
                </figure>
                <div className="card-body w-fit flex flex-col">
                    <div>
                        <p>{recipe.description}</p>
                    </div>


                    <div className="collapse bg-green-400  border border-base-300 collapse-arrow">
                        <input type="checkbox" defaultChecked/>
                        <div className="collapse-title  font-medium text-white">
                            <p className={"flex items-center"}>Used Ingredients </p>
                        </div>
                        <div className="collapse-content flex cursor-auto overflow-x-auto gap-3">
                            {recipe.ingredients.map(ingredient => {
                                if (selectedIngredients.some(i => i.value === ingredient.id)) {
                                    return <IngredientCard ingredient={ingredient} key={nanoid()}/>
                                }
                            })}
                        </div>
                    </div>
                    {getMissingIngredientCount() !== 0 ?
                        <div className="collapse bg-red-400  border border-base-300 collapse-arrow">
                            <input type="checkbox" defaultChecked/>
                            <div className="collapse-title font-medium text-white">
                                <p className={"flex items-center"}>Missed Ingredients</p>
                            </div>
                            <div className="collapse-content cursor-auto flex overflow-x-auto gap-3 ">
                                {recipe.ingredients.map(ingredient => {
                                    if (selectedIngredients.some(i => i.value !== ingredient.id)) {
                                        return <IngredientCard ingredient={ingredient} key={nanoid()}/>
                                    }
                                })}
                            </div>
                        </div> : undefined
                    }


                </div>
            </div>
        </div>
    );
}

export default RecipeItem;