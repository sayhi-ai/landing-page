import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, hashHistory } from 'react-router'

// import css
import "../css/index.css"
import "../css/bootstrap.css"
import "../css/freelancer.css"
import "../css/navbar.css"

// import less
import "../less/freelancer.less"
import "../less/mixins.less"
import "../less/variables.less"

// import components
import Layout from "./components/Layout"

// Copy the index.html file
require('file?name=[name].[ext]!../index.html');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}/>
    </Router>, document.getElementById('root')
);
