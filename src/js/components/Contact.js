import React from "react"

export default class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Sign Up for Beta</h2>
                            <hr className="star-primary"/>
                                <h3>Beta users get a FREE 2 MONTHS trial</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <form action="http://cool.us13.list-manage.com/subscribe/post?u=91105fa973023812cf53dce73&amp;id=5ddf44500c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                <div className="row control-group">
                                    <div className="form-group col-xs-12 floating-label-form-group controls">
                                        <label>Name</label>
                                        <input type="text" value="" name="NAME" className="form-control" id="mce-NAME" placeholder="Name" required/>
                                    </div>
                                </div>
                                <div className="row control-group">
                                    <div className="form-group col-xs-12 floating-label-form-group controls">
                                        <label>Email</label>
                                        <input type="email" value="" name="EMAIL" className="form-control" id="mce-EMAIL" placeholder="Email address" required/>
                                    </div>
                                </div>
                                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                                    <input type="text" name="b_91105fa973023812cf53dce73_5ddf44500c" tabIndex="-1" value=""/>
                                </div>
                                <div id="success"></div>
                                <div className="row">
                                    <div className="form-group col-xs-12 text-center">
                                        <button type="submit" className="btn btn-success btn-lg" id="mc-embedded-subscribe">Make my Bot AWESOME!</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}