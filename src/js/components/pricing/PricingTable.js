import React from 'react'
import Icon from '../Icon/Icon'
import img from '../../../resources/img/logo.png'
import '../../../css/pricingTable.css'

export default class Pricing extends React.Component {p
  render () {
    return (
      <div className="pri-root">
        <div className="pri-sectionTitle">
          Pricing
        </div>
        <div className="pri-sectionSubTitle">
          We provide a simple and flexible pricing model. We also have a free plan.
        </div>
        <div className="pri-table">
          <div className="pri-sidebar">
            <div className="pri-line">Max. Requests</div>
            <div className="pri-line">Emoji Support</div>
            <div className="pri-line">Private Responses</div>
          </div>
          <div className="pri-plan">
            <div className="pri-icon">
              <Icon width={60} height={75} image={img} />
            </div>
            <div className="pri-title">Project</div>
            <div className="pri-priceAmount">Free</div>
            <div className="pri-priceMonth"></div>
            <div className="pri-line">5,000</div>
            <div className="pri-line">
              <Icon width={19} height={19} color='#596062' image={img} />
            </div>
            <div className="pri-line">
              <Icon width={19} height={19} color='#596062' image={img} />
            </div>
          </div>
          <div className="pri-plan">
            <div className="pri-icon">
              <Icon width={60} height={75} image={img} />
            </div>
            <div className="pri-title">Startup</div>
            <div className="pri-priceAmount">$10</div>
            <div className="pri-priceMonth">per month</div>
            <div className="pri-line">10,000</div>
            <div className="pri-line">
              <Icon width={19} height={19} color='#596062' image={img} />
            </div>
            <div className="pri-line">
              <Icon width={19} height={19} color='#596062' image={img} />
            </div>
          </div>
          <div className="pri-plan">
            <div className="pri-icon">
              <Icon width={60} height={75} image={img} />
            </div>
            <div className="pri-title">Production</div>
            <div className="pri-priceAmount">$50</div>
            <div className="pri-priceMonth">per month</div>
            <div className="pri-line">75,000</div>
            <div className="pri-line">
              <Icon width={19} height={19} color='#596062' image={img} />
            </div>
            <div className="pri-line">
              <Icon width={19} height={19} color='#596062' image={img} />
            </div>
          </div>
          <div className="pri-plan">
            <div className="pri-icon">
              <Icon width={60} height={75} image={img} />
            </div>
            <div className="pri-title">Company</div>
            <div className="pri-priceAmount">$125</div>
            <div className="pri-priceMonth">per month</div>
            <div className="pri-line">200,000</div>
            <div className="pri-line">
              <Icon width={19} height={19} color='#596062' image={img} />
            </div>
            <div className="pri-line">
              <Icon width={19} height={19} color='#596062' image={img} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
