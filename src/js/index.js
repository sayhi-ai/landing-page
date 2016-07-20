import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import useScroll from 'react-router-scroll'
import cookies from 'js-cookie'

// import js
import "../js/lib/material"
//import loadAnalytics from './util/analytics.js'

// import css
import "../css/fonts.css"
import "../css/material.css"
import "../css/index.css"
import "../css/bootstrap.css"
import "../css/freelancer.css"
import "../css/typist.css"

// import components
import App from "./components/app/App"
import HomeView from "./components/home/HomeView"
import PricingView from "./components/pricing/PricingView"
import GettingStartedView from "./components/gettingstarted/GettingStartedView"
import TermsView from "./components/terms/TermsView"
import PrivacyView from "./components/privacy/PrivacyView"

// Copy the index.html file
require('file?name=[name].[ext]!../index.html');

ReactDOM.render(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomeView} />
            <Route path='getting-started' component={GettingStartedView} />
            <Route path='terms' component={TermsView} />
            <Route path='privacy' component={PrivacyView} />
        </Route>
    </Router>,
    document.getElementById('root')
)