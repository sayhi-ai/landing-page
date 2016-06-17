import React from "react"
import PageContainer from "../PageContainer"

import image from "../../../resources/img/profile.png"


export default class FutureFeaturesPage extends React.Component {

    render() {
        return (
            <PageContainer padding={this.props.padding}>
                <h1 className='title'>Upcoming Features</h1>
                <div className="upcomingFeatures">
                    <div className="feature">
                        <img className="featureImage" src={image} alt=""/>
                    </div>
                    <div className="feature">
                        <img className="featureImage" src={image} alt=""/>
                    </div>
                    <div className="feature">
                        <img className="featureImage" src={image} alt=""/>
                    </div>
                </div>
            </PageContainer>
        )
    }
}