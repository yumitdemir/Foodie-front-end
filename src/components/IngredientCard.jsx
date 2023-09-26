import React from 'react';

function IngredientCard({ingredient, imgClass}) {
    return (
        <div className={"flex flex-col gap-1"}>
            <img src={ingredient.image.filePath} className={imgClass ? imgClass : "w-14 h-14"}
                 alt={ingredient.desccription}/>
            <p className={"text-xs text-center font-semibold"}>{ingredient.name}</p>
        </div>
    );
}

export default IngredientCard;