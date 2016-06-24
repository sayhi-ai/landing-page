import React from "react"
import PageContainer from "./PageContainer"
import HeroLabel from "./HeroLabel"
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
                            <h1 className="hero-title">Ok bot, let's talk</h1>
                        </div>
                        <div className="hero-container">
                            <div className="hero-box">
                                <div className="hero-image">
                                    <img src={manual1}/>
                                    <HeroLabel icon={{__html: number1}}>Bring your bot</HeroLabel>
                                </div>
                            </div>
                            <div className="hero-box">
                                <div className="hero-image">
                                    <img src={manual2}/>
                                    <HeroLabel icon={{__html: number2}}>We apply magic</HeroLabel>
                                </div>
                            </div>
                            <div className="hero-box">
                                <div className="hero-image">
                                    <img src={manual3}/>
                                    <HeroLabel icon={{__html: number3}}>It's alive!</HeroLabel>
                                </div>
                            </div>
                        </div>
                        <div className="hero-moto-div">
                            <h4 className="hero-title">Turn your bot's language into human language</h4>
                        </div>
                    </div>
                </div>
            </PageContainer>
        )
    }
}