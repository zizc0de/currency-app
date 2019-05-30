import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { exchangeActions } from 'actions';

import ExchangeResult from 'components/ExchangeResult';
import Navbar from 'components/Navbar';
import CurrencyLoader from 'components/ContentLoader/CurrencyLoader';

import { find } from 'lodash';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base: 'USD',
      amount: 10,
      currency: ['IDR', 'EUR', 'GBP', 'SGD'],
      newCurrency: '',
      form: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.getRates(this.state.base);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
    if (name === 'base') {
      this.getRates(value);
    }
  }

  removeCurrency = (key) => {
    this.setState(state => ({
      ...state,
      currency: state.currency.filter((item, j) => key !== j)
    }));
  }

  onSubmit = () => {
    const { newCurrency } = this.state;

    if (newCurrency) {
      this.setState(state => ({
        ...state,
        currency: [...state.currency, newCurrency],
        form: false
      }));
    }
  }

  getRates = (base) => {
    this.props.getRates({
      base
    });
  }

  render() {
    const { currency, rates, asyncState } = this.props;
    const { base, amount, form } = this.state;

    return (
      <div className="container">
        <Navbar />
        <div className="wrapper">

          <div className="row">
            <div className="col-xs-12">
              <div className="card">
                <div className="card-title">
                  <span>{base} - {find(currency.data, { name: base }).desc}</span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-xs-6">
                      <div className="select-wrapper">
                        <select name="base" className="form-control" value={base} onChange={this.handleChange}>
                          {currency.data.map((row, key) =>
                            <option value={row.name} key={key}>{row.name}</option>
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="col-xs-6">
                      <div className="w-100">
                        <input type="text" name="amount" value={parseInt(amount)} onChange={this.handleChange} className="form-control text-align-right" placeholder="Amount" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {this.state.currency.length > 0 &&
            <Fragment>
              <section>
                <div className="row">
                  <div className="col-xs-12">
                    <p className="color-grey">Results</p>
                  </div>
                </div>
              </section>

              <div className="row">
                <div className="col-xs-12">
                  <div className="card py-0">
                    <div className="card-body">
                      {asyncState === 'idle' || asyncState === 'loading' ? (
                        <div className="row">
                          <div className="col-xs-12">
                            <div className="py-3">
                              <CurrencyLoader />
                            </div>
                            <div className="py-3">
                              <CurrencyLoader />
                            </div>
                            <div className="py-3">
                              <CurrencyLoader />
                            </div>
                          </div>
                        </div>
                      ) : (
                          <ExchangeResult
                            amount={amount}
                            base={base}
                            currencyList={this.state.currency}
                            rates={rates}
                            onClick={(key) => this.removeCurrency(key)}
                          />
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          }

          {form || this.state.currency.length === 0 ? (
            <Fragment>
              <section>
                <div className="row">
                  <div className="col-xs-12">
                    <p className="color-grey">Add More Currencies</p>
                  </div>
                </div>
              </section>
              <div className="row">
                <div className="col-xs-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="select-wrapper">
                            <select name="newCurrency" className="form-control" onChange={this.handleChange}>
                              <option value="">Choose Currency</option>
                              {currency.data.map((row, key) =>
                                <Fragment key={`currency-${key}`}>
                                  {this.state.currency.includes(row.name) === false &&
                                    <option value={row.name}>{row.name} - {row.desc}</option>
                                  }
                                </Fragment>
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-xs-12">
                          <button type="button" className="btn btn-primary btn-block" onClick={this.onSubmit}>Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
              <section>
                <div className="row mt-3">
                  <div className="col-xs-12">
                    <button type="button" className="btn btn-primary btn-block" onClick={() => this.setState({ form: true })}><img src="/public/icons/add.svg" /> Add More Currencies</button>
                  </div>
                </div>
              </section>
            )}

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  asyncState: state.exchange.asyncState,
  currency: state.currency,
  rates: state.exchange.rates
})

const mapDispatchToProps = (dispatch) => ({
  getRates: bindActionCreators(exchangeActions.getRates, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);