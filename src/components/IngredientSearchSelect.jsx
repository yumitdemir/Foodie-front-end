import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import AsyncSelect from "react-select/async";
import api from "../Api.js";
import {useQuery} from "@tanstack/react-query";

function IngredientSearchSelect({customStyles}) {
   var {control,} =  useFormContext();
    const loadOptions = async (inputValue, callback) => {
        const response = await api(`Ingredients/GetIngredientsByName?name=${inputValue}`);
        const data = await response.json();
        const options = data.map(item => ({value: item.id, label: item.name}));
        callback(options);
    };
    const {data} = useQuery({
        queryKey: ["getDefaultIngredients"],
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
    return (
        <Controller
            name="ingredients"
            control={control}
            defaultValue=""
            render={({field}) => (
                <AsyncSelect
                    {...field}
                    loadOptions={loadOptions}
                    defaultOptions={data}
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