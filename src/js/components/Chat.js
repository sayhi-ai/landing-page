/**
 * Created by renebrandel on 6/16/16.
 */
import React from "react"
import ReactDOM from "react-dom"
import ChatBubble from "./ChatBubble"

export default class Chat extends React.Component {
    constructor() {

    }

    render() {
        var bubbles = []
        this.props.chats.forEach((chat) => {
            var direction = chat.direction
            var text = chat.text
            bubbles.push(
                <ChatBubble {direction} {text}>
                </ChatBubble>
            )
        })
        return (
            <div className="chat">
                {bubbles}
            </div>
        )
    }
}