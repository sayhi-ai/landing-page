import React from "react"
import PageContainer from "../PageContainer"
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Typist from "react-typist"

import "../../../css/exampleusages.css"

export default class ExampleUsesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    handleTouchTap(event) {
        console.log("click")
        // This prevents ghost click.
        event.preventDefault()
    
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        })
    }

    handleRequestClose() {
        this.setState({
            open: false
        })
    }

    render() {
        var styles = {
            minHeight: "75vh",
            height: "auto",
            padding: "5%",
            paddingBottom: "0"
        }

        var buttonStyles = {
            height: "auto",
            margin: "0",
            padding: "0",
            lineHeight: "normal"
        }

        var innerButtonStyles = {
            textTransform: "none",
            fontSize: "3em",
            fontFamily: "Monaco, sans-serif",
            textAlign: "center",
            color: "#7ED321",
            height: "auto",
            margin: "0",
            padding: "0",
            lineHeight: "normal"
        }

        return (
            <PageContainer styles={styles}>
                <div className="eu-outter">
                    <div className="eu-inner">
                        <Typist className="typedText" cursor={{element: '|', hideWhenDone: true}}
                                delayGenerator={Signup.delayGen} onTypingDone={this.onTypingDone.bind(this)}>

                        </Typist>
                        <div className="eu-example-features">
                            bot.<span className="blue-syntax">say</span>(
                            <RaisedButton
                                onMouseDown={this.handleTouchTap.bind(this)}
                                label={<span className="eu-button-style green-syntax">Click me</span>}
                            />
                            <Popover
                                open={this.state.open}
                                anchorEl={this.state.anchorEl}
                                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                onRequestClose={this.handleRequestClose.bind(this)}
                            >
                                <Menu>
                                    <MenuItem primaryText="Refresh" />
                                    <MenuItem primaryText="Help &amp; feedback" />
                                    <MenuItem primaryText="Settings" />
                                    <MenuItem primaryText="Sign out" />
                                </Menu>
                            </Popover>
                            )
                        </div>
                    </div>
                </div>
            </PageContainer>
        )
    }
}