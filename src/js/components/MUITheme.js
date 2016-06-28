import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class MUITheme extends React.Component {
    render() {
        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: "#19A5E4",
                primary2Color: "#19A5E4",
                primary3Color: "#19A5E4"
            }
        })

        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        {this.props.children}
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }

}