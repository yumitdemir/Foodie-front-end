import React from 'react';

function PantryInput({defaultChecked,value,onChange,className}) {
    return (
        <>
            <input name="pantry" type="checkbox" className={className}
                   defaultChecked={defaultChecked}
                   value={value}
                   onChange={onChange}
            />
            <label htmlFor="pantry" className={" text-xs"}>Ignore typical pantry</label>
        </>
    );
}

export default PantryInput;