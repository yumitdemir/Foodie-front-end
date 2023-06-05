import React from 'react';

function ImageCollage(props) {
    return (
        <div className={"grid grid-cols-3  sm:grid-cols-5  gap-6 mt-20 place-items-center place-content-center"}>

            <img src="https://picsum.photos/201" className={"rounded-xl shadow-black shadow-lg"} alt=""/>
            <img src="https://picsum.photos/200/400" className={"rounded-xl row-span-2 shadow-lg shadow-black"} alt=""/>
            <img src="https://picsum.photos/203" className={"rounded-xl shadow-lg  shadow-black row-span-2"} alt=""/>

            <img src="https://picsum.photos/205" className={"rounded-xl shadow-lg shadow-black"} alt=""/>
            <img src="https://picsum.photos/204" className={"rounded-xl shadow-lg shadow-black"} alt=""/>
            <img src="https://picsum.photos/600/200" className={"rounded-xl col-span-2 shadow-lg shadow-black"} alt=""/>
        </div>
    );
}

export default ImageCollage;