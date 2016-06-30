import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import FontIcon from "material-ui/FontIcon"

import "../../../../css/humanhelpelement.css"
import Smooch from "smooch"
export default class HumanHelpElement extends React.Component {
    
    handleClick() {
        Smooch.open()
    }
    
    render() {
        return (
            <div>
                <div>
                    <div className="hhe-question-div">
                        <h3>Got a question?</h3>
                    </div>
                    <div className="hhe-button">
                        <RaisedButton label="Talk to a human"
                                      primary={true}
                                      fullWidth={true}
                                      onClick={this.handleClick.bind(this)}
                                      />
                    </div>
                </div>
            </div>
        )
    }
}