/**
 * Created by renebrandel on 6/16/16.
 */
import React from 'react'
import NavBarTitle from './NavBarTitle'

export default class NavBar extends React.Component {

    render() {
        var style = {
            textTransform: "uppercase",
            backgroundColor: "#2C3E50",
            maxHeight: "320px",
            fontWeight: "700",
            padding: "25px 0",
            position: "fixed",
            right: "0",
            left: "0"
        }
            return (
                <div {style}>
                    <NavBarTitle>MakeYourBot.Cool</NavBarTitle>
                </div>
            )
    }
}