import React from 'react'
import SignUpElement from "../app/SignUpElement"
import PricingTable from './PricingTable'
import HumanHelpElement from "../app/HumanHelpElement"
import PricingDescription from "./PricingDescription"

export default class Pricing extends React.Component {

    render () {
        return (
            <div style={{textAlign:"center"}}>
                <PricingTable />
                <div style={{display:"inline-block", marginBottom:"5%"}}>
                    <HumanHelpElement title="Interested in our enterprise plan?" buttonLabel="Talk to us"/>
                </div>
                <PricingDescription/>
                <SignUpElement signUpTitle="" scrollMarker="bottom-signup-scroll-marker"/>
            </div>
        )
    }
}