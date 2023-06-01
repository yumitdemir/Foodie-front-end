import React from 'react';

import {FaBars} from 'react-icons/fa';
import {Container} from "postcss";
import PageContainer from "../Container/PageContainer.jsx";

function Nav(props) {
    return (

        <nav className={"bg-white  py-3  border-b-2 border-gray-300"}>
            <PageContainer>
                <div className={"grid grid-cols-4"}>
                    <a className={"text-green-500 col-start-1 col-end-3 font-extrabold tracking-tight text-2xl  md:text-3xl  "}
                       href="#">F<span className={"text-black"}>oo</span>dies<span className={"text-black"}>.</span></a>


                    <ul className={"text-gray-600 col-start-4 hidden grid-cols-3 gap-3  justify-center m-auto items-center md:grid font-bold"}>
                        <li className={"hover:text-green-500"}><a href="">Home</a></li>
                        <li className={"hover:text-green-500"}><a href="">About</a></li>
                        <li className={"hover:text-green-500"}><a href="">Services</a></li>
                    </ul>

                    <div
                        className={" text-gray-600 col-start-4 md:hidden justify-end items-center flex cursor-pointer"}>
                        <FaBars/>
                    </div>
                </div>

            </PageContainer>
        </nav>

    );
}

export default Nav;