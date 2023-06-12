import React from 'react';
import response from "/public/response.json"
import {CiCircleChevDown} from "react-icons/ci";
import {useNavigate} from "react-router-dom";

const clickHandler = (navigate,id) => {
    navigate("/details/id")
};

function RecipeItem({recipe}) {
    const navigate = useNavigate();
    return (
        <div onClick={() => {
            clickHandler(navigate,)
        }}
            className={"w-full flex flex-col  px-8 py-6 rounded-lg  hover:bg-green-400 hover:bg-opacity-20 cursor-pointer shadow-xl shadow-green-100 "}>
            <div className={"flex justify-between items-center  mb-6"}>
                <p className={"text-3xl font-thin  text-title-black border-s-[3px] ps-1 border-green-600 "}>{recipe.title}</p>
                <div className={"rounded-full border border-green-600 p-4 flex flex-col justify-center items-center"}>
                    <p className={"text-[7px]"}>ingredients</p>
                    <p className={"text-lg"}>{recipe.usedIngredientCount}/{parseInt(recipe.usedIngredientCount)+parseInt(recipe.missedIngredientCount)}</p>
                </div>
            </div>
            <div className={"grid  md:grid-cols-[minmax(312px,1fr)_4fr] gap-3"}>
                <div>
                    <img src={recipe.image} className={"rounded"} alt=""/>
                </div>
                <div>
                    <div>
                        <p className={"flex items-center font-bold text-title-black"}>Used Ingredients <span className={"ps-1"}><CiCircleChevDown/></span></p>
                        <div className={"flex gap-1 flex-wrap overflow-y-auto h-[5rem]"}>
                            <ul>
                                {recipe.usedIngredients.map((ingredient,index) =>{
                                    return <li key={ingredient+index} className={" border-s-2 ps-1 border-green-600"}>
                                        <p>{ingredient.original}</p>
                                    </li>
                                }) }
                            </ul>

                        </div>
                    </div>
                    <div>
                        <p className={"flex items-center font-bold text-title-black"}>Missed Ingredients <span className={"ps-1"}><CiCircleChevDown/></span></p>
                        <div className={"flex gap-1 overflow-x-scroll md:flex-wrap md:overflow-x-hidden"}>
                            <ul>
                            {recipe.missedIngredients.map((ingredient,index) =>{
                                return <li key={ingredient+index} className={" border-s-2 ps-1 border-red-600"}>
                                    <p>{ingredient.original}</p>
                                </li>
                            }) }
                            </ul>



                        </div>
                    </div>
                </div>

            </div>
        </div>
);
}

export default RecipeItem;