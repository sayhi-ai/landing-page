/**
 * Created by renebrandel on 6/16/16.
 */
import React from "react"
import ReactDOM from "react-dom"

export default class ChatBubble extends React.Component {
    constructor() {

    }

    render() {
        var name = "bubble " + this.props.direction; //me or you
        return (
            <div className={name}>
                {this.props.text}
            </div>
        )
    }
}