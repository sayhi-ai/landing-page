import React from "react"
import NavBar from "./NavBar"
import Header from "./Hero"
import CleanCodePage from "./pages/CleanCodePage"
import VarietyCodePage from "./pages/VarietyCodePage"
import FutureFeaturesPage from "./pages/FutureFeaturesPage"
import ExampleUsesPage from "./pages/ExampleUsesPage"
import WaveDivider from "./WaveDivider"
import Footer from "./Footer"
import Favicon from "react-favicon"
import MobileScrollButton from "./MobileScrollButton"
import SignUpPage from "./pages/SignUpPage"
import favicon from "../../resources/img/favicon.png"
import Smooch from "smooch"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
            <div id="page-top" className="index">
                <MuiThemeProvider>
                <div>
                    <Favicon url={favicon}/>
                    <NavBar/>
                    <MobileScrollButton/>
                    <Header/>
                    <VarietyCodePage/>
                    <CleanCodePage/>
                    <ExampleUsesPage/>
                    <FutureFeaturesPage/>
                    <SignUpPage/>
                    <Footer/>
                </div>
                </MuiThemeProvider>
            </div>
        )
    }
}