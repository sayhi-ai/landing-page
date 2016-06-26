import React from "react"

export default class HeroLabel extends React.Component {
    render() {
        return (
            <span className="hero-label">
                <div className="hero-label-table-row">
                    <div className="hero-label-table-cell">
                        <i dangerouslySetInnerHTML={this.props.icon}></i>
                    </div>
                    <div className="hero-label-table-cell">
                        <h4 className="hero-text-label">{this.props.children}</h4>
                    </div>
                </div>
            </span>
        )
    }
}