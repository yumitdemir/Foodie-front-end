import React from 'react';
import {AiOutlineClose, AiOutlineDown, AiOutlineUp} from "react-icons/ai";

function SelectedIngredients({inputArray}) {
    return (
        <div className="w-full">
            <p className="text-start text-xl font-bold text-white "><span
                className={"flex justify-center items-center"}> Selected ingredients  <AiOutlineDown/> <AiOutlineUp/></span>
            </p>
            <div className="w-full flex flex-row flex-wrap gap-1 ">
                {inputArray.map((ingredient,index) =>
                    <p  key={ingredient+index} className="bg-gray-400 px-3 py-1 bg-opacity-75 text-sm rounded-xl text-white text-center whitespace-normal overflow-wrap-normal break-words max-w-full">{ingredient}</p>
                )}
            </div>
        </div>
    );
}

export default SelectedIngredients;