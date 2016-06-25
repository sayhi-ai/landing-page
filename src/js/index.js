import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, hashHistory } from 'react-router'

// import js
import "../js/lib/material"

// import css
import "../css/fonts.css"
import "../css/material.css"
import "../css/index.css"
import "../css/bootstrap.css"
import "../css/freelancer.css"
import "../css/typist.css"

// import components
import App from "./components/App"

// Copy the index.html file
require('file?name=[name].[ext]!../index.html');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
    </Router>, document.getElementById('root')
);
