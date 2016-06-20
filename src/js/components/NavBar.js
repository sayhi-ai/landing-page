import React from "react"
import { Link } from 'react-router'

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

    render() {
        return (
            <div className={"navbar noselect mui--z1 " + this.state.navbar} id="navbar">
                <p className="navbar-left navbar-inline">
                    <span id="navbar-logo"></span>
                    <Link to="/">Title</Link>
                </p>
                <p className="navbar-right navbar-inline">
                    <Link to="/" className="navbar-current">Pricing</Link>
                    <Link to="/" className="navbar-current">About</Link>
                    <Link to="/" className="navbar-current">Sign-Up</Link>
                </p>
            </div>
        )
    }
}