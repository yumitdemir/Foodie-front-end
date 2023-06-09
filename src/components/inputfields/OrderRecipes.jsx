import React from 'react';

function OrderRecipes({OrderBy,onChange,className,value}) {

    return (
        <select className={className} name="orderby" value={value} onChange={onChange}>
            <option value={1}>Maximize used ingredients</option>
            <option value={2}>Minimize missing ingredients</option>
        </select>
    );
}

export default OrderRecipes;