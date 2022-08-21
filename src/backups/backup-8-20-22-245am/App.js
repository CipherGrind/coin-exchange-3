import './App.css';
import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from'./components/AccountBalance/AccountBalance';
import AppHeader from './components/AppHeader/AppHeader';
import axios from 'axios';


const COIN_COUNT = 10;


class App extends React.Component {

  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      /*
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 9999.99
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 32.0,
        price: 299.99
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 0,
        price: 1.0
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 1000,
        price: 0.2
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 0,
        price: 297.99
      },
      */
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
        price: parseFloat(Number(coin.quotes.USD.price).toFixed(3)),
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

  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( function( {ticker, name, price, balance} ) {
      let newPrice = price;
      if ( valueChangeTicker === ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return {
        ticker,
        name,
        price: newPrice,
        balance
      }
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