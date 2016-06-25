import React from "react"
import PageContainer from "../PageContainer"
import Paper from "material-ui/Paper"
import diversity from "../../../resources/img/diversity.png"

import "../../../css/varietycodepage.css"

export default class VarietyCodePage extends React.Component {

    render() {
        var styles = {
            padding: "5%",
            height: "auto"
        }

        return (
            <PageContainer styles={styles}>
                <div className="vcp-content">
                    <h1 className='vcp-title'><span class="vcp-diversify">Diversify</span> your <br/>bot's responses
                    </h1>
                    <div className="vcp-explanation">
                        We provide human responses for your conversational bots. Instead of
                            hard-coding answers, we generate diverse responses so that your
                            customers never get bored again.
                    </div>
                </div>
                <div className="vcp-img-container">
                    <Paper zDepth="5">
                        <img className="vcp-img" src={diversity}/>
                    </Paper>
                </div>
            </PageContainer>
        )
    }
}