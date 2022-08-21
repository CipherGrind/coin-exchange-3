import './App.css';
import logo from './logo.svg';
//these below are all the same
import React from 'react';
// var { Component } = React;
// import React, { component } from 'react';
import Coin from'./components/Coin/Coin';
import AccountBalance from'./components/AccountBalance/AccountBalance';
import styled from 'styled-components'

const Table = styled.table`
  margin: 25px auto 25px auto;
  display: inline-block;
  padding: 5px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React Logo" className="App-logo" />
        <h2 className="App-title">Coin Exchange</h2>
      </header>
      <AccountBalance amount={10000} />
    <Table className>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        <Coin name="Bitcoin" ticker="BTC" price={9999.99} />
        <Coin name="Ethereum" ticker="ETH" price={299.99} />
        <Coin name="Tether" ticker="USDT" price={1.0} />
        <Coin name="Ripple" ticker="XRP" price={0.2} />
      </tbody>
    </Table>
    </div>
  );
}

export default App;
