import React from "react"
import PageContainer from "./PageContainer"
import manual1 from "../../resources/img/Manual1.png"
import manual2 from "../../resources/img/Manual2.png"
import manual3 from "../../resources/img/Manual3.png"

import "../../css/hero.css"

export default class Hero extends React.Component {
    render() {
        var styles = {
            minHeight: "90vh",
            height: "auto"
        }

        return (
            <PageContainer styles={styles}>
                <div className="hero-title-div">
                    <h1 className="hero-title">Give your bot a life</h1>
                </div>
                <div className="hero-outter-table">
                    <div className="hero-outter-table-cell">
                        <div className="hero-table">
                            <div className="hero-image-row">
                                <div className="hero-image">
                                    <img src={manual1}/>
                                </div>
                                <div className="hero-image">
                                    <img src={manual2}/>
                                </div>
                                <div className="hero-image">
                                    <img src={manual3}/>
                                </div>
                            </div>
                            <div className="hero-label-row">
                                <div className="hero-label">
                                    <h4>Give your bot</h4>
                                </div>
                                <div className="hero-label">
                                    <h4>Magic!</h4>
                                </div>
                                <div className="hero-label">
                                    <h4>Get your Bot</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        )
    }
}