import React from "react"
import PageContainer from "../PageContainer"
import InlineSVG from 'svg-inline-react';
import transition from "../../../resources/img/transition.svg"

export default class CleanCodePage extends React.Component {
    
    render() {
        return (
            <PageContainer padding={this.props.padding}>
                <div class="cleanCodeLeft">

                </div>
                <div class="cleanCodeMiddle">
                    <div class="transitionSVG">
                        <img src={transition}/>
                    </div>
                </div>
                <div class="cleanCodeRight">

                </div>
            </PageContainer>
        )
    }
}