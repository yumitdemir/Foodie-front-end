import React, {useEffect} from 'react';
import {Controller, useFormContext} from "react-hook-form";
import AsyncSelect from "react-select/async";
import api from "../Api.js";
import {useQuery} from "@tanstack/react-query";
import {useSearchParams} from "react-router-dom";

function IngredientSearchSelect({customStyles, className}) {
    const {control, setValue} = useFormContext();
    const [searchParams, setSearchParams] = useSearchParams();
    const loadOptions = async (inputValue, callback) => {
        const response = await api(`Ingredients/GetIngredientsByName?name=${inputValue}`);
        const data = await response.json();
        const options = data.map(item => ({value: item.id, label: item.name}));
        callback(options);
    };
    const {data: DefaultIngredientOptions, isLoading: isDefaultIngredientsLoading} = useQuery({
        queryKey: ["getDefaultIngredients"],
        staleTime: Infinity,
        cacheTime: Infinity,
        queryFn: () => {
            return api(`Ingredients/GetDefaultIngredientOptions`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    return data.map(item => ({value: item.id, label: item.name}));
                })
        }
    })

    const {data: SelectedDefaults, isLoading: isSelectedDefaultsLoading} = useQuery({
        queryKey: ["getSelectedDefaultIngredientsValue"],
        queryFn: () => {
            return api(`Ingredients/GetIngredientsByIds?` + searchParams.toString())
                .then(response => {
                    console.log(response)
                    return response.json();
                })
                .then(data => {
                    let ingredients = data.map(item => ({value: item.id, label: item.name}))
                    setValue("ingredients", ingredients)
                    return ingredients;
                })
        }
    })


    if (isSelectedDefaultsLoading || isDefaultIngredientsLoading) {
        return <div className={"w-full h-full flex justify-center items-center"}>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <Controller
            name="ingredients"
            control={control}
            defaultValue={SelectedDefaults}
            render={({field}) => (
                <AsyncSelect
                    {...field}
                    loadOptions={loadOptions}
                    className={className}
                    defaultOptions={DefaultIngredientOptions}
                    isMulti
                    components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                    styles={customStyles}
                    placeholder="Enter ingredients || e.g. garlic rice onion"
                />
            )}
        />
    );
}

export default IngredientSearchSelect;