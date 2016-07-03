import React from "react"

export default class PageContainer extends React.Component {
    render() {
        return (
            <section id="pageSection">
                <div className="pageContainer" style={this.props.styles}>
                    {this.props.children}
                </div>
            </section>
        )
    }
}