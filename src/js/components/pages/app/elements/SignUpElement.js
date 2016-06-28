import React from "react"
import PageContainer from "../../../PageContainer"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import FontIcon from "material-ui/FontIcon"
import Scroll from "react-scroll"

import "../../../../../css/signuppage.css"

export default class SignUpElement extends React.Component {
    
    scrollToSignUp() {
        var scroller = Scroll.scroller;
        scroller.scrollTo("vs-scroll-marker", {
            duration: 1500,
            delay: 100,
            smooth: true
        })
    }

    render() {
        var styles = {
            minHeight: "10vh",
            height: "auto",
            backgroundColor: "#F9F9F9",
            borderTop: "1px solid #E0E0E0"
        }

        var Element = Scroll.Element;

        return (
            <PageContainer styles={styles} className="material-background">
                <div className="outer">
                    <div className="middle">
                        <div className="login-wrapper text-center" zDepth={5}>
                            <Element name={this.props.scrollMarker}>
                            <div classID={this.props.signUpTitle} className="sup-title">
                                <h3 onClick={this.scrollToSignUp.bind(this)}className="sup-title">Want to give it a try?</h3>
                            </div>
                            <div>
                                <div className="email-field">
                                    <TextField floatingLabelText="Email" type="email" fullWidth={true}/>
                                </div>

                                <div className="sign-up-button">
                                    <RaisedButton label="Request early access"
                                                  primary={true}
                                                  fullWidth={true}
                                                  labelPosition="before" icon={
                                                      <FontIcon style={{marginRight: "6px"}}
                                                       className="material-icons">send</FontIcon>
                                                      }/>
                                </div>
                            </div>
                            </Element>
                        </div>
                    </div>
                </div>
            </PageContainer>
        )
    }
}