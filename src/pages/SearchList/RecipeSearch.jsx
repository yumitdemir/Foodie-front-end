import React from 'react';
import {createSearchParams, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import PageContainer from "../../components/Container/PageContainer.jsx";
import SearchWidget from "../../components/SearchWidget.jsx";
import api from "../../Api.js";
import RecipesList from "./RecipesList.jsx";
import {FormProvider, useForm} from "react-hook-form";


function RecipeSearch(props) {
    const searchRecipeFrom = useForm();
    const {handleSubmit} = searchRecipeFrom;
    const navigate = useNavigate();
    const submitHandler = (data) => {
        navigate({
            pathname: "/search",
            search: createSearchParams({
                IngredientIds: data.ingredients.map(i => i.value),
                IgnoreTypicalPantry: data.IgnoreTypicalPantry,
                SortBy:data.SortBy
            }).toString()
        });
    };

    return (
        <PageContainer>
            <FormProvider {...searchRecipeFrom}>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className={"flex flex-col lg:flex-row gap-3 mt-5 px-2"}>
                        <SearchWidget/>
                        <RecipesList/>
                    </div>
                </form>
            </FormProvider>
        </PageContainer>);
}

export default RecipeSearch;

