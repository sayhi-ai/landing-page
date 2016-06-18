import React from "react"
import PageContainer from "../PageContainer"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from "material-ui/TextField"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"
import FontIcon from "material-ui/FontIcon"

import "../../../css/signuppage.css"

export default class Contact extends React.Component {
    render() {
        var styles = {
            padding: "5%",
            height: "75vh"
        }
        
        return (
            <PageContainer styles={styles} className="material-background">
                <div className="outer">
                    <div className="middle">
                        <MuiThemeProvider>
                            <Paper className="login-wrapper text-center" zDepth={5}>
                                <div className="text-center">
                                    <h2>Sign Up for Beta</h2>
                                    <hr className="star-primary"/>
                                    <h3>Beta users get a FREE 2 MONTHS trial</h3>
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
                            </Paper>
                        </MuiThemeProvider>
                    </div>
                </div>
            </PageContainer>
        )
    }
}