import React from "react"
import PageContainer from "../PageContainer"
import transition from "../../../resources/img/transition.svg"

export default class CleanCodePage extends React.Component {

    render() {

        const style = {
            height: "100%",
            width: "10vw"
        }
        return (
            <PageContainer padding={this.props.padding}>
                <div class="cleanCodeLeft">

                </div>
                <div class="cleanCodeMiddle">
                    <i style={style} dangerouslySetInnerHTML={{__html:transition}} />
                </div>
                <div class="cleanCodeRight">

                </div>
            </PageContainer>)
    }
}