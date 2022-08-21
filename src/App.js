import './App.css';
import React, {useEffect, useState} from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from'./components/AccountBalance/AccountBalance';
import AppHeader from './components/AppHeader/AppHeader';
import axios from 'axios';


const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(3));


function App (props) {

  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);


  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price),
      };
    })
      //retrieve the price
      setCoinData(coinPriceData);
  }

  useEffect(function() {
    if (coinData.length === 0 ) {
      componentDidMount();
    }
  });

  

  const handleChangeBalance = () => {
    setShowBalance(oldValue => !oldValue);
  }

  const handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    debugger;
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map( function( values ) {
      let newValues = { ...values };
      if ( valueChangeId === values.key ) {
        newValues.price = newPrice;
      }
      return newValues;
    });
   
      setCoinData(newCoinData);
  }
    return (
      <div className="App">
        <AppHeader />
          <AccountBalance 
            amount={balance} 
            showBalance={showBalance} 
            handleChangeBalance={handleChangeBalance} />
          <CoinList 
            coinData={coinData} 
            handleRefresh={handleRefresh} 
            showBalance={showBalance} />
      </div>
    );
}

export default App;