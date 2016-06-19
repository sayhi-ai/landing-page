import React from "react"
import PageContainer from "../PageContainer"

import "../../../css/futurefeaturespage.css"

import image from "../../../resources/img/profile.png"

export default class FutureFeaturesPage extends React.Component {

    render() {
        var styles = {
            minHeight: "75vh",
            height: "auto",
            padding: "5%",
            WebkitBoxShadow: "0px 1px 10px 0 #404040",
            MozBoxShadow: "0px 1px 10px 0 #404040",
            boxShadow: "0px 1px 10px 0 #404040"
        }
        
        return (
            <PageContainer styles={styles}>
                <div className="outter">
                    <div className="inner">
                        <h1 className='title'>Upcoming Features</h1>
                        <div className="upcoming-features">
                            <div className="feature">
                                <h4 className="feature-title">Personality creator</h4>
                                <img className="feature-image" src={image} alt=""/>
                                <p className="feature-explanation">Create a custom personality<br/>for each bot.</p>
                            </div>
                            <div className="feature">
                                <h4 className="feature-title">Language integration</h4>
                                <img className="feature-image" src={image} alt=""/>
                                <p className="feature-explanation">Have your bots answer<br/>in multiple languages.</p>
                            </div>
                            <div className="feature">
                                <h4 className="feature-title">Response generator through deep learning</h4>
                                <img className="feature-image" src={image} alt=""/>
                                <p className="feature-explanation">Say what you want to say exactly the way you want to say it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        )
    }
}