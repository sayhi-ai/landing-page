import React from "react"
import cabin from "../../resources/img/portfolio/cabin.png"
import cake from "../../resources/img/portfolio/cake.png"
import circus from "../../resources/img/portfolio/circus.png"

export default class Portfolio extends React.Component {
    render() {
        return (
            <section id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Services</h2>
                            <hr className="star-primary"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        Testing
                                    </div>
                                </div>
                                <img src={cabin} className="img-responsive" alt=""/>
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={cake} className="img-responsive" alt=""/>
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={circus} className="img-responsive" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

    )
    }
}