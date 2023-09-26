import React from 'react';
import {useFormContext} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

function SearchSortByInput(props) {
    const {register} = useFormContext();
    const [searchParms, setSearchParms] = useSearchParams();

    return (
        <div className={"flex items-center"}>
            <select {...register("SortBy")} defaultValue={searchParms.get("SortBy")? searchParms.get("SortBy") : "maximize-used"} className={"text-sm flex "}>
                <option value="maximize-used">maximize-used</option>
                <option value="minimize-missing">minimize-missing</option>
                <option value="only-these">only-these</option>
            </select>
        </div>
    );
}

export default SearchSortByInput;