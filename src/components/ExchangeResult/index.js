import React from 'react';

import './_styles.scss';

class ExchangeResult extends React.Component {
  render() {
    return (
      <div className="exchange-list">

        <div className="exchange-item">
          <div className="row">
            <div className="col-xs-11">
              <div className="row">
                <div className="col-auto">
                  <div className="exchange-item__currency">IDR</div>
                </div>
                <div className="col-auto end-xs">
                  <div className="exchange-item__amount">144.104.50</div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <p className="exchange-item__currency-desc">IDR - Indonesian Rupiah</p>
                  <p className="exchange-item__currency-rate">1 USD = IDR 14.500</p>
                </div>
              </div>
            </div>
            <div className="d-flex col-xs-1 middle-xs">
              <a>
                <img src="/public/icons/remove.png" />
              </a>
            </div>
          </div>
        </div>

        <div className="exchange-item">
          <div className="row">
            <div className="col-xs-11">
              <div className="row">
                <div className="col-auto">
                  <div className="exchange-item__currency">IDR</div>
                </div>
                <div className="col-auto end-xs">
                  <div className="exchange-item__amount">144.104.50</div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <p className="exchange-item__currency-desc">IDR - Indonesian Rupiah</p>
                  <p className="exchange-item__currency-rate">1 USD = IDR 14.500</p>
                </div>
              </div>
            </div>
            <div className="d-flex col-xs-1 middle-xs">
              <a>
                <img src="/public/icons/remove.png" />
              </a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ExchangeResult;