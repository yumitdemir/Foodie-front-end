import React from 'react';

function SummaryAbout(props) {
    return (
        <>
            <div className={"grid  grid-cols-2 items-center gap-3  border-green-400"}>
                <div className={"col-span-2 sm:col-span-1 flex flex-col "}>
                    <h2 className={"text-title-black mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl "}>
                        What are we about
                    </h2>
                    <p className={"text-paragraph-black"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores eveniet expedita maiores
                        nam necessitatibus nostrum, optio quaerat quia reprehenderit sapiente?
                    </p>
                    <img className={"shadow-2xl rounded w-full h-80 sm:hidden self-center mt-4"}
                         src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=170667a&w=0&k=20&c=3bHFt_GugZ_ebGJ-jS8cxVg4WyzSejLFGIRVJS-T2TU=" alt=""/>
                    <button
                        className={"mt-10 p-2 bg-green-500 text-white rounded w-2/5 hidden sm:block self-end me-3 hover:bg-green-600"}>Explore
                        More
                    </button>
                </div>
                <div className={""}>
                    <img className={"shadow-lg shadow-black hidden sm:block rounded md:w-4/5 lg:w-3/5"}
                         src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=170667a&w=0&k=20&c=3bHFt_GugZ_ebGJ-jS8cxVg4WyzSejLFGIRVJS-T2TU=" alt=""/>
                </div>
            </div>
            <div className={"grid grid-cols-2 sm:gap-3 md:border-e-4 border-green-400"}>
                <div className={"flex justify-end items-center pe-3.5"}>
                    <img className={"shadow-lg shadow-black hidden sm:block rounded md:w-4/5 lg:w-3/5"}
                         src="https://media.istockphoto.com/id/959584318/photo/making-dinner-into-a-masterpiece.jpg?s=612x612&w=0&k=20&c=5sadZdufW-4j_ZmV3XM8KSZXRFcYRD-Nmh0vqTkIS7Y="
                         alt=""/>
                </div>
                <div className={"col-span-2 sm:col-span-1 flex flex-col"}>
                    <h2 className={"mb-4 text-4xl text-title-black font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl "}>
                        Improve your culinary skills
                    </h2>
                    <ul className={"text-paragraph-black flex flex-col gap-1"}>
                        <li className={"ps-3  border-green-500 border-s-4"}>Lorem ipsum.</li>
                        <li className={"ps-3  border-green-500 border-s-4"}>Lorem ipsum dolor.</li>
                        <li className={"ps-3  border-green-500 border-s-4"}>Lorem ipsum dolor sit amet.</li>
                        <li className={"ps-3  border-green-500 border-s-4"}>Lorem ipsum dolor.</li>
                        <li className={"ps-3  border-green-500 border-s-4"}>Lorem ipsum dolor sit amet.</li>
                        <li className={"ps-3  border-green-500 border-s-4"}>Lorem ipsum dolor.</li>
                    </ul>
                    <img className={"shadow-lg shadow-black rounded w-full h-80 sm:hidden self-center mt-4"}
                         src="https://media.istockphoto.com/id/959584318/photo/making-dinner-into-a-masterpiece.jpg?s=612x612&w=0&k=20&c=5sadZdufW-4j_ZmV3XM8KSZXRFcYRD-Nmh0vqTkIS7Y=" alt=""/>

                </div>
            </div>
            <div className={"mt-15 shadow-2xl"}>
                <div className={"flex flex-col bg-green-500 font-bold text-lg p-10 rounded text-white"}>
                    <p>“To become a doctor, you need to go to medical school. To become a lawyer, you need a J.D.
                        But to become a chef, you just put your time in at restaurants and learn by doing.” </p>
                    <p className={"self-end"}>- Caroline Schiff</p>
                </div>
            </div>
        </>
    );
}

export default SummaryAbout;