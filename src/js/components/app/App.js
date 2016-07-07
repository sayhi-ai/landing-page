import React, { PropTypes } from 'react'
import NavBar from "../app/NavBar"
import MuiTheme from "../app/MuiTheme"
import Footer from "../app/AppFooter"
import Smooch from "smooch"
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class App extends React.Component {
    
    static propTypes = {
        children: PropTypes.element.isRequired
    }

    constructor() {
        super()
        Smooch.init({
            appToken: "3d081wby5cpnrvud7dw9vbwrm",
            customText: {
                headerText: 'Got a question?',
                inputPlaceholder: 'Type a message...',
                sendButtonText: 'Send'
            },
            emailCaptureEnabled: true
        })
        
        injectTapEventPlugin();
    }
    
    render () {
        return (
            <MuiTheme>
                <NavBar inverted="true"/>
                {this.props.children}
                <Footer/>
            </MuiTheme>
        )
    }
}