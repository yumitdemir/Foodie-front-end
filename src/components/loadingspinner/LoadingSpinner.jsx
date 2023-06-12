import React from 'react';

function LoadingSpinner({width,height,boldness}) {
    return (
        <div
            className={`inline-block justify-center items-center h-${width} w-${height} animate-spin rounded-full border-${boldness} text-green-600  border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
            role="status">

        </div>
    );
}

export default LoadingSpinner;