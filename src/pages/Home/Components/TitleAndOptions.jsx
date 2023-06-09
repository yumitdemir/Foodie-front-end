import React from 'react';
import PantryInput from "../../../components/inputfields/PantryInput.jsx";
import OrderRecipes from "../../../components/inputfields/OrderRecipes.jsx";

function TitleAndOptions({searchState, searchDispatch}) {
    return (
        <div className={"grid grid-cols-1 place-items-start md:grid-cols-5 px-5 "}>

            <p className={"col-span-3 text-lg  sm:text-2xl  lg:text-4xl font-extrabold text-title-black   "}
            >What can I make with <span
                className={"text-green-500"}>...</span></p>

            <div
                className={"w-full lg:justify-end col-span-2 text-xs lg:text-lg flex  pb-2 flex-row md:flex-col lg:flex-row gap-2 lg:gap-5  sm:items-end "}>


                <OrderRecipes name="orderby" value={searchState.OrderBy} onChange={(e) => {
                    searchDispatch({type: "ORDER_BY", payload: e.target.value})
                }}></OrderRecipes>


                <div className={"lg:text-lg flex flex-row gap-1 items-center justify-end  "}>

                    <PantryInput className={"h-2 w-2 lg:h-5 lg:w-5 checked:accent-green-600"}
                                 defaultChecked={"true"}
                                 value={searchState.IgnorePantry}
                                 onChange={(e) => {
                                     searchDispatch({type: "IGNORE_PANTRY", payload: e.target.checked})
                                 }}
                    />

                </div>
            </div>
        </div>
    );
}

export default TitleAndOptions;