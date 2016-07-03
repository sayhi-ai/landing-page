import React from 'react'
import MuiTheme from "../MuiTheme"
import NavBar from "../NavBar"
import Footer from "../AppFooter"
import SignUpElement from "../SignUpElement"
import PricingTable from './PricingTable'
import HumanHelpElement from "../HumanHelpElement"

export default class Pricing extends React.Component {

    render () {
        return (
            <MuiTheme>
                <div style={{textAlign:"center"}}>
                    <NavBar inverted="false"/>
                    <PricingTable />
                    <div style={{display:"inline-block", marginBottom:"5%"}}>
                        <HumanHelpElement title="Interested in our enterprise plan?" buttonLabel="Talk to us"/>
                    </div>
                    <SignUpElement signUpTitle="" scrollMarker="bottom-signup-scroll-marker"/>
                    <Footer/>
                </div>
            </MuiTheme>
        )
    }
}