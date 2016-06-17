import React from "react"
import PageContainer from "../PageContainer"
export default class FutureFeaturesPage extends React.Component {

    render() {
        return (
            <PageContainer padding={this.props.padding}>
                <h1 className='title'>Upcoming Features</h1>
                <div className="upcomingFeatures">
                    <div className="emotionFeature"></div>
                    <div className=""></div>
                    <div className="deepLearning"></div>
                </div>
            </PageContainer>
        )
    }
}