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
                
                <th>Rank</th>
                <th>Logo</th>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                <th>Balance</th>
                <th>Actions</th>
            </tr>
        </thead>

            <tbody>
            {
            props.coinData.map( ({key, rank, image, name, ticker, price, balance, market_cap,
                price_change_percentage_24h, price_change_percentage_7d, price_change_percentage_30d}) =>
                <Coin key={key} 
                      handleRefresh={props.handleRefresh}
                      handleTransaction={props.handleTransaction}
                      handleInfoPopup={props.handleInfoPopup}
                      
                      rank={rank}
                      image={image}
                      name={name} 
                      ticker={ticker} 
                      balance={balance}
                      showBalance={props.showBalance}
                      price={price}

                      market_cap={market_cap}

                      price_change_percentage_24h={price_change_percentage_24h}
                      price_change_percentage_7d={price_change_percentage_7d}
                      price_change_percentage_30d={price_change_percentage_30d}

                      tickerId={key} />
            )
        }
        
        </tbody>
    </Table>

    )
}
