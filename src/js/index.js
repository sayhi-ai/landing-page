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
import TermsView from "./components/terms/TermsView"

// Copy the index.html file
require('file?name=[name].[ext]!../index.html');

// loadAnalytics()
//
// const userId = cookies.get('sayhi-ai_user_id')
// if (userId) {
//     analytics.identify(userId, {
//         'Product': 'Homepage'
//     }, {
//         integrations: {
//             'All': false,
//             'Mixpanel': true
//         }
//     })
// }

// browserHistory.listen((location) => {
//     analytics.page()
//     analytics.track(`view homepage: ${location.pathname}`)
// })

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomeView} />
            <Route path='pricing' component={PricingView} />
            <Route path='terms' component={TermsView} />
        </Route>
    </Router>,
    document.getElementById('root')
)