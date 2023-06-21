import React from 'react';
import DetailsTitle from "./ui/DetailsTitle.jsx";

function AllIngredients(props) {
    return (
        <div>
            <DetailsTitle title={"Ingredients"}/>
            <div className={"overflow-x-auto flex gap-3"}>
                <ul>
                    <li>dsadas</li>
                    <li>1kg. sdaasd</li>
                    <li>5xdasads</li>
                    <li>adsasd</li>
                    <li>dasasd</li>
                    <li>2xdasads</li>
                </ul>
            </div>
        </div>

    );
}

export default AllIngredients;