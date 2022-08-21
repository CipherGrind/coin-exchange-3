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
      
    <Table className>
        <thead>
            <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
            </tr>
        </thead>

            <tbody>
            {
            this.props.coinData.map( ({name, ticker, price}) =>
                <Coin key={ticker} name={name} ticker={ticker} price={price} />
            )
        }
        
        </tbody>
    </Table>

    )
  }
}
