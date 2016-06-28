import React from "react"
import { Link } from 'react-router'

import "../../css/navbar.css"
import Scroll from "react-scroll"

export default class NavBar extends React.Component {
    constructor() {
        super()
        
        this.state = {
            navbar: ""
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop
        let itemTranslate = Math.min(0, scrollTop / 3 - 60)

        if (itemTranslate == 0) {
            this.setState({
                navbar: "opaque-navbar"
            });
        } else {
            this.setState({
                navbar: ""
            });
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
                    <Link to="/">
                        <span id="navbar-logo"></span>
                        <span className="header-font">sayHi.</span>
                        <span className="hero-font">ai</span>
                    </Link>
                </p>
                <p className="navbar-right navbar-inline">
                    <a onClick={this.scrollToSignUp.bind(this)} className="navbar-current">Sign up</a>
                </p>
            </div>
        )
    }
}