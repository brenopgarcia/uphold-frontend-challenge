import React from 'react'

import { Container } from './styles';

export function ImageTextCurrencyPair({ amount, item }) {

    let { bid } = item;

    const NumberDecimalCurrency = num => (+num).toFixed(2).toString();

    let roundedBid = NumberDecimalCurrency(bid);

    let currencyConverted = amount > 0 ? NumberDecimalCurrency(amount / roundedBid) : 0;

    let currencyName = item.pair.slice(0, 3);

    /**
     * Returns image for currency.
     * @param {*} imageName
     */
    function setImg(imageName) {
        let image;
        try {
            image = require(`./../../assets/${imageName}.png`);
        } catch (error) {
            image = require("./../../assets/XPT.png");;
        }
        return image;
    }

    return (
        <Container>
          <div className="card">
              <div className="value">
                <span>{currencyConverted}</span>
              </div>
              <img alt={currencyName} src={setImg(currencyName)}/>
              <h3>{currencyName}</h3>
          </div>
        </Container>
    );

}
