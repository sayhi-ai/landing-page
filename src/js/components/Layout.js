import React from "react"
import NavBar from "./NavBar"
import Header from "./Header"
import CleanCodePage from "./pages/CleanCodePage"
import VarietyCodePage from "./pages/VarietyCodePage"
import FutureFeaturesPage from "./pages/FutureFeaturesPage"
import Footer from "./Footer"
import Favicon from "react-favicon"
import MobileScrollButton from "./MobileScrollButton"
import SignUpPage from "./pages/SignUpPage"
import favicon from "../../resources/img/favicon.png"
import Smooch from "smooch"

export default class Layout extends React.Component {
    constructor() {
        super()
        Smooch.init({
            appToken: "3d081wby5cpnrvud7dw9vbwrm"
        })
    }
    
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
                <SignUpPage />
                <Footer/>
            </div>
        )
    }
}