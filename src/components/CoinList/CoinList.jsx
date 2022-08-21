import React from 'react'
import styled from 'styled-components'
import Coin from '../Coin/Coin';

const Table = styled.table`
  margin: 25px auto 25px auto;
  display: inline-block;
  padding: 5px;
`;

export default function CoinList (props) {
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
            props.coinData.map( ({key, name, ticker, price, balance}) =>
                <Coin key={key} 
                      handleRefresh={props.handleRefresh}
                      name={name} 
                      ticker={ticker} 
                      balance={balance}
                      showBalance={props.showBalance}
                      price={price}
                      tickerId={key} />
            )
        }
        
        </tbody>
    </Table>

    )
}
