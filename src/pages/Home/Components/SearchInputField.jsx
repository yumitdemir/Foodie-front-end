import React from 'react';
import {BiSearchAlt} from "react-icons/bi";

function SearchInputField({searchDispatch,searchState}) {

    return (
        <div className={"flex flex-row shadow-lg shadow-green-100 rounded-3xl border-2  border-green-600"}>
            <input
                placeholder={"Enter ingredients  || e.g. garlic rice onion"}
                type="text"
                className={"focus:outline-none border-e-0 rounded-e-none w-full rounded-3xl p-5 text-xs sm:text-xl font-bold "}
                onChange={(e) => {
                    searchDispatch({type: "INPUT", payload: e.target.value})
                }}
                value={searchState.Input}
            />
            <button
                className={"rounded-e-2xl bg-green-600 flex items-center  px-8 font-bold text-white hover:bg-green-700"}>
                <BiSearchAlt className={"text-3xl"}/></button>
        </div>
    );
}

export default SearchInputField;