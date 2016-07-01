import React from "react"
import PageContainer from "../PageContainer"
import TypeWriter from 'react-typewriter'
import {Step, Stepper, StepLabel} from 'material-ui/Stepper'
import ExpandTransition from 'material-ui/internal/ExpandTransition'
import ContentButton from "./elements/ContentButton"
import Scroll from "react-scroll"

import restart from "../../../resources/img/restart.png"

import "../../../css/exampleusages.css"

export default class ExampleUsesSection extends React.Component {
    constructor(props) {
        super(props);
        this.exampleSeen = false;
        
        this.state = {
            typeAnimation: 
                <div>
                    <span className="eu-typed-text blinking-cursor">|</span>
                </div>,
            loading: false,
            finished: false,
            stepIndex: 0,
            hasHow: false,
            what: "\"\"",
            how: ""
        }


        this.isFirefox = typeof InstallTrigger !== 'undefined';
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        if (!this.exampleSeen) {
            let scrollTop = 0;
            if (this.isFirefox) {
                scrollTop = event.pageY;
            } else {
                scrollTop = event.srcElement.body.scrollTop
            }

            if (scrollTop >= 1600) {
                this.exampleSeen = true;
                this.animateText("Example usages");
            }
        }
    }

    dummyAsync = (cb) => {
        this.setState({loading: true}, () => {
            this.asyncTimer = setTimeout(cb, 500);
        });
    }

    handleNext = (content, type) => {
        if (!this.isFirefox) {
            event.preventDefault()
        }
        
        if (type == "style") {
            console.log("got here")
            this.scrollToText()
        }
        
        const {stepIndex} = this.state
        if (!this.state.loading) {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex + 1,
                finished: stepIndex >= 2,
                how: type == "style" ? content : "",
                hasHow: type == "style",
                what: type != "style" ? content : this.state.what
            }))
        }
    }

    getStepContent(stepIndex) {
        var style = {
            margin: "5% 0",
            width: "33%"
        }
        switch (stepIndex) {
            case 0:
                return (
                    <div className="eu-button-container">
                        <ContentButton style={style} title='"Hi"' handleClick={this.handleNext.bind(this, '"Hi"')}/>
                        <ContentButton style={style} title='"Item Created"'
                                       handleClick={this.handleNext.bind(this, '"ItemCreated"')}/>
                        <ContentButton style={style} title='"Done"' handleClick={this.handleNext.bind(this, '"Done"')}/>
                    </div>
                );
            case 1:
                return (
                    <div className="eu-button-container">
                        <ContentButton style={style} title='Neutral' font="Header-Font"
                                       handleClick={this.handleNext.bind(this, '"Neutral"', "style")}/>
                        <ContentButton style={style} title='Han Solo' font="Star-Wars" fontSize="1.7em"
                                       handleClick={this.handleNext.bind(this, '"HanSolo"', "style")}/>
                        <ContentButton style={style} title='BRO' font="Varsity" fontSize="3em"
                                       handleClick={this.handleNext.bind(this, '"Bro"', "style")}/>
                    </div>
                );
            case 2:
                return (
                    <div className="eu-button-container">
                        <ContentButton style={style} title='Restart' 
                                       src = {restart} font="Header-Font"
                                       handleClick={this.handleNext.bind(this, '""')}/>
                    </div>
                )
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    renderContent() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px', overflow: 'hidden'};

        if (finished) {
            this.setState({stepIndex: 0, finished: false});
            //return this.renderContent();
        }

        return (
            <div style={contentStyle}>
                <div>{this.getStepContent(stepIndex)}</div>
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

    scrollToText() {
        var scroller = Scroll.scroller;
        scroller.scrollTo("eu-scroll-marker", {
            duration: 500,
            delay: 100,
            offset: -50,
            smooth: true
        })
    }

    render() {
        var styles = {
            container : {
                minHeight: "75vh",
                height: "auto",
                padding: "5%",
                paddingBottom: "0",
                backgroundColor: "#F9F9F9"
            },
            stepper : {
                fontSize: "1.5em"
            }
        }

        let Element = Scroll.Element;
        
        return (
            <Element name="eu-scroll-marker">
                <PageContainer styles={styles.container}>
                    <div name="eu-scroll-marker" className="eu-outter">
                        <div className="eu-inner">
                            <div className="eu-typed-text-div">
                                {this.state.typeAnimation}
                            </div>
                            <div className="eu-example-features">
                                bot.<span className="accent-color">say</span>(
                                <span className="orange-syntax">{this.state.what}</span>
                                    <span style={this.state.hasHow ? {display: "inline-block"} : {display: "none"}}>,
                                        <span className="orange-syntax">{this.state.how}</span>
                                    </span>);
                            </div>
                            <div style={{width: '100%', maxWidth: 700, margin: '5% auto'}}>
                                <Stepper activeStep={this.state.stepIndex} style={{width: "100%", margin: 'auto'}}
                                         orientation="horizontal">
                                    <Step>
                                        <StepLabel style={styles.stepper}>Choose a text</StepLabel>
                                    </Step>
                                    <Step>
                                        <StepLabel style={styles.stepper}>Choose a persona</StepLabel>
                                    </Step>
                                    <Step>
                                        <StepLabel style={styles.stepper}>Done</StepLabel>
                                    </Step>
                                </Stepper>
                                <ExpandTransition loading={this.state.loading} open={true}>
                                    {this.renderContent()}
                                </ExpandTransition>
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </Element>
        )
    }
}