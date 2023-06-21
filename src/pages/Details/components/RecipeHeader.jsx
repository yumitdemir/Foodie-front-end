import React from 'react';
import {BsBookmarkPlus} from "react-icons/bs";

function RecipeHeader(props) {
    return (
        <div className={"grid grid-cols-1  lg:grid-cols-2 border-b border-gray-300"}>
            <div className={"flex justify-center items-center  p-4 sm:p-6 md:p-10 lg:p-16"}>
                <div className={"flex flex-col justify-center items-center"}>
                    <div className={"flex gap-3 align-top"}>
                        <div className={"bg-green-600 text-white py-2 font-bold px-4 text-sm uppercase  cursor-pointer hover:underline" }>Vegetarian</div>
                        <div className={"bg-green-600 text-white py-2 font-bold px-4 text-sm uppercase  cursor-pointer hover:underline"}>Gluten Free</div>
                    </div>
                    <h1 className={"text-4xl font-bold font-dmSans text-title-black text-center py-4 px-10"}>Vegetarian
                        Bánh Cuốn (Asparagus Rice Noodle Rolls With Mushrooms and</h1>
                    <p className={"text-sm font-bold text-gray-700 py-2"}>BY UYEN LUE </p>
                    <p className={"text-xs text-gray-500 "}>June 15, 2023 </p>
                    <button
                        className={"text-lg my-10 py-2 px-6 bg-gray-100 text-center flex hover:bg-gray-300 text-gray-700"}>
                        <span className={"text-3xl"}><BsBookmarkPlus/></span><span>SAVE RECIPE</span></button>
                </div>
            </div>
            <img src="https://picsum.photos/1920/1080" className={"object-cover w-screen h-screen"} alt=""/>
        </div>
    );
}

export default RecipeHeader;