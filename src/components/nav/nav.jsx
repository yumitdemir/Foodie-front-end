import React from 'react';

import {FaBars} from 'react-icons/fa';
import {Container} from "postcss";
import PageContainer from "../Container/PageContainer.jsx";
import {Link, NavLink, useLocation} from "react-router-dom";

function Nav(props) {
    let location = useLocation();

    return (

        <nav className={"bg-white px-2 sm:px-0  py-3  border-b-2 border-gray-300"}>
            <PageContainer>
                <div className={"grid grid-cols-4"}>
                    <Link to={"/Home"}
                          className={"text-green-500 col-start-1 col-end-3 font-extrabold tracking-tight text-2xl  md:text-3xl  "}
                    >F<span className={"text-black"}>oo</span>dies<span className={"text-black"}>.</span></Link>


                    <ul className={"text-gray-600 col-start-4 hidden grid-cols-3 gap-3  justify-center m-auto items-center md:grid font-bold"}>
                        <li>
                            <NavLink
                                to="/Home"
                                className={`${location.pathname === "/Home" ? "text-green-600 text-lg pointer-events-none" : "hover:text-green-500"}`}
                                activeClassName="text-green-600 text-lg pointer-events-none"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/About"
                                className={`${location.pathname === "/About" ? "text-green-600 text-lg pointer-events-none" : "hover:text-green-500"}`}
                                activeClassName="text-green-600 text-lg pointer-events-none"
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/Services"
                                className={`${location.pathname === "/Services" ? "text-green-600 text-lg pointer-events-none" : "hover:text-green-500"}`}
                                activeClassName="text-green-600 text-lg pointer-events-none"
                            >
                                Services
                            </NavLink>
                        </li>
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