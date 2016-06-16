import React from "react"

export default class PageContainer extends React.Component {
    render() {
        return (
            <section id="pageSection">
                <div className="pageContainer">
                    {this.props.children}
                </div>
            </section>
        )
    }
}