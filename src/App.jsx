import React from 'react';
import Nav from "./components/nav/nav.jsx";
import Index from "./pages/Home/Index.jsx";
import Footer from "./components/footer/Footer.jsx";

function App(props) {
    return (
        <>
                <Nav/>
                <Index/>
                <Footer/>
        </>
    );
}

export default App;