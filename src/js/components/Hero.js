import React from "react"
import PageContainer from "./PageContainer"
import manual1 from "../../resources/img/Manual1.png"
import manual2 from "../../resources/img/Manual2.png"
import manual3 from "../../resources/img/Manual3.png"
import number1 from "../../resources/img/number1.svg"
import number2 from "../../resources/img/number2.svg"
import number3 from "../../resources/img/number3.svg"

import "../../css/hero.css"

export default class Hero extends React.Component {
    render() {
        var styles = {
            minHeight: "100vh",
            height: "auto",
            backgroundColor: "#F5F5F5"
        }

        return (
            <PageContainer styles={styles}>
                <div className="outter">
                    <div className="inner">
                        <div className="hero-title-div">
                            <h1 className="hero-title">Give your bot a life</h1>
                        </div>                        
                        <div className="hero-container">
                            <div className="hero-box">
                                <div className="hero-image">
                                    <img src={manual1}/>
                                    <span className="hero-label">
                                        <i dangerouslySetInnerHTML={{__html: number1}}></i>
                                        <h4 className="hero-text-label">Bring your bot</h4>
                                    </span>
                                </div>
                            </div>
                            <div className="hero-box">
                                <div className="hero-image">
                                    <img src={manual2}/>
                                    <span className="hero-label">
                                        <i dangerouslySetInnerHTML={{__html: number2}}></i>
                                        <h4 className="hero-text-label">We apply magic</h4>
                                    </span>
                                </div>
                            </div>
                            <div className="hero-box">
                                <div className="hero-image">
                                    <img src={manual3}/>
                                    <span className="hero-label">
                                        <i dangerouslySetInnerHTML={{__html: number3}}></i>
                                        <h4 className="hero-text-label">It's alive!</h4>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-moto-div">
                            <h4 className="hero-title">Bots speaking like humans</h4>
                        </div>
                    </div>
                </div>
            </PageContainer>
        )
    }
}