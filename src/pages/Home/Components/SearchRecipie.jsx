import React from 'react';
import {BiSearchAlt} from "react-icons/bi";
import {BsCheck2} from "react-icons/bs";

function SearchRecipie(props) {
    return (
        <div className={"flex flex-col justify-center items-center mt-8"}>
            <div className={"flex-col flex w-full"}>
                <div className={"grid grid-cols-5 justify-around items-center"}>

                    <p className={"col-span-3 text-xl  md:text-4xl font-extrabold text-title-black  ps-4"}
                    >What can I make with <span
                        className={"text-green-500"}>...</span></p>

                    <div className={"col-span-2 flex flex-row gap-5 items-center justify-end pe-10"}>


                        <select name="orderby">
                            <option value="volvo" selected="select">Maximize used ingredients</option>
                            <option value="saab">Minimize missing ingredients</option>
                        </select>


                        <div className={"flex flex-row gap-1 items-center justify-center text-sm h-full w-full"}>


                        <input name="pantry" type="checkbox" className={"h-5 w-5 checked:accent-green-600"}  defaultChecked={"true"}/>
                        <label htmlFor="pantry">Ignore typical pantry</label>
                        </div>


                    </div>
                </div>

                <div className={"flex flex-row shadow-lg shadow-green-100 rounded-3xl border-2  border-green-600"}>
                    <input placeholder={"Enter ingredients  || e.g. garlic rice onion"} type="text"
                           className={"focus:outline-none border-e-0 rounded-e-none w-full rounded-3xl p-5 text-xl font-bold "}/>
                    <button
                        className={"rounded-e-2xl bg-green-600 flex items-center  px-8 font-bold text-white hover:bg-green-700"}>
                        <BiSearchAlt className={"text-3xl"}/></button>
                </div>
            </div>
        </div>
    );
}

export default SearchRecipie;