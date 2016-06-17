import React from "react"
import NavBar from "./NavBar"
import Header from "./Header"
import CleanCodePage from "./pages/CleanCodePage"
import VarietyCodePage from "./pages/VarietyCodePage"
import FutureFeaturesPage from "./pages/FutureFeaturesPage"
import Footer from "./Footer"
import Favicon from "react-favicon"
import MobileScrollButton from "./MobileScrollButton"
import favicon from "../../resources/img/favicon.png"

export default class Layout extends React.Component {
    render() {
        return (
            <div id="page-top" className="index">
                <Favicon url={favicon}/>
                <NavBar/>
                <MobileScrollButton/>
                <Header/>
                <VarietyCodePage padding="5%"/>
                <CleanCodePage padding="0"/>
                <FutureFeaturesPage padding="5%"/>
                <Footer/>
            </div>
        )
    }
}