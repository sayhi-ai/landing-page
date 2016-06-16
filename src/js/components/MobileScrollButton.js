import React from "react"

export default class MobileScrollButton extends React.Component {
    render() {
        return (
            <div className="scroll-top page-scroll visible-xs visible-sm">
                <a className="btn btn-primary" href="#page-top">
                    <i className="fa fa-chevron-up"/>
                </a>
            </div>
        )
    }
}