import React from 'react';
import {useForm} from "react-hook-form";
import {useQuery} from "@tanstack/react-query";
import api from "../../Api.js";
function restructureData(obj) {
    return {
        "file": obj.File[0],
        "fileName": obj.FileName || null,
        "fileDescription": obj.FileDescription || null,
        "unitPrice": obj.UnitPrice || null,
        "priceUnit": obj.PriceUnit || null,
        "nutrition": {
            "calories": obj.Nutrition || null,
            "protein": obj.Protein,
            "fat": obj.Fat,
            "carbohydrates": obj.Carbohydrates,
            "fiber": obj.Fiber,
            "sugar": obj.Sugar
        },
        "name": obj.Name || null,
        "desccription": obj.Desccription || null
    };
}
function AddIngredient() {
    const {register, handleSubmit, formState: {errors}} = useForm();


    const onSubmit = (data) => {
        data = restructureData(data);
        console.log(data)
        const formData = new FormData();
        for (const field in data) {
            formData.append(field, data[field]);
        }
        api(`Ingredients/Create`,{
            method:"POST",
            body: formData},
        )
            .then(response => {
                console.log(response)
                return response.json();
            })
            .then(data => {
                // window.location.reload()
            })
    }
//Ingredients/Create
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col items-center w-full"}>
            <div className={"flex flex-col mb-2"}>
                <label>File:</label>
                <input {...register("File", {required: true})} type="file" className={"file-input w-full max-w-xs"}/>
            </div>
            {errors.File && <span>This field is required</span>}

            <div className={"flex flex-col mb-2"}>
                <label>File Name:</label>
                <input {...register("FileName", {required: true})} className={"input input-bordered w-full max-w-xs"}/>
            </div>
            {errors.FileName && <span>This field is required</span>}

            <div className={"flex flex-col mb-2"}>
                <label>File Description:</label>
                <input {...register("FileDescription")} className={"input input-bordered w-full"}/>
            </div>

            <div className={"flex flex-col mb-2"}>
                <label>Unit Price:</label>
                <input {...register("UnitPrice")} type="number" step="0.01" className={"input input-bordered w-full "}/>
            </div>

            <div className={"flex flex-col mb-2"}>
                <label>Price Unit:</label>
                <select {...register("PriceUnit")} className={"select select-bordered w-full "}>
                    <option value="">Select...</option>
                    <option value="PerGram">Per Gram</option>
                    <option value="PerKilogram">Per Kilogram</option>
                    <option value="PerOunce">Per Ounce</option>
                    <option value="PerPound">Per Pound</option>
                    <option value="PerLiter">Per Liter</option>
                    <option value="PerMilliliter">Per Milliliter</option>
                </select>
            </div>

            <div className={"flex flex-col mb-2"}>
                <label>Nutrition:</label>
                <input {...register("Nutrition")} className={"input input-bordered w-full max-w-xs"}/>
            </div>

            <div className={"flex flex-col mb-2"}>
                <label>Name:</label>
                <input {...register("Name", {required: true})} className={"input input-bordered w-full"}/>
            </div>
            {errors.Name && <span>This field is required</span>}

            <div className={"flex flex-col mb-2"}>
                <label>Description:</label>
                <input {...register("Desccription")} className={"input input-bordered w-full"}/>
            </div>

            <input type="submit"/>
        </form>
    );
}

export default AddIngredient;
