import React from 'react';
import IngredientSearchSelect from "./IngredientSearchSelect.jsx";
import {HiMiniMagnifyingGlass} from "react-icons/hi2";
import SearchSortByInput from "./SearchSortByInput.jsx";
import IgnoreTypicalPantryInput from "./IgnoreTypicalPantryInput.jsx";

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        border: "1px solid #16a34a",
        boxShadow: state.isFocused ? '2px 1px 4px 2px #16a34a' : provided.boxShadow,
        borderRadius: "24px",
        width: '100%',
        padding: '12px',
        fontSize: ['13px'],
        fontWeight: 'bold',
        ':hover': {
            border: "1px solid #10a045"
        },
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

function SearchWidget(props) {
    return (
        <div className={"lg:max-w-xs w-full h-fit lg:sticky top-0  "}>
            <IngredientSearchSelect className={"mt-5 "} customStyles={customStyles}/>
            <div className={"flex gap-3  mb-2 w-full"}>
                <SearchSortByInput/>
                <IgnoreTypicalPantryInput/>
            </div>
            <button
                className={"bg-green-600  btn btn-sm  hover:text-gray-300 hover:bg-green-700 text-lg w-full flex items-center gap-3 justify-center text-white  "}
                type="submit">Search <HiMiniMagnifyingGlass/></button>
        </div>
    );
}

export default SearchWidget;