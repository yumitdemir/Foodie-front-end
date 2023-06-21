import React, {Children} from 'react';

function DetailsTitle({title, className}) {
    return (
        <h2 className={`text-3xl font-bold text-title-black border-b-4 border-green-600 pb-4 mt-5 ${className}`}>{title}</h2>
    );
}

export default DetailsTitle;