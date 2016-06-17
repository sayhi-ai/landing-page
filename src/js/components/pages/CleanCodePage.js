import React from "react"
import PageContainer from "../PageContainer"
import transition from "../../../resources/img/transition.svg"

export default class CleanCodePage extends React.Component {

    render() {

        return (
            <PageContainer padding={this.props.padding}>
                <div className="cleanCodeLeft">

                </div>
                <div className="cleanCodeMiddle">
                    <i dangerouslySetInnerHTML={{__html:transition}}/>
                </div>
                <div className="cleanCodeRight">

                </div>
            </PageContainer>)
    }
}