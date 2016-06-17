/**
 * Created by renebrandel on 6/16/16.
 */
import React from "react"
import PageContainer from "../PageContainer"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from "material-ui/TextField"

export default class Contact extends React.Component {
    render() {
        return (
            <PageContainer>

                <MuiThemeProvider>
                    <TextField floatingLabelText="E-Mail"/>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <TextField floatingLabelText="Password" type="password"/>
                </MuiThemeProvider>
            </PageContainer>
        )
    }
}