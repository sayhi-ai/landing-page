import React from "react"
import PageContainer from "../PageContainer"
import InlineSVG from 'svg-inline-react';
import Isvg from 'react-inlinesvg'
import transition from "../../../resources/img/transition.svg"

export default class CleanCodePage extends React.Component {
    
    render() {
        return (
            <PageContainer padding={this.props.padding}>
                <div class="cleanCodeLeft">

                </div>
                <div class="cleanCodeMiddle">
                    <InlineSVG width="100vw" height="100%" src={transition}/>
                </div>
                <div class="cleanCodeRight">

                </div>
            </PageContainer>
        )
    }
}