import React from 'react';
import PageContainer from "../Container/PageContainer.jsx";

function Footer(props) {
    return (
        <footer
            className={"w-full mt-40 pt-10   border-t-2 border-gray-300  flex justify-center items-center font-bold"}>
            <PageContainer>
                <div className={"grid grid-cols-2 lg:grid-cols-5  content-center mb-30"}>
                    <p className={"text-4xl md:text-6xl col-span-2 mb-10 lg:mb-0 ms-2 md:ms-0"}>Foodies.</p>
                    <div className={"grid grid-cols-2 md:grid-cols-4 ps-10 col-span-3 w-full gap-10 mb-10"}>
                        <div className="flex flex-col">
                            <p className={"text-3xl mb-3 text-title-black"}>Lorem</p>
                            <div className={"flex flex-col font-normal text-md gap-2 text-paragraph-black"}>
                                <p>Lorem ipsum.</p>
                                <p>Lorem ipsum.</p>
                                <p>Lorem ipsum.</p>
                                <p>Lorem ipsum.</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className={"text-3xl mb-3 text-title-black"}>Lorem</p>
                            <div className={"flex flex-col font-normal text-md gap-2 text-paragraph-black"}>
                                <p>Lorem ipsum.</p>
                                <p>Lorem ipsum.</p>
                                <p>Lorem ipsum.</p>
                                <p>Lorem ipsum.</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className={"text-3xl mb-3 text-title-black"}>Lorem</p>
                            <div className={"flex flex-col font-normal text-md gap-2 text-paragraph-black"}>
                                <p>Lorem ipsum.</p>
                                <p>Lorem ipsum.</p>
                                <p>Lorem ipsum.</p>
                                <p>Lorem ipsum.</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className={"text-3xl mb-3 text-title-black"}>Lorem</p>
                            <div className={"flex flex-col font-normal text-md gap-2 text-paragraph-black"}>
                                <p>Lorem ipsum.</p>
                                <p>Lorem ipsum.</p>
                                <p>Lorem ipsum.</p>
                                <p>Lorem ipsum.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={"bg-paragraph-black text-white p-4 rounded-t-xl  w-full flex flex-col items-center"}>
                    <p className={"text-lg "}>© 2023 Lorem™. All Rights Reserved.</p>
                </div>
            </PageContainer>
        </footer>
    );
}

export default Footer;