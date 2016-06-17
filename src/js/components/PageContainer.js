import React from "react"

export default class PageContainer extends React.Component {
    render() {
        var styles = {
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            width: "100vw",
            height: "75vh",
            padding: this.props.padding
        }
        
        return (
            <section id="pageSection">
                <div  style={styles}>
                    {this.props.children}
                </div>
            </section>
        )
    }
}