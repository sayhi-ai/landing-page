import React from "react"
import PageContainer from "../PageContainer"
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Typist from "react-typist"
import TypeWriter from 'react-typewriter';

import "../../../css/exampleusages.css"

export default class ExampleUsesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            typeAnimation:
                <div>
                    <TypeWriter typing={1} className="eu-typed-text" ref={TypeWriter.reset}>
                        Example usages
                    </TypeWriter>
                    <span className="eu-typed-text blinking-cursor">|</span>
                </div>
        }
    }

    handleTouchTap(event) {
        console.log("click")
        // This prevents ghost click.
        event.preventDefault()
    
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
            typeAnimation:
                <div>
                    {TypeWriter.reset}
                    <TypeWriter typing={1} className="eu-typed-text" ref={TypeWriter.reset}>
                        Click me
                    </TypeWriter>
                    <span className="eu-typed-text blinking-cursor">|</span>
                </div>


    })
    }

    handleRequestClose() {
        this.setState({
            open: false
        })
    }

    static delayGen(mean, std, {line, lineIdx, charIdx, defDelayGenerator}) {
        if (lineIdx === 4 && charIdx === 1) {
            return 1000
        } else if (lineIdx === 5 && charIdx === line.length - 1) {
            return 1000
        }
        return defDelayGenerator(mean - 20)
    }

    onTypingDone() {
        
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
                        <div className="eu-typed-text-div">
                            {this.state.typeAnimation}
                        </div>
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
                            );
                        </div>
                    </div>
                </div>
            </PageContainer>
        )
    }
}