import React from 'react';

function SearchRecipie(props) {
    return (
        <div className={"flex flex-col justify-center items-center "}>
            <div className={"flex-col flex w-full"}>
                <p className={"text-3xl font-extrabold"}>Find your taste</p>
                <input type="text" className={" w-full rounded-3xl px-5 py-8 text-2xl font-bold border-2 border-gray-800"}/>
            </div>

        </div>
    );
}

export default SearchRecipie;