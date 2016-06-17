import React from "react"
import NavBar from "./NavBar"
import Header from "./Header"
import CleanCodePage from "./pages/CleanCodePage"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Favicon from "react-favicon"
import MobileScrollButton from "./MobileScrollButton"
import SignUp from "./pages/SignUp"
import favicon from "../../resources/img/favicon.png"
import Smooch from "smooch"

export default class Layout extends React.Component {
    constructor() {
        super()
        Smooch.init({
            appToken: "3d081wby5cpnrvud7dw9vbwrm"
        })
    }
    render() {
        return (
            <div id="page-top" className="index">
                <Favicon url={favicon}/>
                <NavBar/>
                <MobileScrollButton/>
                <Header/>
                <CleanCodePage/>
                <About/>
                <Contact/>
                <SignUp />
                <Footer/>
            </div>
        )
    }
}