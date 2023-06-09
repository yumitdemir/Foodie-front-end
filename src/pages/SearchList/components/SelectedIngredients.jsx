import React from 'react';
import {AiOutlineClose, AiOutlineDown, AiOutlineUp} from "react-icons/ai";
import Accordion from "../../../components/accordion/Accordion.jsx";

function SelectedIngredients({inputArray}) {
    return (
        <div className="w-full">
            <Accordion className={"flex justify-start items-center"} title={`Selected ingredients`} initialState={true}>
                <div className="w-full flex flex-row flex-wrap gap-1 ">
                    {inputArray.map((ingredient,index) =>
                        <p  key={ingredient+index} className="bg-title-black px-3 py-1 bg-opacity-75 text-sm rounded-xl text-white text-center whitespace-normal overflow-wrap-normal break-words max-w-full">{ingredient}</p>
                    )}
                </div>

            </Accordion>



        </div>
    );
}

export default SelectedIngredients;