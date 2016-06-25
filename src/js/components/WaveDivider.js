import React from "react"
import wave from "../../resources/img/divider.png"

export default class WaveDivider extends React.Component {
    render() {
        var style = {
            div : {
                position: "absolute",
                zIndex: "9"
            },
            img : {
                width: "100vw",
                height: "60px"
            }
        }
        return (
            <div style={style.div}>
                <img style={style.img} src={wave}/>
            </div>
        )
    }
}