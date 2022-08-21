import './App.css';
import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from'./components/AccountBalance/AccountBalance';
import AppHeader from './components/AppHeader/AppHeader';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        balance: 10000,
        coinData: [
          {
            name: 'Bitcoin',
            ticker: 'BTC',
            price: 9999.99
          },
          {
            name: 'Ethereum',
            ticker: 'ETH',
            price: 299.99
          },
          {
            name: 'Tether',
            ticker: 'USDT',
            price: 1.0
          },
          {
            name: 'Ripple',
            ticker: 'XRP',
            price: 0.2
          },
          {
            name: 'Bitcoin Cash',
            ticker: 'BCH',
            price: 297.99
          },

        ]
      }

      this.handleRefresh = this.handleRefresh.bind(this);

  }

  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map( function( {ticker, name, price} ) {
      let newPrice = price;
      if ( valueChangeTicker === ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return {
        ticker,
        name,
        price: newPrice
      }
    });
   
      this.setState({ coinData: newCoinData });
  }
    render() {
      return (
        <div className="App">
          <AppHeader />
            <AccountBalance amount={this.state.balance} />
            <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
        </div>
      );
    }
}

export default App;
