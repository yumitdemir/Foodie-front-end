import React from 'react';
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import PageContainer from "../../components/Container/PageContainer.jsx";
import SearchWidget from "./SearchWidget.jsx";
import api from "../../Api.js";
import RecipesList from "./RecipesList.jsx";
import {FormProvider, useForm} from "react-hook-form";


function RecipeSearch(props) {
    const searchRecipeFrom = useForm();




    return (
        <PageContainer>
            <div className={"flex flex-col lg:flex-row gap-3 mt-5 "}>
                <FormProvider {...searchRecipeFrom}>
                    <SearchWidget/>

                    <RecipesList/>


                </FormProvider>
            </div>
        </PageContainer>);
}

export default RecipeSearch;

