import React from 'react';

function RecipeStep({step}) {
    return (
        <div>
            <p className={"text-lg font-bold "}>Step {step.stepNo} / {step.title}</p>
            <p>{step.description}</p>
        </div>
    );
}

export default RecipeStep;