import React from 'react'
import '../../../css/pricingTable.css'
import checkImg from '../../../resources/img/check.png'
import closeImg from '../../../resources/img/close.png'
import img from '../../../resources/img/logo.png'

export default class Pricing extends React.Component {p
  render () {
    return (
      <div className="pri-root">
        <div className="pri-sectionTitle">
          Pricing
        </div>
        <div className="pri-table">
          <div className="pri-plan">
            <div className="pri-icon">
                <img className="pri-icon-img" src={img} />
            </div>
            <div className="pri-title">Project</div>
            <div className="pri-priceAmount">Free</div>
            <div className="pri-priceMonth"></div>
            <div className="pri-line">
                <span>5,000</span><br/><span className="pri-requests-label">Requests</span>
            </div>
            <div className="pri-line">
                <img className="pri-check-img" src={checkImg} />
                <span className="pri-requests-label">Emoji Support</span>
            </div>
            <div className="pri-line">
                <img className="pri-check-img" src={closeImg} />
                <span className="pri-requests-label">Private Response Set</span>
            </div>
          </div>
          <div className="pri-plan">
            <div className="pri-icon">
                <img className="pri-icon-img" src={img} />
            </div>
            <div className="pri-title">Startup</div>
            <div className="pri-priceAmount">$10</div>
            <div className="pri-priceMonth">per month</div>
            <div className="pri-line">
                <span>10,000</span><br/><span className="pri-requests-label">Requests</span>
            </div>
            <div className="pri-line">
                <img className="pri-check-img" src={checkImg} />
                <span className="pri-requests-label">Emoji Support</span>
            </div>
            <div className="pri-line">
                <img className="pri-check-img" src={checkImg} />
                <span className="pri-requests-label">Private Response Set</span>
            </div>
          </div>
          <div className="pri-plan">
            <div className="pri-icon">
                <img className="pri-icon-img" src={img} />
            </div>
            <div className="pri-title">Production</div>
            <div className="pri-priceAmount">$50</div>
            <div className="pri-priceMonth">per month</div>
            <div className="pri-line">
              <span>75,000</span><br/><span className="pri-requests-label">Requests</span>
            </div>
            <div className="pri-line">
                <img className="pri-check-img" src={checkImg} />
                <span className="pri-requests-label">Emoji Support</span>
            </div>
            <div className="pri-line">
                <img className="pri-check-img" src={checkImg} />
                <span className="pri-requests-label">Private Response Set</span>
            </div>
          </div>
          <div className="pri-plan">
            <div className="pri-icon">
                <img className="pri-icon-img" src={img} />
            </div>
            <div className="pri-title">Company</div>
            <div className="pri-priceAmount">$125</div>
            <div className="pri-priceMonth">per month</div>
            <div className="pri-line">
                <span>200,000</span><br/><span className="pri-requests-label">Requests</span>
            </div>
            <div className="pri-line">
                <img className="pri-check-img" src={checkImg} />
                <span className="pri-requests-label">Emoji Support</span>
            </div>
            <div className="pri-line">
                <img className="pri-check-img" src={checkImg} />
                <span className="pri-requests-label">Private Response Set</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
