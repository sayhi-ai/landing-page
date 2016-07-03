import React from "react"
import Hero from "./Hero"
import CleanCodeSection from "./CleanCodeSection"
import VarietyCodeSection from "./VarietyCodeSection"
import FutureFeaturesSection from "./FutureFeaturesSection"
import ExampleUsesSection from "./ExampleUsesSection"
import SignUpElement from "../app/SignUpElement"
import HumanHelpElement from "../app/HumanHelpElement"

export default class Layout extends React.Component {
    
    render() {
        return (
            <div>
                <Hero/>
                <SignUpElement signUpTitle="top-signup-scroll-marker-title" scrollMarker=""/>
                <VarietyCodeSection/>
                <CleanCodeSection/>
                <ExampleUsesSection/>
                <FutureFeaturesSection/>
                <SignUpElement signUpTitle="" scrollMarker="bottom-signup-scroll-marker">
                    <HumanHelpElement title="Got a question?" buttonLabel="Talk to a human"/>
                </SignUpElement>
            </div>
        )
    }
}