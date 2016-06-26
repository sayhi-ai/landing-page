import React from "react"
import "../../../../css/contentbutton.css"
export default class ContentButton extends React.Component {

    render() {
        return (
            <div className="cb-container" onClick={this.props.handleClick} style={this.props.style}>
                <img className="cb-img" src={this.props.src}/>
                <div className="cb-title">{this.props.title}</div>
            </div>
        )
    }

}