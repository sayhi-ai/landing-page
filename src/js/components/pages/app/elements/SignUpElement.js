import React from "react"
import PageContainer from "../../../PageContainer"
import TextField from "material-ui/TextField"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"
import FontIcon from "material-ui/FontIcon"

import "../../../../../css/signuppage.css"

export default class SignUpElement extends React.Component {
    render() {
        var styles = {
            minHeight: "10vh",
            height: "auto",
            backgroundColor: "#F9F9F9",
            borderTop: "1px solid #E0E0E0"
        }
        
        return (
            <PageContainer styles={styles} className="material-background">
                <div className="outer">
                    <div className="middle">
                        <div className="login-wrapper text-center" zDepth={5}>
                            <div className="sup-title">
                                <h3 className="sup-title">Want to give it a try?</h3>
                            </div>
                            <div>
                                <div className="name-field">
                                    <TextField floatingLabelText="Name" fullWidth={true}/>
                                </div>
                                <div className="email-field">
                                    <TextField floatingLabelText="Email" type="email" fullWidth={true}/>
                                </div>

                                <div className="sign-up-button">
                                    <RaisedButton label="Sign Up" primary={true} fullWidth={true}
                                                  labelPosition="before" icon={
                                                      <FontIcon className="material-icons">send</FontIcon>
                                                      }/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        )
    }
}