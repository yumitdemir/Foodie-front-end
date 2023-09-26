import React from 'react';

function RecipeTag({title}) {
    return (
        <div
            className={"bg-green-600 text-white py-2 font-bold px-4 text-sm uppercase  cursor-pointer hover:underline"}>
            {title}
        </div>
    );
}

export default RecipeTag;