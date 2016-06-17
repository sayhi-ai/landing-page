import React from "react"
import PageContainer from "../PageContainer"
export default class VarietyCodePage extends React.Component {

    render() {
        return (
            <PageContainer padding={this.props.padding}>
                <h1 className='title'><span class="diversifyStyle">Diversify</span> your <br/>bot's responses</h1>
                <div className="varietyExplanation">
                    <p>We provide human responses for your conversational bots. Instead of
                        hard-coding answers, we generate diverse responses so that your 
                        customers never get bored.</p>
                </div>
            </PageContainer>
        )
    }
}