import React from "react"
import PageContainer from "../app/PageContainer"
import TypeWriter from 'react-typewriter'
import {Step, Stepper, StepLabel} from 'material-ui/Stepper'
import ExpandTransition from 'material-ui/internal/ExpandTransition'
import ContentButton from "./ContentButton"
import Scroll from "react-scroll"
import TextFit from "react-textfit"
import restart from "../../../resources/img/restart.png"

import "../../../css/exampleusages.css"

export default class ExampleUsesSection extends React.Component {
    constructor(props) {
        super(props);
        this.exampleSeen = false
        this.currentText = null
        this.state = {
            loading: false,
            finished: false,
            stepIndex: 0,
            hasHow: false,
            what: "\"\"",
            how: ""
        }

        this.isFirefox = typeof InstallTrigger !== 'undefined'
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this))
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
                this.animateTextForward("Example usages")
            }
        }
    }

    dummyAsync = (cb) => {
        this.setState({loading: true}, () => {
            this.asyncTimer = setTimeout(cb, 500)
        });
    }

    handleNext = (content, type) => {
        if (!this.isFirefox) {
            event.preventDefault()
        }

        let animationText;
        if (type === "style") {
            this.scrollToText()
            animationText = this.handleTextAnimation(this.currentText, content)
        } else if(content !== "") {
            this.currentText = content
        }

        const {stepIndex} = this.state
        if (!this.state.loading && animationText) {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex + 1,
                finished: stepIndex >= 2,
                how: type == "style" ? content : "",
                hasHow: type == "style",
                what: type != "style" ? content : this.state.what,
                typeAnimation:
                    <div>
                        <TypeWriter typing={-1} onTypingEnd={this.animateTextForward.bind(this, animationText)}
                                    className="eu-typed-text">
                            {this.state.currentAnimationText}
                        </TypeWriter>
                        <span className="eu-typed-text blinking-cursor">|</span>
                    </div>
            }))
        } else if (!this.state.loading && type !== "bye") {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex + 1,
                finished: stepIndex >= 2,
                how: type == "style" ? content : "",
                hasHow: type == "style",
                what: type != "style" ? content : this.state.what
            }))
        } else if (!this.state.loading && type === "bye") {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: 0,
                finished: true,
                how: type == "style" ? content : "",
                hasHow: type == "style",
                what: type != "style" ? content : this.state.what
            }))
        }
    }

    handleTextAnimation(contentParam, personaParam) {
        let content = contentParam.replace(/['"]+/g, '')
        let persona = personaParam.replace(/['"]+/g, '')

        switch(content) {
            case "Hi":
                switch(persona) {
                    case "Neutral":
                        return "Hi there."
                    case "Yoda":
                        return "Welcome padawan."
                    case "bro":
                        return "Sup dude."
                }
                break
            case "ItemCreated":
                switch(persona) {
                    case "Neutral":
                        return "The item was created."
                    case "Yoda":
                        return "The item, created I have."
                    case "bro":
                        return "Dude, I created the item for you."
                }
                break
            case "Bye":
                switch(persona) {
                    case "Neutral":
                        return "Good bye."
                    case "Yoda":
                        return "May the force be with you."
                    case "bro":
                        return "Peace out, man!"
                }
                break
        }
    }

    getStepContent(stepIndex) {
        let style = {
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
                        <ContentButton style={style} title='"Bye"' handleClick={this.handleNext.bind(this, '"Bye"')}/>
                    </div>
                );
            case 1:
                return (
                    <div className="eu-button-container">
                        <ContentButton style={style} title='Neutral' font="Header-Font"
                                       handleClick={this.handleNext.bind(this, '"Neutral"', "style")}/>
                        <ContentButton style={style} title='Yoda' font="Star-Wars" fontSize="1.7em"
                                       handleClick={this.handleNext.bind(this, '"Yoda"', "style")}/>
                        <ContentButton style={style} title='BRO' font="Varsity" fontSize="3em"
                                       handleClick={this.handleNext.bind(this, '"bro"', "style")}/>
                    </div>
                );
            case 2:
                return (
                    <div className="eu-button-container">
                        <ContentButton style={style} title='Restart'
                                       src={restart} font="Header-Font"
                                       handleClick={this.handleNext.bind(this, '""', "bye")}/>
                    </div>
                );
            default:
                return 'You\'re a long way from home sonny jim!'
        }
    }

    animateTextForward(text) {
        this.setState({
            currentAnimationText: text,
            typeAnimation:
                <div>
                    <TypeWriter typing={1} className="eu-typed-text"
                                onTypingEnd={this.animateTextStopCursor.bind(this)}>
                        {text}
                    </TypeWriter>
                    <span className="eu-typed-text blinking-cursor">|</span>
                </div>
        })
    }

    animateTextStopCursor() {
        setTimeout(() =>
            this.setState({
                typeAnimation:
                    <div>
                        <TypeWriter typing={1} className="eu-typed-text">
                            {this.state.currentAnimationText}
                        </TypeWriter>
                    </div>
            }), 1000)
    }

    scrollToText() {
        let scroller = Scroll.scroller;
        scroller.scrollTo("eu-scroll-marker", {
            duration: 500,
            delay: 100,
            offset: -50,
            smooth: true
        })
    }

    render() {
        var styles = {
            container: {
                minHeight: "75vh",
                height: "auto",
                padding: "5%",
                paddingBottom: "0",
                backgroundColor: "#F9F9F9"
            },
            stepper: {
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
                                <TextFit mode="single" perfectFit={true} forceSingleModeWidth={true} max={64}>
                                    bot.<span className="accent-color">say</span>(
                                    <span className="orange-syntax">{this.state.what}</span>
                                    <span style={this.state.hasHow ? {display: "inline-block"} : {display: "none"}}>,
                                        <span className="orange-syntax">{this.state.how}</span>
                                    </span>);
                                </TextFit>
                            </div>
                            <div style={{width: '100%', maxWidth: 700, margin: '5% auto'}}>
                                <Stepper activeStep={this.state.stepIndex} style={{width: "100%", margin: 'auto'}}
                                         orientation="horizontal">
                                    <Step>
                                        <StepLabel style={styles.stepper}>Choose a text below</StepLabel>
                                    </Step>
                                    <Step>
                                        <StepLabel style={styles.stepper}>Choose a persona</StepLabel>
                                    </Step>
                                    <Step>
                                        <StepLabel style={styles.stepper}>Done</StepLabel>
                                    </Step>
                                </Stepper>
                                <ExpandTransition loading={this.state.loading} open={true}>
                                    <div style={{margin: '0 16px', overflow: 'hidden'}}>
                                        <div>{this.getStepContent(this.state.stepIndex)}</div>
                                    </div>
                                </ExpandTransition>
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </Element>
        )
    }
}