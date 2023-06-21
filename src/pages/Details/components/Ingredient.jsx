import React from 'react';

function Ingredient(props) {
    return (
        <div className={" border-2 border-green-200 flex flex-col mt-5 p-5 bg-green-50"}>
            <img src="https://picsum.photos/200/300" className={"w-32"} alt=""/>
            <p className={"text-center text-paragraph-black font-bold mt-3"}>Tapioca Starch</p>
        </div>
    );
}

export default Ingredient;