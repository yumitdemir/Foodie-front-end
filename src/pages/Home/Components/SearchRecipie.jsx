import React from 'react';

function SearchRecipie(props) {
    return (
        <div className={"flex flex-col justify-center items-center mt-8"}>
            <div className={"flex-col flex w-full"}>
                <p className={"text-xl  md:text-4xl font-extrabold text-gray-900 ps-4"} style={{textShadow:"4px 4px 4px rgba(0,0,0,0.19)"}}>What can I make with <span className={"text-green-500"}>...</span></p>
                <input placeholder={"Enter ingredients"} type="text" className={"shadow-md shadow-black w-full rounded-3xl p-5 text-2xl font-bold border-2 border-gray-800 :border-green-700"}/>
            </div>

        </div>
    );
}

export default SearchRecipie;