import React from "react"
import PageContainer from "./PageContainer"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import FontIcon from "material-ui/FontIcon"
import Scroll from "react-scroll"

import "../../css/signuppage.css"

export default class SignUpElement extends React.Component {
    
    scrollToSignUp() {
        if (this.props.signUpTitle === "top-signup-scroll-marker-title") {
            var scroller = Scroll.scroller;
            scroller.scrollTo("vs-scroll-marker", {
                duration: 750,
                delay: 100,
                smooth: true
            })
        }
    }

    render() {
        var styles = {
            minHeight: "10vh",
            height: "auto",
            backgroundColor: "#F9F9F9",
            borderTop: "1px solid #E0E0E0"
        }

        let Element = Scroll.Element;

        return (
            <PageContainer styles={styles} className="material-background">
                <div className="outer">
                    <div className="middle">
                        {this.props.children}
                        <div className="login-wrapper text-center" zDepth={5}>
                            <Element name={this.props.scrollMarker}>
                            <div className="sup-title-div">
                                <h3 onClick={this.scrollToSignUp.bind(this)}
                                    className={"sup-title " + this.props.signUpTitle}>
                                    Want to give it a try?
                                </h3>
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