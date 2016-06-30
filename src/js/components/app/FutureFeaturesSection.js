import React from "react"
import PageContainer from "../PageContainer"

import "../../../css/futurefeaturespage.css"

import personality from "../../../resources/img/personality.png"
import language from "../../../resources/img/language.png"
import deeplearning from "../../../resources/img/deeplearning.png"

export default class FutureFeaturesSection extends React.Component {

    render() {
        var styles = {
            minHeight: "75vh",
            height: "auto",
            padding: "5%",
            backgroundColor: "#F5F5F5",
            borderTop: "1px solid #E0E0E0"
        }
        
        return (
            <PageContainer styles={styles}>
                <div className="ffp-outter">
                    <div className="ffp-inner">
                        <h1 className='ffp-title'>Upcoming Features</h1>
                        <div>
                            <div className="ffp-feature">
                                <h3 className="ffp-feature-title">Personality creator</h3>
                                <img className="ffp-feature-image" src={personality} alt=""/>
                                <p className="ffp-feature-explanation">Create a custom personality<br/>for each bot.</p>
                            </div>
                            <div className="ffp-feature">
                                <h3 className="ffp-feature-title">Language integration</h3>
                                <img className="ffp-feature-image" src={language} alt=""/>
                                <p className="ffp-feature-explanation">Have your bots answer<br/>in multiple languages.</p>
                            </div>
                            <div className="ffp-feature">
                                <h3 className="ffp-feature-title">Neural Response Network</h3>
                                <img className="ffp-feature-image" src={deeplearning} alt=""/>
                                <p className="ffp-feature-explanation">Generate similar responses<br/>based on your input.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        )
    }
}