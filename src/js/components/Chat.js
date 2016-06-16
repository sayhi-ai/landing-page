/**
 * Created by renebrandel on 6/16/16.
 */
import React from "react"
import ChatBubble from "./ChatBubble"

export default class Chat extends React.Component {
    constructor() {
        super()
    }

    render() {
        let bubbles = []
        this.props.chats.map((chat, i) => {
            let direction = chat.direction
            let text = chat.text
            bubbles.push(
                <ChatBubble direction={direction} key={i}>
                    {text}
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