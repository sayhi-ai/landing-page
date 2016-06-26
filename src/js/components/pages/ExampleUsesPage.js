import React from "react"
import PageContainer from "../PageContainer"
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import TypeWriter from 'react-typewriter';

import "../../../css/exampleusages.css"

export default class ExampleUsesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            typeAnimation: 
                <div>
                    <TypeWriter typing={1} className="eu-typed-text">
                        Example usages
                    </TypeWriter>
                    <span className="eu-typed-text blinking-cursor">|</span>
                </div>
        }
    }

    handleTouchTap(event) {
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

    static delayGen(mean, std, {line, lineIdx, charIdx, defDelayGenerator}) {
        if (lineIdx === 4 && charIdx === 1) {
            return 1000
        } else if (lineIdx === 5 && charIdx === line.length - 1) {
            return 1000
        }
        return defDelayGenerator(mean - 20)
    }
    
    animateText(text) {
        this.setState({
            typeAnimation: 
                <div>
                    {TypeWriter.reset}
                    <TypeWriter typing={1} className="eu-typed-text" ref={TypeWriter.reset}>
                        {text}
                    </TypeWriter>
                    <span className="eu-typed-text blinking-cursor">|</span>
                </div>
        })
    }

    render() {
        var styles = {
            minHeight: "75vh",
            height: "auto",
            padding: "5%",
            paddingBottom: "0",
            backgroundColor: "#F9F9F9"
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
                                anchorOrigin={{horizontal: 'middle', vertical: 'center'}}
                                targetOrigin={{horizontal: 'middle', vertical: 'center'}}
                                onRequestClose={this.handleRequestClose.bind(this)}
                            >
                                <Menu>
                                    <MenuItem
                                        primaryText="hi"
                                        rightIcon={<ArrowDropRight />}
                                        menuItems={[
                                                <MenuItem primaryText="star wars welcome"
                                                onTouchTap={console.log("hi")}
                                                />                                           
                                          ]}
                                    />
                                    <MenuItem primaryText="no-gps"/>
                                    <MenuItem primaryText="new-item-created"/>
                                    <MenuItem primaryText="introduction"/>
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