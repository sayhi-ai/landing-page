import React from "react"
import PageContainer from "./PageContainer"
import manual1 from "../../resources/img/Manual1.png"
import manual2 from "../../resources/img/Manual2.png"
import manual3 from "../../resources/img/Manual3.png"

import "../../css/hero.css"

export default class Hero extends React.Component {
    render() {
        var styles = {
            minHeight: "100vh",
            height: "auto"
        }

        return (
            <PageContainer styles={styles}>
                <div className="outter">
                    <div className="inner">
                        <div className="hero-title-div">
                            <h1 className="hero-title">Give your bot a life</h1>
                        </div>                        <div className="upcoming-features">
                            <div className="hero-box">
                                <div className="hero-image">
                                    <img src={manual1}/>
                                    <h4>Give your bot</h4>
                                </div>
                            </div>
                            <div className="hero-box">
                                <div className="hero-image">
                                    <img src={manual2}/>
                                    <h4>Give your bot</h4>
                                </div>
                            </div>
                            <div className="hero-box">
                                <div className="hero-image">
                                    <img src={manual3}/>
                                    <h4>Give your bot</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        )
    }
}