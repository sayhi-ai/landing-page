/**
 * Created by renebrandel on 6/16/16.
 */
import React from "react"

export default class About extends React.Component {
    render() {
        return (
            <section className="success" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Prices in API Calls/Month</h2>
                            <hr className="star-light"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="row text-center">
                                <h3>FREE</h3>
                            </div>
                            <div className="row text-center">
                                <h4>0 - 10,000</h4>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="row text-center">
                                <h3>1.99$</h3>
                            </div>
                            <div className="row text-center">
                                <h4>10,000 - 50,000</h4>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="row text-center">
                                <h3>4.99$</h3>
                            </div>
                            <div className="row text-center">
                                <h4>50,000 - 200,000</h4>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="row text-center">
                                <h3>9.99$</h3>
                            </div>
                            <div className="row text-center">
                                <h4>200,000 - 500,000</h4>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="row text-center">
                                <h3>29.99$</h3>
                            </div>
                            <div className="row text-center">
                                <h4>500,000 - 1,500,000</h4>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="row text-center">
                                <h3>49.99$</h3>
                            </div>
                            <div className="row text-center">
                                <h4>1,500,000 - Unlimited</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}