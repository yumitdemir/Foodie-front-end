import React from 'react';
import {BiSearchAlt} from "react-icons/bi";

function SearchRecipie(props) {
    return (
        <div className={"flex flex-col justify-center items-center mt-8"}>
            <div className={"flex-col flex w-full"}>
                <p className={"text-xl  md:text-4xl font-extrabold text-gray-900 ps-4"}
                   style={{}}>What can I make with <span
                    className={"text-green-500"}>...</span></p>
                <div className={"flex flex-row shadow-lg shadow-green-100 rounded-3xl border-2  border-green-600"}>
                    <input placeholder={"Enter ingredients e.g. garlic rice onion"} type="text"
                           className={"focus:outline-none border-e-0 rounded-e-none w-full rounded-3xl p-5 text-xl font-bold "}/>
                    <button className={"rounded-e-2xl bg-green-600 flex items-center  px-8 font-bold text-white"}><BiSearchAlt className={"text-3xl"}/></button>
                </div>
            </div>


        </div>
    );
}

export default SearchRecipie;