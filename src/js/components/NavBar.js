import React from "react"

export default class NavBar extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="navbar noselect mui--z1 " id="navbar">
                <p className="navbar-left navbar-inline">
                    <span id="navbar-logo"></span>
                    <a href="/">enCourage</a>
                </p>
                <p className="navbar-right navbar-inline">
                    <a className="navbar-current" href="/">Home</a>
                    <a className="" href="/App">App</a>
                    <a className="" href="/Company/News">News</a>
                    <a className="" href="/Company">Team</a>
                </p>
            </div>
        )
    }
}