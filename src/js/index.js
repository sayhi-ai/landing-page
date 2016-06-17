import React from "react"
import ReactDOM from "react-dom"

// import css
import "../css/index.css"
import "../css/signup.css"
import "../css/bootstrap.css"
import "../css/freelancer.css"
import "../css/cleancodepage.css"

import "../less/freelancer.less"
import "../less/mixins.less"
import "../less/variables.less"

import Layout from "./components/Layout"

require('file?name=[name].[ext]!../index.html');

ReactDOM.render(<Layout/>, document.getElementById('root'));