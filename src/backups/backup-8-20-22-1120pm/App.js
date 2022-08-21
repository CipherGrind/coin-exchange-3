import './App.css';
import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from'./components/AccountBalance/AccountBalance';
import AppHeader from './components/AppHeader/AppHeader';
import axios from 'axios';


const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(3));


class App extends React.Component {

  state = {
    balance: 10000,
    showBalance: true,
    coinData: [

    ]
  }

  componentDidMount = async () => {
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
    this.setState({ coinData: coinPriceData });
  }

  handleChangeBalance = (event) => {
    event.preventDefault();
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }

  handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = this.state.coinData.map( function( values ) {
      let newValues = { ...values };
      if ( valueChangeId === values.key ) {
        newValues.price = newPrice;
      }
      return newValues;
    });
   
      this.setState({ coinData: newCoinData });
  }
    render() {
      return (
        <div className="App">
          <AppHeader />
            <AccountBalance 
              amount={this.state.balance} 
              showBalance={this.state.showBalance} 
              handleChangeBalance={this.handleChangeBalance} />
            <CoinList 
              coinData={this.state.coinData} 
              handleRefresh={this.handleRefresh} 
              showBalance={this.state.showBalance} />
        </div>
      );
    }
}

export default App;