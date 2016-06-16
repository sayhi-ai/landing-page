/**
 * Created by renebrandel on 6/16/16.
 */
import React from "react"
import NavBar from "./NavBar"
import Header from "./Header"
import Portfolio from "./Portfolio"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Favicon from "react-favicon"
import MobileScrollButton from "./MobileScrollButton"
import favicon from "../../resources/img/favicon.png"

export default class Layout extends React.Component {
    render() {
        return (
            <div id="page-top" className="index">
                <Favicon url={favicon}/>
                <NavBar/>
                <MobileScrollButton/>
                <Header/>
                <Portfolio/>
                <About/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}