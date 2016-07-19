import React from 'react'
import SignUpElement from "../app/SignUpElement"
import HumanHelpElement from "../app/HumanHelpElement"

export default class GettingStartedView extends React.Component {

    render () {
        return (
            <div style={{textAlign:"center"}}>
                <div style={{display:"inline-block", marginBottom:"5%"}}>
                    <HumanHelpElement title="Interested in our enterprise plan?" buttonLabel="Talk to us"/>
                </div>
                <SignUpElement signUpTitle="" scrollMarker="bottom-signup-scroll-marker"/>
            </div>
        )
    }
}