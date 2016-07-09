import React from "react"
import PageContainer from "./PageContainer"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import FontIcon from "material-ui/FontIcon"
import Scroll from "react-scroll"
import Snackbar from "material-ui/Snackbar"

import request from "request"

import "../../../css/signuppage.css"


export default class SignUpElement extends React.Component {

    constructor() {
        super()
        this.state = {
            errorText: "",
            email: "",
            open: false,
            signedUp: false
        }
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    handleEmailChanged(e) {
        this.setState({
            errorText: "",
            email: e.target.value
        })
    }

    signUp() {
        if (this.validateEmail(this.state.email)) {
            let email = this.state.email;
            request.get("http://sayhi-ai.azurewebsites.net/hello/" + email)
            this.setState({
                email: "",
                errorText: "",
                open: true,
                signedUp: true
            })
        }
        else {
            this.setState({
                errorText: "Sorry! Please check for a typo :-)"
            })
        }
    }

    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };

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
            height: "auto",
            overflow: "hidden",
            transition: "height .5s",
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
                                        <TextField floatingLabelText="Email" type="email" fullWidth={true}
                                                   value={this.state.email}
                                                   onChange={this.handleEmailChanged.bind(this)}
                                                   errorText={this.state.errorText} ref="email"/>
                                    </div>

                                    <div className="sign-up-button">
                                        <RaisedButton label="Request early access"
                                                      primary={true}
                                                      onTouchTap={this.signUp.bind(this)}
                                                      fullWidth={true}
                                                      labelPosition="before" icon={
                                                      <FontIcon style={{marginRight: "6px"}}
                                                       className="material-icons"/>
                                                      }/>
                                    </div>
                                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                                        <input type="text" name="b_91105fa973023812cf53dce73_5ddf44500c" tabIndex="-1"
                                               id="validate" ref="validated"/>
                                    </div>
                                </div>
                            </Element>
                        </div>
                    </div>
                </div>
                <Snackbar message="We will process your request as soon as possible." bodyStyle={{backgroundColor: "#27ae60"}}
                          autoHideDuration={8000} open={this.state.open}
                          handleClose={this.handleRequestClose.bind(this)}/>
            </PageContainer>
        )
    }
}