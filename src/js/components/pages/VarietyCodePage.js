import React from "react"
import PageContainer from "../PageContainer"

import "../../../css/varietycodepage.css"

export default class VarietyCodePage extends React.Component {

    render() {
        var styles = {
            padding: "5%",
            height: "75vh"
        }

        return (
            <PageContainer styles={styles}>
                <h1 className='title'><span class="diversifyStyle">Diversify</span> your <br/>bot's responses</h1>
                <div className="varietyExplanation">
                    <p>We provide human responses for your conversational bots. Instead of
                        hard-coding answers, we generate diverse responses so that your 
                        customers never get bored again.</p>
                </div>
            </PageContainer>
        )
    }
}