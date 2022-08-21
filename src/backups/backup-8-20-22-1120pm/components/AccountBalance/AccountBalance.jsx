import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './AccountBalance.css';

export default class AccountBalance extends Component {
    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
        let balanceToggle = null;
        if (this.props.showBalance) {
            balanceToggle = <>Account Balance: ${this.props.amount}</>;
        }
        return (
            <section className="AccountBalance"> 
                    <button className="BalanceButton" 
                        onClick={this.props.handleChangeBalance}> 
                        {buttonText} 
                    </button>
                    {balanceToggle}
                    
            </section>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}