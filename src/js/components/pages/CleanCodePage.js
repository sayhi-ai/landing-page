import React from "react"
import PageContainer from "../PageContainer"
import WaveDivider from "../WaveDivider"

import "../../../css/cleancodepage.css"

import transition from "../../../resources/img/transition.svg"
import transition90 from "../../../resources/img/transition-90.svg"

export default class CleanCodePage extends React.Component {

    constructor() {
        super()
        this.state = this.getStateForResize()
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    getStateForResize() {
        var containerDis = "block"
        var iDis = "block"
        var iHeight = "auto"
        var transitionSrc = {__html: transition90};
        if (window.innerWidth >= 768) {
            transitionSrc = {__html: transition};
            containerDis = "flex"
            iDis = "flex"
            iHeight = "100%"

        }

        var styles = {
            container: {
                height: "auto",
                minHeight: "85vh",
                display: containerDis,
                WebkitBoxShadow: "0px 0px 70px 0px rgba(179,177,179,1)",
                MozBoxShadow: "0px 0px 70px 0px rgba(179,177,179,1)",
                boxShadow: "0px 0px 70px 0px rgba(179,177,179,1)"
            },
            i: {
                height: iHeight,
                display: iDis
            }
        }
        return {
            styles,
            trans: transitionSrc
        }
    }

    handleResize(e) {
        this.setState(this.getStateForResize())
    }

    render() {

        return (
            <PageContainer>
                <div style={this.state.styles.container}>
                    <div className="cleanCodeLeft">
                        <div className="outside">
                            <div className="tr" style={{height : 0}}>
                                <div className="title-space">
                                    <h1>Turn this...</h1>
                                </div>
                            </div>
                            <div className="tr">
                                <div className="inside">
                        <pre>
                            <code>
                                <div className="ccp-typed-text code-block text-center old-code">
                                    <div className="text-left">
                                    <span className="green-syntax">//Array of possible responses</span>
                                    <br/>
                                    var responses = [
                                    <br/>
                                    <span className="orange-syntax">    “Hi, how are you doing?”</span>
                                    ,
                                    <br/>
                                    <span className="orange-syntax">    “Hello, what a great day!”</span>
                                    ,
                                    <br/>
                                    <span className="orange-syntax">    “Good Day, sir!”</span>
                                    <br/>
                                    ];
                                    <br/>
                                    <br/>
                                    <span className="hidden-xs hidden-sm">
                                    <span className="green-syntax">//Get one of those responses randomly</span>
                                    <br/>
                                    var index = Math.floor(Math.random() * responses.length);
                                    <br/>
                                    var res = responses[index];
                                    </span>
                                    <span
                                        className="visible-xs-inline-block visible-sm-inline-block hidden-md hidden-lg">
                                    var res = getRandom(responses);
                                    </span>
                                    <br/>
                                    <br/>
                                    <span className="green-syntax">//Translate the response</span>
                                    <br/>
                                    res = translator.translate(res);
                                    <br/>
                                    <br/>
                                    <span className="blue-syntax">return</span> res;
                                    </div>
                                </div>
                            </code>
                        </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cleanCodeMiddle">
                        <i style={this.state.styles.i} dangerouslySetInnerHTML={this.state.trans}/>
                    </div>
                    <div className="cleanCodeRight">
                        <div className="outside">
                            <div className="title-space title-grey">
                                <h1>...into this!</h1>
                            </div>
                        <div className="tr">
                            <div className="inside ccp-typed-text text-center new-code">
                                bot.say(<span className="dark-syntax">"Hi"</span>);
                            </div>
                        </div>
                        <div>

                                <div className="title-space placeholder">
                                    <h1>Job?</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>)
    }
}