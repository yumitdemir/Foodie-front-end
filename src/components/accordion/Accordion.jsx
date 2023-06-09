import React, {Children, useEffect, useState} from 'react';
import {AiOutlineDown, AiOutlineUp} from "react-icons/ai";


function Accordion({initialState, title, className, children}) {
    const [accordionState, setAccordionState] = useState(true);

    useEffect(() =>{
        setAccordionState(initialState)
    },[]);
    return (
        <div className={`flex flex-col gap-3  text-white`}>
            <p className={`${className}  cursor-pointer hover:opacity-70`} onClick={() => {
                setAccordionState(() => !accordionState)
            }}>{title} <span className={"ps-2 text-xl"}>{accordionState == true ? <AiOutlineUp/> : <AiOutlineDown/>}</span></p>
            <div className={`${accordionState === true ? "" : "hidden"}`}>
                {children}
            </div>

        </div>
    );
}

export default Accordion;