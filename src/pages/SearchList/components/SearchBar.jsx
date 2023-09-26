import React from 'react';
import SelectedIngredients from "./SelectedIngredients.jsx";
import OrderRecipes from "../../../components/inputfields/OrderRecipes.jsx";
import PantryInput from "../../../components/inputfields/PantryInput.jsx";
import {IoMdAddCircleOutline} from "react-icons/io";

function SearchBar(props) {
    return (
        <div className="flex flex-col w-full h-fit bg-green-500 rounded-xl py-5 px-4 overflow-hidden gap-3 lg:sticky top-5">
            <p className={"text-lg font-thin  text-title-black"}>Add new ingredients</p>
            <div className={"flex gap-1 items-center"}>
                <input type="text" className={"rounded w-full px-3 py-1"}/>
                <p className={"text-3xl text-white cursor-pointer hover:text-opacity-80"}><IoMdAddCircleOutline/></p>
            </div>
            {/*<PantryInput defaultChecked={`${pantry === "true"? "checked":""}`} className={"checked:accent-green-600"} containerClassName={"text-white"}/>*/}
            <p className={"text-lg font-thin  text-title-black"}>Order recipes</p>
            {/*<OrderRecipes  value={order} className={"p-2 rounded-xl"}/>*/}
            {/*<SelectedIngredients inputArray={inputArray}/>*/}
            <button className={" rounded-lg py-2 bg-white"}>Search</button>
        </div>
    );
}

export default SearchBar;