/**
 * Created by renebrandel on 6/16/16.
 */
import React from "react"
import favicon from "../../resources/img/profile.png"

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className="img-responsive" src={favicon} alt=""/>
                                <div className="intro-text">
                                    <span className="skills">Let's</span>
                                    <span className="name">Make Your Bot . Cool</span>
                                    <hr className="star-light"/>
                                    <span className="skills">Bots speaking like Humans</span>
                                </div>
                        </div>
                    </div>
                    <div id="sign-up" className="page-scroll">
                        <a href="#contact" className="btn btn-danger btn-lg">Sign Up!</a>
                    </div>
                </div>
            </header>
        )
    }
}