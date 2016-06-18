import React from "react"
import PageContainer from "../PageContainer"

import "../../../css/cleancodepage.css"

import transition from "../../../resources/img/transition.svg"

export default class CleanCodePage extends React.Component {

    render() {
        var styles = {
            container: {
                height: "auto",
                display: "flex"
            },
            i: {
                height: "100%",
                display: "flex"
            }
        }

        return (
            <PageContainer styles={styles.container}>
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
                                <div className="typedText text-left old-code">
                                    <span className="greenSyntax">//Array of possible responses</span>
                                    <br/>
                                    var responses = [
                                    <br/>
                                    <span className="orangeSyntax">    “You don’t have a GPS connection.”</span>
                                    ,
                                    <br/>
                                    <span className="orangeSyntax">    “No satellites seems to able to connect.”</span>
                                    ,
                                    <br/>
                                    <span className="orangeSyntax">    “Are you sure you have GPS turned on?”</span>
                                    <br/>
                                    ];
                                    <br/>
                                    <br/>
                                    <span className="greenSyntax">//Get one of those responses randomly</span>
                                    <br/>
                                    var index = Math.floor(Math.random() * responses.length);
                                    <br/>
                                    var response = responses[index];
                                    <br/>
                                    <br/>
                                    <span className="greenSyntax">///Translate the response</span>
                                    <br/>
                                    var res = translator.translate(response);
                                    <br/>
                                    <br/>
                                    <span className="blueSyntax">return</span> res;
                                </div>
                            </code>
                        </pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cleanCodeMiddle">
                    <i style={styles.i} dangerouslySetInnerHTML={{ __html:transition}}/>
                </div>
                <div className="cleanCodeRight">
                    <div className="outside">
                            <div className="title-space">
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