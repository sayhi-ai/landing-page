import React from "react"
import Isvg from "react-inlinesvg"
import PageContainer from "../PageContainer"
export default class CleanCodePage extends React.Component {
    
    render() {
        return (
            <PageContainer padding={this.props.padding}>
                <div class="cleanCodeLeft">

                </div>
                <div class="cleanCodeMiddle">
                    <div class="transitionSVG">
                        <Isvg src="../../../resources/img/transition.svg"/>
                    </div>
                </div>
                <div class="cleanCodeRight">

                </div>
            </PageContainer>
        )
    }
}