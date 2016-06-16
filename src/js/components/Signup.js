import React from "react"
import ReactDOM from "react-dom"
import Typist from 'react-typist'

export default class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            messenger: null
        }
    }

    static delayGen(mean, std, {line, lineIdx, charIdx, defDelayGenerator}) {
        if (lineIdx === 4 && charIdx === 1) {
            return 1000
        } else if (lineIdx === 5 && charIdx === line.length - 1) {
            return 1000
        }
        return defDelayGenerator(mean - 20)
    }

    onTypingDone() {
        this.setState({
            messenger: 
                <div className="messenger">
                    <div className="messenger-border">
                
                    </div>
                </div>
        })
    }

    render() {

        return (
            <div className="signup">
                <div className="editor">
                    <div className="innerEditor">
                        <Typist className="typedText" cursor={{element: '|', hideWhenDone: true}}
                                delayGenerator={Signup.delayGen} onTypingDone={this.onTypingDone.bind(this)}>
                            bot.<span className="blueSyntax">is</span>(<span className="orangeSyntax">"Bro"</span>); 
                            <span className="greenSyntax"> //Bot will talk like a bro</span>
                            <br/>
                            bot.<span className="blueSyntax">say</span>(<span className="orangeSyntax">"EarlyAccess"</span>);
                        </Typist>
                    </div>
                </div>
                {this.state.messenger}
            </div>
        )
    }
}