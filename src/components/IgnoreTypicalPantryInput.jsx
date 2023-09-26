import React from 'react';
import {useFormContext} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

function IgnoreTypicalPantryInput(props) {
    const {register} = useFormContext();
    const [searchParms, setSearchParms] = useSearchParams();
    return (
        <div className={"flex gap-1 items-center"}>
            <label className={"text-xs"}> Ignore Typical Pantry: </label>
            <input {...register("IgnoreTypicalPantry")}
                   defaultChecked={searchParms.get("IgnoreTypicalPantry") == "true" ? true : false} type="checkbox"
                   className={"h-full"}/>
        </div>
    );
}

export default IgnoreTypicalPantryInput;