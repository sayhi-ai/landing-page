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
import Pricing from "./components/pricing/Pricing"
import Terms from "./components/terms/Terms"

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
        <Route name="app" path="/" handler={App}>
            <IndexRoute component={App} />
            <Route path='pricing' component={Pricing} />
            <Route path='terms' component={Terms} />
        </Route>
    </Router>,
    document.getElementById('root')
)