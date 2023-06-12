import React from 'react';

function LoadingSpinner({width,height,boldness}) {
    return (
        <div
            className={`inline-block justify-center items-center h-${height} w-${width} animate-spin rounded-full border-${boldness} text-green-600  border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
            role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
    );
}

export default LoadingSpinner;