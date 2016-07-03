import React from 'react'
import MuiTheme from "../MuiTheme"
import NavBar from "../NavBar"
import Footer from "../AppFooter"
import SignUpElement from "../SignUpElement"
import PricingTable from './PricingTable'

export default class Pricing extends React.Component {

    render () {
        return (
            <MuiTheme>
                <NavBar />
                <PricingTable />
                <SignUpElement signUpTitle="" scrollMarker="bottom-signup-scroll-marker"/>
                <Footer/>
            </MuiTheme>
        )
    }
}