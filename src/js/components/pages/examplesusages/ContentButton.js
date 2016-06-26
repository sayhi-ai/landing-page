import React from "react"
import "../../../../css/contentbutton.css"
export default class ContentButton extends React.Component {

    render() {
        var style = {
            image: {
                display: this.props.src != null ? "block" : "none"
            },
            title : {
                display: this.props.src != null ? "none" : "block",
                width: "100%",
                height: "100%"
            }
        }
        return (
            <div className="cb-container" onClick={this.props.handleClick} style={this.props.style}>
                <div style={style.image}>
                    <img className="cb-img" src={this.props.src}/>
                    <div className="cb-title-container">
                        <div className="cb-title">{this.props.title}</div>
                    </div>
                </div>
                <div style={style.title}>
                    <div className="cb-only-title-container">
                        <div className="cb-title">{this.props.title}</div>
                    </div>
                </div>
            </div>
        )
    }

}