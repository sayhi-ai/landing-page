/**
 * Created by renebrandel on 6/16/16.
 */
import React from 'react'
import NavBarTitle from './NavBarTitle'

export default class NavBar extends React.Component {
    constructor() {
        super()
    }
    render() {
        var style = {
            textTransform: "uppercase",
            backgroundColor: "#2C3E50",
            height: "320px",
            fontWeight: "700",
            padding: "25px 0",
            position: "fixed",
            right: "0",
            left: "0",
            marginBottom: "320px"
        }
        return (
            <div style={style}>
                <NavBarTitle>MakeYourBot.Cool</NavBarTitle>
            </div>
        )
    }
}