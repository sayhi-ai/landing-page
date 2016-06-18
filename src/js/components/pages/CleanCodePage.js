import React from "react"
import PageContainer from "../PageContainer"
import transition from "../../../resources/img/transition.svg"

export default class CleanCodePage extends React.Component {

    render() {
        return (
            <PageContainer padding={this.props.padding}>
                <div className="cleanCodeLeft">
                    <div>
                        <div className="outside">
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
                    <i dangerouslySetInnerHTML={{ __html:transition}}/>
                </div>
                <div className="cleanCodeRight">
                    <div className="outside">
                        <div className="inside typedText text-center">
                            bot.say(<span className="darkSyntax">"Hi"</span>);
                        </div>
                    </div>
                </div>
            </PageContainer>)
    }
}