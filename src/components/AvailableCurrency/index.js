import React from 'react'

function Currency({ item }) {
    return (
        <>
            <option>{ item }</option>
        </>
    );
}

export function Currencies() {
    const currenciesAvailables = [
        "USD", "ADA","AED", "ARS", "ATO", "AUD",
        "BAT","BHC", "BRL", "BTG", "CAD", "CHF",
        "CNY","CZK","DAI","DAS","DCR","DGB", "DKK",
        "DOG","EOS","ETH","EUR","GBP","HKD","HRK",
        "HUF", "ILS", "INR","IOT","JPY","KES","LBA",
        "LIN","LTC","MXN","NAN","NEO","NOK","NZD","OMG",
        "PHP","PLN","RON","SEK","SGD","STO","TRX","TUS",
        "UPB","UPE","UPT","UPU","VOX","XAG","XAU",
        "XEM","XLM","XPD","XPT","XRP","ZIL","ZRX"
    ];
    return (
        <>
            { currenciesAvailables.map( e => <Currency key={e} item={e} /> )}
        </>
    );
}
