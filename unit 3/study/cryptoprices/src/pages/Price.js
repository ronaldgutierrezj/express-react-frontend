import { useEffect, useState } from "react";

const Price = (props) =>{
    const apiKey = "17ED79AB-BEE5-4296-B91E-80F698DB6DE7";
    const symbol = props.match.params.symbol
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    const [coin, setCoin] = useState(null);

    const getCoin = async ()=>{
        const response = await fetch(url)
        const data = await response.json()
        setCoin(data)
    }
    useEffect (()=> {
        getCoin()}, []);

    const loaded=()=> {  
        return (
        <div>
          <h1>
            {coin.asset_id_base}/{coin.asset_id_quote}
          </h1>
          <h2>{coin.rate}</h2>
        </div>
      );
    }

    const loading = ()=>{
        return <h1>loading...</h1>
    }

    return coin? loaded() : loading()
}
export default Price