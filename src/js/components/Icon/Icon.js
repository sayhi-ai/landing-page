import React from 'react'

export default class Icon extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.getStateForResize()
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    getStateForResize() {
        var containerDis = "block"
        var iDis = "block"
        var iHeight = "auto"
        var img = this.props.image
        var transitionSrc = img
        if (window.innerWidth >= 768) {
            transitionSrc = img
            containerDis = "flex"
            iDis = "flex"
            iHeight = "100%"

        }

        var styles = {
            container: {
                height: this.props.height,
                width: this.props.width,
                display: containerDis,
                WebkitBoxShadow: "0px 0px 70px 0px rgba(179,177,179,1)",
                MozBoxShadow: "0px 0px 70px 0px rgba(179,177,179,1)",
                boxShadow: "0px 0px 70px 0px rgba(179,177,179,1)"
            },
            i: {
                height: iHeight,
                display: iDis
            }
        }
        return {
            styles,
            trans: transitionSrc
        }
    }

    handleResize(e) {
        this.setState(this.getStateForResize.bind(this))
    }

    render() {
        return (
            <img style={this.state.styles.i} src={this.state.trans}/>
        )
    }
}