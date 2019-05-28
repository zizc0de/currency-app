import React, { Component } from 'react';

import ExchangeResult from 'components/ExchangeResult';
import Navbar from 'components/Navbar';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="wrapper">

          <div className="row">
            <div className="col-xs-12">
              <div className="card">
                <div className="card-title">
                  <span>USD - United States Dollar</span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-xs-6">
                      <div className="select-wrapper">
                        <select className="form-control">
                          <option value="USD">USD</option>
                          <option value="IDR">IDR</option>
                          <option value="SGD">SGD</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xs-6">
                      <div className="w-100">
                        <input type="text" className="form-control text-align-right" placeholder="Amount" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                  <ExchangeResult />
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="row mt-3">
              <div className="col-xs-12">
                <button type="button" className="btn btn-primary btn-block"><img src="/public/icons/add.png" /> Add More Currencies</button>
              </div>
            </div>
          </section>

          {/* <section>
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
                        <select className="form-control">
                          <option value="USD">IDR - Indonesian Rupiah</option>
                          <option value="SGD">SGD</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-xs-12">
                      <button type="button" className="btn btn-primary btn-block">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    );
  }
}

export default Home;