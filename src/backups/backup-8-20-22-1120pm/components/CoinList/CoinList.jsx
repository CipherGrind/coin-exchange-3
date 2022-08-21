import React, { Component } from 'react'
import styled from 'styled-components'
import Coin from '../Coin/Coin';

const Table = styled.table`
  margin: 25px auto 25px auto;
  display: inline-block;
  padding: 5px;
`;

export default class CoinList extends Component {
  render() {
    return (
      
    <Table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                <th>Balance</th>
                <th>Actions</th>
            </tr>
        </thead>

            <tbody>
            {
            this.props.coinData.map( ({key, name, ticker, price, balance}) =>
                <Coin key={key} 
                        handleRefresh={this.props.handleRefresh}
                        name={name} 
                        ticker={ticker} 
                        balance={balance}
                        showBalance={this.props.showBalance}
                        price={price}
                        tickerId={key} />
            )
        }
        
        </tbody>
    </Table>

    )
  }
}
