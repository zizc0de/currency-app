import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { find } from 'lodash';

import './_styles.scss';

class ExchangeResult extends Component {
  constructor(props) {
    super(props);
  }
  
  removeCurrency = (e, key) => {
    e.preventDefault();
    return this.props.onClick(key);
  }

  render() {
    const { amount, base, currency, currencyList, rates } = this.props;

    return (
      <div className="exchange-list">
        {currencyList.map((row, key) =>
          <Fragment key={key}>
            {row !== base &&
              <div className="exchange-item">
                <div className="row">
                  <div className="col-xs-11">
                    <div className="row">
                      <div className="col-auto">
                        <div className="exchange-item__currency">{row}</div>
                      </div>
                      <div className="col-auto end-xs">
                        <div className="exchange-item__amount">{parseFloat(amount * rates[row]).toFixed(2)}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12">
                        <p className="exchange-item__currency-desc">{row} - {find(currency, { name: row }).desc}</p>
                        <p className="exchange-item__currency-rate">1 {base} = {row} {parseFloat(rates[row]).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex col-xs-1 middle-xs">
                    <a href="#" onClick={(e) => this.removeCurrency(e, key)}>
                      <img src="/public/icons/remove.svg" />
                    </a>
                  </div>
                </div>
              </div>
            }
          </Fragment>
        )}
      </div>
    );
  }
}

ExchangeResult.propTypes = {
  amount: PropTypes.number.isRequired,
  rates: PropTypes.number.isRequired,
  currencyList: PropTypes.array.isRequired,
  rates: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currency: state.currency.data
})

export default connect(mapStateToProps)(ExchangeResult);