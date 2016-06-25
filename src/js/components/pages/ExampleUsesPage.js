import React from "react"
import PageContainer from "../PageContainer"
import FlatButton from 'material-ui/FlatButton';

import "../../../css/exampleusages.css"

export default class ExampleUsesPage extends React.Component {
    render() {
        var styles = {
            minHeight: "75vh",
            height: "auto",
            padding: "5%"
        }

        var buttonStyle = {
            textTransform: 'lowercase'
        }

        return (
            <PageContainer styles={styles}>
                <div className="outter">
                    <div className="inner">
                        <h1 className='title'>Example Usages</h1>
                        <div className="example-features">
                            <div>
                                <FlatButton style={buttonStyle} className="buttonStyle" label={".say(\"hello\", \"star-wars\")"} />
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        )
    }
}