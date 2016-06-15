import React from "react"
import Typist from 'react-typist';

var Signup = React.createClass({

    render() {
        
        return (
            <div className="editor">
                <div className="innerEditor">
                    <Typist className="typedText">
                        bot.<span className="blueSyntax">is</span>(<span className="orangeSyntax">"Bro"</span>); 
                        <span className="greenSyntax">//Bot will talk like a bro</span>
                    </Typist>
                </div>
            </div>
        )
    }
})

export default Signup