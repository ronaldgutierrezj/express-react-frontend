import React from "react";
import { Link } from "react-router-dom";

const Currencies = (props) => {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Dogecoin", symbol: "DOGE" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div className="currencies">
      {currencies.map((coin) => {

        return (
          <Link to={`/price/${coin.symbol}`}>
            <h2>{coin.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Currencies;