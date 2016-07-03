import React from 'react'
import Icon from '../Icon/Icon'
import img from '../../../resources/img/logo.png'
import classes from './Pricing.scss'

export default class Pricing extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.sectionTitle}>
          Pricing
        </div>
        <div className={classes.sectionSubTitle}>
          We provide a simple and flexible pricing model. We also have a free plan.
        </div>
        <div className={classes.table}>
          <div className={classes.sidebar}>
            <div className={classes.line}>Max. Users</div>
            <div className={classes.line}>Incl. Requests</div>
            <div className={classes.line}>DB Storage</div>
            <div className={classes.line}>Backups</div>
          </div>
          <div className={classes.plan}>
            <div className={classes.icon}>
              <Icon width={60} height={75} src={require('../../../resources/img/logo.png')} />
            </div>
            <div className={classes.title}>Developer</div>
            <div className={classes.priceAmount}>Free</div>
            <div className={classes.priceMonth}></div>
            <div className={classes.line}>50</div>
            <div className={classes.line}>20,000</div>
            <div className={classes.line}>100 MB</div>
            <div className={classes.line}>
              <Icon width={19} height={19} color='#596062' src={require('../../../resources/img/logo.png')} />
            </div>
          </div>
          <div className={classes.plan}>
            <div className={classes.icon}>
              <Icon width={60} height={75} src={require('../../../resources/img/logo.png')} />
            </div>
            <div className={classes.title}>Project</div>
            <div className={classes.priceAmount}>$9</div>
            <div className={classes.priceMonth}>per month</div>
            <div className={classes.line}>200</div>
            <div className={classes.line}>100,000</div>
            <div className={classes.line}>500 MB</div>
            <div className={classes.line}>
              <Icon width={19} height={19} color='#27AE60' src={require('../../../resources/img/logo.png')} />
            </div>
          </div>
          <div className={classes.plan}>
            <div className={classes.icon}>
              <Icon width={60} height={75} src={require('../../../resources/img/logo.png')} />
            </div>
            <div className={classes.title}>Startup</div>
            <div className={classes.priceAmount}>$29</div>
            <div className={classes.priceMonth}>per month</div>
            <div className={classes.line}>1000</div>
            <div className={classes.line}>1 million</div>
            <div className={classes.line}>2 GB</div>
            <div className={classes.line}>
              <Icon width={19} height={19} color='#27AE60' src={require('../../../resources/img/logo.png')} />
            </div>
          </div>
          <div className={classes.plan}>
            <div className={classes.icon}>
              <Icon width={60} height={75} src={require('../../../resources/img/logo.png')} />
            </div>
            <div className={classes.title}>Production</div>
            <div className={classes.priceAmount}>$149</div>
            <div className={classes.priceMonth}>per month</div>
            <div className={classes.line}>50,000</div>
            <div className={classes.line}>10 million</div>
            <div className={classes.line}>10 GB</div>
            <div className={classes.line}>
              <Icon width={19} height={19} color='#27AE60' src={require('../../../resources/img/logo.png')} />
            </div>
          </div>
          <div className={classes.plan}>
            <div className={classes.icon}>
              <Icon width={60} height={75} src={require('../../../resources/img/logo.png')} />
            </div>
            <div className={classes.title}>Growth</div>
            <div className={classes.priceAmount}>$499</div>
            <div className={classes.priceMonth}>per month</div>
            <div className={classes.line}>1 million</div>
            <div className={classes.line}>100 million</div>
            <div className={classes.line}>100 GB</div>
            <div className={classes.line}>
              <Icon width={19} height={19} color='#27AE60' src={require('../../../resources/img/logo.png')} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
