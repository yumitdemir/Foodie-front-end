import React, {useReducer} from 'react';
import {BiSearchAlt} from "react-icons/bi";
import {BsCheck2} from "react-icons/bs";
import ImageCollage from "./ImageCollage.jsx";
import TitleAndOptions from "./TitleAndOptions.jsx";
import SearchInputField from "./SearchInputField.jsx";

function searchReducer(state, action) {
    switch (action.type) {
        case "IGNORE_PANTRY":
            return {...state, IgnorePantry: action.payload};
        case "ORDER_BY":
            return {...state, OrderBy: action.payload}
        case "INPUT":
            return {...state, Input: action.payload}
    }
}

function SearchRecipie(props) {
    let initialSearchState = {IgnorePantry: true, OrderBy: "1", Input: ""};
    const [searchState, searchDispatch] = useReducer(searchReducer, initialSearchState);
    return (
        <div className={"flex flex-col  mb-10 mt-20 w-full "}>
            <div>
                <TitleAndOptions searchDispatch={searchDispatch} searchState={searchState}/>
                <SearchInputField searchDispatch={searchDispatch} searchState={searchState}/>
            </div>
            <ImageCollage/>
        </div>
    );
}

export default SearchRecipie;