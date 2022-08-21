import './App.css';
import logo from './logo.svg';
//these below are all the same
import React from 'react';
// var { Component } = React;
// import React, { component } from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from'./components/AccountBalance/AccountBalance';
import styled from 'styled-components'

const Table = styled.table`
  margin: 25px auto 25px auto;
  display: inline-block;
  padding: 5px;
`;

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
  }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} alt="React Logo" className="App-logo" />
            <h2 className="App-title">Coin Exchange</h2>
          </header>
            <AccountBalance amount={this.state.balance} />
            <CoinList coinData={this.state.coinData} />
        </div>
      );
    }
}

export default App;
