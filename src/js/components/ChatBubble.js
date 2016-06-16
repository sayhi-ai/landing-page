/**
 * Created by renebrandel on 6/16/16.
 */
import React from "react"

export default class ChatBubble extends React.Component {
    constructor() {
        super()
    }

    render() {
        let name = "bubble " + this.props.direction; //me or you
        return (
            <div className={name}>
                {this.props.children}
            </div>
        )
    }
}