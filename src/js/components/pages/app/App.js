import React from "react"
import NavBar from "../../NavBar"
import Header from "./Hero"
import MUITheme from "../../MUITheme"
import CleanCodePage from "./CleanCodePage"
import VarietyCodePage from "./VarietyCodePage"
import FutureFeaturesPage from "./FutureFeaturesPage"
import ExampleUsesPage from "./ExampleUsesPage"
import WaveDivider from "./elements/WaveDivider"
import Footer from "../../AppFooter"
import Favicon from "react-favicon"
import MobileScrollButton from "../../MobileScrollButton"
import SignUpElement from "./elements/SignUpElement"
import favicon from "../../../../resources/img/favicon.png"
import Smooch from "smooch"
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class Layout extends React.Component {
    constructor() {
        super()
        Smooch.init({
            appToken: "3d081wby5cpnrvud7dw9vbwrm"
        })
        injectTapEventPlugin();
    }
    
    render() {
        return (
            <MUITheme>
                <Favicon url={favicon}/>
                <NavBar/>
                <MobileScrollButton/>
                <Header/>
                <VarietyCodePage/>
                <CleanCodePage/>
                <ExampleUsesPage/>
                <FutureFeaturesPage/>
                <SignUpElement scrollMarker="bottom-signup-scroll-marker"/>
                <Footer/>
            </MUITheme>
        )
    }
}