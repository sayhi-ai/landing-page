import React from "react"
import PageContainer from "../PageContainer"
import Paper from "material-ui/Paper"
import diversity from "../../../resources/img/diversity.png"

import "../../../css/varietycodepage.css"

export default class VarietyCodePage extends React.Component {

    render() {
        var styles = {
            padding: "5%",
            height: "auto",
            backgroundColor: "#F5F5F5",
            borderTop: "1px solid #E0E0E0"
        }

        return (
            <PageContainer styles={styles}>
                <h1 className='vcp-title'><span class="accent-color header-font">Diversify</span> your bot's responses</h1>
                <div className="vcp-content">
                    <div className="vcp-explanation">
                        We provide human responses for your conversational bots. Instead of
                            hard-coding answers, we generate diverse responses so that your
                            customers never get bored again.
                    </div>
                </div>
                <div className="vcp-img-container">
                    <Paper zDepth={5}>
                        <img className="vcp-img" src={diversity}/>
                    </Paper>
                </div>
            </PageContainer>
        )
    }
}