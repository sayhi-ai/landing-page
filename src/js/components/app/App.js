import React from "react"
import NavBar from "../NavBar"
import Hero from "./Hero"
import MuiTheme from "../MuiTheme"
import CleanCodeSection from "./CleanCodeSection"
import VarietyCodeSection from "./VarietyCodeSection"
import FutureFeaturesSection from "./FutureFeaturesSection"
import ExampleUsesSection from "./ExampleUsesSection"
import Footer from "../AppFooter"
import Favicon from "react-favicon"
import MobileScrollButton from "../MobileScrollButton"
import SignUpElement from "./elements/SignUpElement"
import favicon from "../../../resources/img/logo.png"
import Smooch from "smooch"
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class Layout extends React.Component {
    constructor() {
        super()
        Smooch.init({
            appToken: "3d081wby5cpnrvud7dw9vbwrm",
            customText: {
                headerText: 'How can we help?',
                inputPlaceholder: 'Type a message...',
                sendButtonText: 'Send'
            },
            emailCaptureEnabled: true
        })
        injectTapEventPlugin();
    }
    
    render() {
        return (
            <MuiTheme>
                <Favicon url={favicon}/>
                <NavBar/>
                <MobileScrollButton/>
                <Hero/>
                <SignUpElement signUpTitle="top-signup-scroll-marker-title" scrollMarker=""/>
                <VarietyCodeSection/>
                <CleanCodeSection/>
                <ExampleUsesSection/>
                <FutureFeaturesSection/>
                <SignUpElement signUpTitle="" scrollMarker="bottom-signup-scroll-marker"/>
                <Footer/>
            </MuiTheme>
        )
    }
}