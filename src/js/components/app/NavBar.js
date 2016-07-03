import React from "react"
import { Link } from 'react-router'
import Scroll from "react-scroll"
import logo from "../../../resources/img/logo.png"

import "../../../css/navbar.css"

export default class NavBar extends React.Component {
    constructor() {
        super()
        this.mounted = false // avoid calling on unmounted component
        this.state = {
            navbar: ""
        }

        this.isFirefox = typeof InstallTrigger !== 'undefined'
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this))
        this.mounted = true
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this))
        this.mounted = false
    }

    handleScroll(event) {
        if (this.mounted) {
            let scrollTop = 0;
            if (this.isFirefox) {
                scrollTop = event.pageY;
            } else {
                scrollTop = event.srcElement.body.scrollTop
            }
            let itemTranslate = Math.min(0, scrollTop / 3 - 60)

            var titleStyle, linkStyle, logoStyle
            if (this.props.inverted === "false") {
                titleStyle = {color: "#19A5E4"}
                linkStyle = {color: "#4A4A4A"}
                logoStyle = {
                    backgroundImage: "url(" + logo + ")"
                }
            } else {
                titleStyle = {}
                linkStyle = {}
                logoStyle = {}
            }

            if (itemTranslate == 0) {
                this.setState({
                    navbar: "opaque-navbar",
                    titleStyle: {},
                    linkStyle: {},
                    logoStyle: {}
                });
            } else {
                this.setState({
                    navbar: "",
                    titleStyle: titleStyle,
                    linkStyle: linkStyle,
                    logoStyle: logoStyle
                });
            }
        }
    }

    scrollToSignUp() {
        var scroller = Scroll.scroller;
        scroller.scrollTo('bottom-signup-scroll-marker', {
            duration: 1500,
            delay: 100,
            smooth: true
        })
    }

    render() {
        return (
            <div className={"navbar noselect mui--z1 " + this.state.navbar} id="navbar">
                <p className="navbar-left navbar-inline">
                    <Link to="/" style={this.state.titleStyle}>
                        <span id="navbar-logo" style={this.state.logoStyle}></span>
                        <span className="header-font">sayHi.</span>
                        <span className="hero-font">ai</span>
                    </Link>
                </p>
                <p className="navbar-right navbar-inline">
                    <Link to="pricing" style={this.state.linkStyle}
                       className="navbar-current">Pricing</Link>
                    <a style={this.state.linkStyle}
                       onClick={this.scrollToSignUp.bind(this)}
                       className="navbar-current">Sign up</a>
                </p>
            </div>
        )
    }
}