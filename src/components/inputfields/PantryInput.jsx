import React from 'react';

function PantryInput({defaultChecked,value,onChange,className,containerClassName}) {
    return (
        <div className={`flex flex-row gap-1  ${containerClassName}`}>
            <input name="pantry" type="checkbox" className={className}
                   defaultChecked={defaultChecked}
                   onChange={onChange}
            />
            <label htmlFor="pantry" className={" text-xs"}>Ignore typical pantry</label>
        </div>
    );
}

export default PantryInput;