import React from "react"
import Typist from 'react-typist'

var Signup = React.createClass({

    delayGen(mean, std, {line, lineIdx, charIdx, defDelayGenerator}) {
        if (lineIdx === 4 && charIdx === 1) {
            return 1000
        } else if (lineIdx === 5 && charIdx === line.length - 1) {
            return 1000
        }
        return defDelayGenerator(mean - 20)
    },

    onTypingDone() {
        var node = React.findDOMNode(this)
    },

    render() {

        return (
            <div className="editor">
                <div className="innerEditor">
                    <Typist className="typedText" cursor={{element: '|', hideWhenDone: true}}
                            delayGenerator={this.delayGen} onTypingDone={this.onTypingDone}>
                        bot.<span className="blueSyntax">is</span>(<span className="orangeSyntax">"Bro"</span>); 
                        <span className="greenSyntax"> //Bot will talk like a bro</span>
                        <br/>
                        bot.<span className="blueSyntax">say</span>(<span className="orangeSyntax">"EarlyAccess"</span>);
                    </Typist>
                </div>
                <div className="messenger">

                </div>
            </div>
        )
    }
})

export default Signup