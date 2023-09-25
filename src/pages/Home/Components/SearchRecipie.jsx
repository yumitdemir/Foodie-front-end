import React from 'react';
import { FormProvider, useForm} from "react-hook-form";
import {HiMiniMagnifyingGlass} from "react-icons/hi2";
import api from "../../../Api.js";
import {useQuery} from "@tanstack/react-query";
import {createSearchParams, useNavigate} from "react-router-dom";
import IngredientSearchSelect from "../../../components/IngredientSearchSelect.jsx";
const customStyles = {
    control: (provided, state) => ({
        ...provided,
        border: "none",
        outline: 'none',
        boxShadow: state.isFocused ? '2px 1px 4px 2px #16a34a' : provided.boxShadow,
        borderStartStartRadius: "24px",
        borderEndStartRadius: "24px",
        borderRadius: "0",
        width: '100%',
        padding: '12px',
        fontSize: ['xs', 'xl'],
        fontWeight: 'bold',
    }),
    option: (styles, {isFocused, isSelected}) => {
        return {
            ...styles,
            backgroundColor: isFocused ? "#2cbf62" : undefined // change these to your desired colors
        }
    },
    multiValue: (styles, {data}) => {
        return {
            ...styles,
            backgroundColor: '#2cbf62', // change this to your desired background color
        };
    },
    multiValueLabel: (styles, {data}) => {
        return {
            ...styles,
            color: 'white',
        };
    },
    multiValueRemove: (styles, {data}) => {
        return {
            ...styles,
            color: 'black', // change this to your desired color
            ':hover': {
                // change this to your desired hover color
                backgroundColor: "#188f48",
                color: '#F5F5F5',
                borderRadius: "0"
            },
        };
    },
};


function SearchRecipie(props) {
    const searchRecipeFrom = useForm();
    const {handleSubmit, control} = searchRecipeFrom;
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data)
        navigate({
            pathname: "/search",
            search: createSearchParams({
                IngredientIds: data.ingredients.map(i => i.value),
            }).toString()
        });
    }

    return (
        <div className={"flex flex-col mt-20 w-full "}>
            <p className={"text-lg  sm:text-2xl  lg:text-4xl font-extrabold text-title-black   "}
            >What can I make with <span className={"text-green-500"}>...</span></p>
            <FormProvider {...searchRecipeFrom} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={"flex mt-5"}>
                        <div className={"w-full rounded-s-3xl border-2 border-green-600 border-e-0 "}>
                            <IngredientSearchSelect customStyles={customStyles}/>
                        </div>
                        <button
                            className={"bg-green-600 btn-lg  hover:text-gray-300 hover:bg-green-700 text-2xl text-white  btn-lg rounded-s-none rounded-e-3xl  "}
                            type="submit"><HiMiniMagnifyingGlass/></button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}

export default SearchRecipie;