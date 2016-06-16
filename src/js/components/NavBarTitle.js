/**
 * Created by renebrandel on 6/16/16.
 */
import React from 'react'

export default class NavBarTitle extends React.Component {
    constructor() {
        super();
    }
    render() {
        var style = {
            cursor: "auto",
            float: "left",
            fontFamily: "Helvetica Neue, Arial, sans-serif",
            fontSize: "30px",
            fontWeight: "bold"
        }
        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}