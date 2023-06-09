import React from 'react';
import SelectedIngredients from "./SelectedIngredients.jsx";

function SearchBar({inputArray}) {

    return (
        <div className="flex flex-col w-full items-center bg-green-500 rounded-xl py-5 px-2 overflow-hidden gap-3 ">
            <SelectedIngredients inputArray={inputArray}/>
            <input type="text" />
        </div>
    );
}

export default SearchBar;