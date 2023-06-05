import React from 'react';

function TitleAndOptions({searchState, searchDispatch}) {
    return (
        <div className={"grid grid-cols-1 place-items-start sm:grid-cols-5  "}>

            <p className={"col-span-3 text-2xl  lg:text-4xl font-extrabold text-title-black  sm:ps-4"}
            >What can I make with <span
                className={"text-green-500"}>...</span></p>

            <div
                className={"col-span-2 text-xs lg:text-lg flex  pb-2 flex-row md:flex-col lg:flex-row gap-2 lg:gap-5 items-start sm:items-end "}>


                <select name="orderby" value={searchState.OrderBy} onChange={(e) => {
                    searchDispatch({type: "ORDER_BY", payload: e.target.value})
                }}>
                    <option value={1}>Maximize used ingredients</option>
                    <option value={2}>Minimize missing ingredients</option>
                </select>


                <div className={"lg:text-lg flex flex-row gap-1 items-center justify-end  "}>

                    <input name="pantry" type="checkbox" className={"h-2 w-2 lg:h-5 lg:w-5 checked:accent-green-600"}
                           defaultChecked={"true"}
                           value={searchState.IgnorePantry}
                           onChange={(e) => {
                               searchDispatch({type: "IGNORE_PANTRY", payload: e.target.checked})
                           }}
                    />
                    <label htmlFor="pantry" className={" text-xs"}>Ignore typical pantry</label>
                </div>


            </div>
        </div>
    );
}

export default TitleAndOptions;