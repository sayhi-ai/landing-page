import React from "react"
import PageContainer from "../../PageContainer"
import HeroLabel from "./elements/HeroLabel"
import SignUpElement from "./elements/SignUpElement"
import manual1 from "../../../../resources/img/Manual1.png"
import manual2 from "../../../../resources/img/Manual2.png"
import manual3 from "../../../../resources/img/Manual3.png"
import number1 from "../../../../resources/img/number1.svg"
import number2 from "../../../../resources/img/number2.svg"
import number3 from "../../../../resources/img/number3.svg"

import "../../../../css/hero.css"

export default class Hero extends React.Component {
    render() {
        var styles = {
            minHeight: "90vh",
            height: "auto",
            backgroundColor: "#6b6b6b"
        }

        return (
            <PageContainer styles={styles}>
                <div className="outter">
                    <div className="inner">
                        <div className="hero-title-div">
                            <h1 className="hero-title">
                                <span className="">Human responses</span><br/> for your bot
                            </h1>
                            <div className="hero-moto-div">
                                <h4 className="hero-moto">Turn your bot's language into human language</h4>
                            </div>
                        </div>
                        <div className="hero-container">
                            <div className="hero-box">
                                <img src={manual1}/>
                            </div>
                            <div className="hero-vs-box">
                                VS.
                            </div>
                            <div className="hero-box">
                                <img src={manual2}/>
                            </div>
                        </div>
                        <SignUpElement/>
                    </div>
                </div>
            </PageContainer>
        )
    }
}