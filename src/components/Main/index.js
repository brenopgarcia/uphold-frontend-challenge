import React, { useState, useEffect } from 'react';
import SDK from '@uphold/uphold-sdk-javascript';

import { Currencies } from '../AvailableCurrency/index';
import { ImageTextCurrencyPair } from '../Currency/index';
// import { CLIENT_ID, CLIENT_SECRET } from '../../utils/config';

import { Container } from './styles';

function Main() {
  const [amount, setAmount] = useState(2);
  const [items, setItems] = useState([]);
  const [currency, setCurrency] = useState('USD');
  const [cache, setCache] = useState({});
  const [cacheTimer, setCacheTimer] = useState(0);
  const [elementHidden, setElementHidden] = useState(false);


  const sdk = new SDK({
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    baseUrl: 'https://api-sandbox.uphold.com',
  });

  /**
   * Setting cache duration to 30 seconds
   */
  const cacheDuration = 30000;

  /**
   * Setting image while loading data
   */
  const loading = <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt=""/>;

  /**
   * Rendereing flag, currency and current amount
   */
  const results = items.map((each) => (
    <ImageTextCurrencyPair key={each.pair} item={each} amount={amount} />
  ));


  /**
   * useEffect to create cache from data
   */
  useEffect(() =>
    async () => {
      const now = new Date().getTime();

    async function getRates(currencyPar) {
      const result = await sdk.getTicker(currencyPar);
      return result.filter((n) => n.currency === currencyPar);
    }

    function getCacheTimer() {
      const now = new Date().getTime();
      if (cacheTimer < now + cacheDuration) {
        setCacheTimer(now + cacheDuration);
      }
      return cacheTimer;
    }

    if (!cache[currency] || cache[currency].time < now) {
      cache[currency] = await getRates(currency);

      cache[currency].time = getCacheTimer();
      setCache({ ...cache, [currency]: cache[currency] });
    }
    setItems(cache[currency]);
    }, [cache, currency, cacheTimer, sdk]);

  /**
   * Switch div display attribute between result and without result
   * @param {*} e
   */
  function changedValue(e) {
    e.preventDefault();
    const { value } = e.target;
    setAmount(value);
    setElementHidden(!!(value && +value > 0));
  }

  return (
    <Container>
      <div className="main">
        <div className="title">
          <h1>Currency Converter</h1>
        </div>
        <div className="description">
          <h4>
            Receive competitive and transparent pricing with no hidden spreads.
            See how we compare.
          </h4>
        </div>
        <div className="input-rates">
          <input
            type="number"
            className="currency-amount"
            onChange={changedValue}
            placeholder="0.00"
          />
          <select
            className="currency-values"
            onChange={(x) => setCurrency(x.target.value)}
            id="currency"

          >
            <Currencies />
          </select>
        </div>

        <div
          classNamePrefix="rates-detail"
          style={elementHidden ? { display: 'none' } : {}}
        >
          <small>Enter an amount to check the rates.</small>
        </div>

        <div
          className="results"
          style={elementHidden ? {} : { display: 'none' }}
        >
          {items.length ? results : loading}
        </div>
      </div>
    </Container>
  );
}

export default Main;
