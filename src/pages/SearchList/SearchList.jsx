import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

const fetchRecipes = (pantry, order, input) => {
    const apiKey = '49a32b520f314d1294660ea61e7ff18e';
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${""}&number=${""}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error));
};

function SearchList(props) {
    const {pantry, order, input} = useParams();

    const recipes = useQuery(
        [`recipies`],
        () => fetchRecipes(pantry, order, input)
    )

    return (
        <div>{pantry + order + input}

        </div>
    );
}

export default SearchList;