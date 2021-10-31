import {useState,useEffect} from "react";

const Price = (props) => {
  const apiKey = "17ED79AB-BEE5-4296-B91E-80F698DB6DE7";
  const symbol = props.match.params.symbol;
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  //state to hold the coin data
  const [coin, setCoin] = useState("null");

  //function to fetch coin data
  const getCoin = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data);
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched
  function loaded() {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>${coin.rate}</h2>
      </div>
    );
  }

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin ? loaded() : loading();
};

export default Price;