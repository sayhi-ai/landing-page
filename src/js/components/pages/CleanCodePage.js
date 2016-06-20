import React from "react"
import PageContainer from "../PageContainer"

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
        var transitionSrc = { __html:transition90};
        if (window.innerWidth > 768) {
            transitionSrc = { __html:transition};
            containerDis = "flex"
            iDis = "flex"
            iHeight = "100%"

        }

        var styles = {
            container: {
                height: "auto",
                display: containerDis,
                WebkitBoxShadow: "0px 1px 10px 0 #404040",
                MozBoxShadow: "0px 1px 10px 0 #404040",
                boxShadow: "0px 1px 10px 0 #404040"
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
            <PageContainer styles={this.state.styles.container}>
                <div className="cleanCodeLeft">
                    <div className="outside">
                        <div className="tr">
                            <div className="title-space">
                                <h1>Turn this...</h1>
                            </div>
                        </div>
                        <div className="tr">
                            <div className="inside">
                        <pre>
                            <code>
                                <div className="typedText code-block text-center old-code">
                                    <div className="text-left">
                                    <span className="greenSyntax">//Array of possible responses</span>
                                    <br/>
                                    var responses = [
                                    <br/>
                                    <span className="orangeSyntax">    “Hi, how are you doing?”</span>
                                    ,
                                    <br/>
                                    <span className="orangeSyntax">    “Hello, what a great day!”</span>
                                    ,
                                    <br/>
                                    <span className="orangeSyntax">    “Good Day, sir!”</span>
                                    <br/>
                                    ];
                                    <br/>
                                    <br/>
                                    <span className="hidden-xs hidden-sm">
                                    <span className="greenSyntax">//Get one of those responses randomly</span>
                                    <br/>
                                    var index = Math.floor(Math.random() * responses.length);
                                    <br/>
                                    var res = responses[index];
                                    </span>
                                    <span className="visible-xs-inline-block visible-sm-inline-block hidden-md hidden-lg">
                                    var res = getRandom(responses);
                                    </span>
                                    <br/>
                                    <br/>
                                    <span className="greenSyntax">//Translate the response</span>
                                    <br/>
                                    res = translator.translate(res);
                                    <br/>
                                    <br/>
                                    <span className="blueSyntax">return</span> res;
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
                            <div className="inside typedText text-center new-code">
                                bot.say(<span className="darkSyntax">"Hi"</span>);
                            </div>
                        </div>
                        <div>

                            <div className="title-space placeholder">
                                <h1>Job?</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>)
    }
}