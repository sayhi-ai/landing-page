import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from "../../NavBar"
import Header from "./Hero"
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
        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: "#19A5E4",
                primary2Color: "#19A5E4",
                primary3Color: "#19A5E4"
            }
        })
        
        return (
            <div id="page-top" className="index">
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <Favicon url={favicon}/>
                        <NavBar/>
                        <MobileScrollButton/>
                        <Header/>
                        <VarietyCodePage/>
                        <CleanCodePage/>
                        <ExampleUsesPage/>
                        <FutureFeaturesPage/>
                        <SignUpElement/>
                        <Footer/>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}