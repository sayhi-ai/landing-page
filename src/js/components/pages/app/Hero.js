import React from "react"
import PageContainer from "../../PageContainer"
import SignUpElement from "./elements/SignUpElement"
import manual1 from "../../../../resources/img/Manual1.png"
import manual2 from "../../../../resources/img/Manual2.png"
import Scroll from "react-scroll"

import "../../../../css/hero.css"

export default class Hero extends React.Component {
    
    render() {
        var styles = {
            minHeight: "90vh",
            height: "auto",
            backgroundColor: "#6b6b6b"
        }
        
        var Element = Scroll.Element;

        return (
            <PageContainer styles={styles}>
                <div className="outter">
                    <div className="inner">
                        <div className="hero-title-div">
                            <h1 className="hero-title accent-color">
                                Human responses for your bot
                            </h1>
                            <div className="hero-moto-div">
                                <h4 className="hero-moto">Turn your bot's language into human language</h4>
                            </div>
                        </div>
                        <div className="hero-container">
                            <div className="hero-box">
                                <img src={manual1}/>
                            </div>
                            <Element name="vs-scroll-marker" className="hero-vs-box">
                                VS.
                            </Element>
                            <div className="hero-box">
                                <img src={manual2}/>
                            </div>
                        </div>
                        <SignUpElement signUpTitle="top-signup-scroll-marker-title"
                                       scrollMarker=""/>
                    </div>
                </div>
            </PageContainer>
        )
    }
}