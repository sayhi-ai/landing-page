import React from "react"
import PageContainer from "../PageContainer"

import "../../../css/cleancodepage.css"

import transition from "../../../resources/img/transition.svg"

export default class CleanCodePage extends React.Component {

    render() {
        var styles = {
            height: "75vh"
        }
        
        return (
            <PageContainer styles={styles}>
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