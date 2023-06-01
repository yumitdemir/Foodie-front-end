import React from 'react';

function SummaryAbout(props) {
    return (
        <>
            <div className={"grid  grid-cols-2 items-center gap-3  border-green-400"}>
                <div className={"col-span-2 sm:col-span-1 flex flex-col "}>
                    <h2 className={"mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black"}>
                        What are we about
                    </h2>
                    <p className={"text-gray-600"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores eveniet expedita maiores
                        nam necessitatibus nostrum, optio quaerat quia reprehenderit sapiente?
                    </p>
                    <img className={"rounded w-full h-80 sm:hidden self-center mt-4"}
                         src="https://picsum.photos/1000" alt=""/>
                    <button
                        className={"mt-10 p-2 bg-green-500 text-white rounded w-2/5 hidden sm:block self-end"}>Explore
                        More
                    </button>
                </div>
                <div className={""}>
                    <img className={" hidden sm:block rounded md:w-3/5"} src="https://picsum.photos/1000" alt=""/>
                </div>
            </div>
            <div className={"grid grid-cols-2 sm:gap-3 border-e-4 border-green-400"}>
                <div className={"flex justify-end items-center pe-3.5"}>
                    <img className={" hidden sm:block rounded md:w-3/5 shadow-xl"} src="https://picsum.photos/1000"
                         alt=""/>
                </div>
                <div className={"col-span-2 sm:col-span-1 flex flex-col  "}>
                    <h2 className={"mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black"}>
                        Improve your culinary skills
                    </h2>
                    <ul className={"text-gray-700 flex flex-col gap-1"}>
                        <li className={"ps-3  border-green-500 border-s-4"}>Lorem ipsum.</li>
                        <li className={"ps-3  border-green-500 border-s-4"}>Lorem ipsum dolor.</li>
                        <li className={"ps-3  border-green-500 border-s-4"}>Lorem ipsum dolor sit amet.</li>
                        <li className={"ps-3  border-green-500 border-s-4"}>Lorem ipsum dolor.</li>
                        <li className={"ps-3  border-green-500 border-s-4"}>Lorem ipsum dolor sit amet.</li>
                        <li className={"ps-3  border-green-500 border-s-4"}>Lorem ipsum dolor.</li>
                    </ul>
                    <img className={"rounded w-full h-80 sm:hidden self-center mt-4"}
                         src="https://picsum.photos/750" alt=""/>

                </div>
            </div>
            <div className={"mt-15"}>
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