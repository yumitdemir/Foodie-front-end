import React from 'react';
import {Container} from "postcss";
import PageContainer from "../../components/Container/PageContainer.jsx";
import SummaryAbout from "./Components/SummaryAbout.jsx";
import SearchRecipie from "./Components/SearchRecipie.jsx";



function Home(props) {

    return (
        <PageContainer>
            <div className={"flex flex-col mt-2 sm:gap-16 px-5 sm:p-0"}>
                <SearchRecipie/>
                <SummaryAbout/>
            </div>
        </PageContainer>
    );
}

export default Home;