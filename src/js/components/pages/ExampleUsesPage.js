import React from "react"
import PageContainer from "../PageContainer"
import TypeWriter from 'react-typewriter'
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import ExpandTransition from 'material-ui/internal/ExpandTransition'

import "../../../css/exampleusages.css"

export default class ExampleUsesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typeAnimation: <div>
                <TypeWriter typing={1} className="eu-typed-text">
                    Example usages
                </TypeWriter>
                <span className="eu-typed-text blinking-cursor">|</span>
            </div>,
            loading: false,
            finished: false,
            stepIndex: 0,
            hasHow: false,
            what: "",
            how: ""
        }
    }

    dummyAsync = (cb) => {
        this.setState({loading: true}, () => {
            this.asyncTimer = setTimeout(cb, 200);
        });
    };

    handleNext = (content, type) => {
        event.preventDefault()
        const {stepIndex} = this.state
        if (!this.state.loading) {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex + 1,
                finished: stepIndex >= 1,
                how: type == "style" ? content : "",
                hasHow: type == "style",
                what: type != "style" ? content : this.state.what
            }))
        }
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        Select campaign settings. Campaign settings can include your budget, network, bidding
                        options and adjustments, location targeting, campaign end date, and other settings that
                        affect an entire campaign.
                    </div>
                );
            case 1:
                return (
                    <div>
                        Ad group status is different than the statuses for campaigns, ads, and keywords, though the
                        statuses can affect each other. Ad groups are contained within a campaign, and each campaign
                        can
                        have one or more ad groups. Within each ad group are ads, keywords, and bids.
                    </div>
                );
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    renderContent() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px', overflow: 'hidden'};

        if (finished) {
            this.setState({stepIndex: 0, finished: false});
            return this.renderContent();
        }
        var param = stepIndex === 0 ? '"hi"' : '"starwars"'
        var style = stepIndex === 0 ? '"hi"' : "style"
        return (
            <div style={contentStyle}>
                <div>{this.getStepContent(stepIndex)}</div>
                <div style={{marginTop: 24, marginBottom: 12}}>
                    <RaisedButton
                        label={stepIndex === 1 ? 'Finish' : 'Next'}
                        primary={true}
                        onTouchTap={this.handleNext.bind(this, param, style)}
                    />
                </div>
            </div>
        );
    }

    animateText(text) {
        this.setState({
            typeAnimation: <div>
                {TypeWriter.reset}
                <TypeWriter typing={1} className="eu-typed-text" ref={TypeWriter.reset}>
                    {text}
                </TypeWriter>
                <span className="eu-typed-text blinking-cursor">|</span>
            </div>
        })
    }

    render() {
        var styles = {
            minHeight: "75vh",
            height: "auto",
            padding: "5%",
            paddingBottom: "0",
            backgroundColor: "#F9F9F9"
        }

        return (
            <PageContainer styles={styles}>
                <div className="eu-outter">
                    <div className="eu-inner">
                        <div className="eu-typed-text-div">
                            {this.state.typeAnimation}
                        </div>
                        <div className="eu-example-features">
                            bot.<span className="blue-syntax">say</span>({this.state.what}<span
                            style={this.state.hasHow ? {display: "inline-block"} : {display: "none"}}>, {this.state.how}</span>);
                        </div>
                        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                            <Stepper activeStep={this.state.stepIndex} style={{width: "70%", margin: 'auto'}}>
                                <Step>
                                    <StepLabel>What to say?</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>How to say it?</StepLabel>
                                </Step>
                            </Stepper>
                            <ExpandTransition loading={this.state.loading} open={true}>
                                {this.renderContent()}
                            </ExpandTransition>
                        </div>
                    </div>
                </div>
            </PageContainer>
        )
    }
}