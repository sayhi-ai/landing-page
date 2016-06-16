/**
 * Created by renebrandel on 6/16/16.
 */
import React from "react"

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="text-center">
                <div className="footer-above">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col col-md-4">
                                <h3>Location</h3>
                                <p>8 Jiaozi Hutong<br/>Beijing, China 100010</p>
                            </div>
                            <div className="footer-col col-md-4">
                            </div>
                            <div className="footer-col col-md-4">
                                <h3>About</h3>
                                <p>At <a href="http://makeyourbot.cool">MakeYourBot.Cool</a> we want to enable you to deliver the best and most natural UX for your users.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-below">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                Copyright &copy; MakeYourBot.Cool 2016
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}