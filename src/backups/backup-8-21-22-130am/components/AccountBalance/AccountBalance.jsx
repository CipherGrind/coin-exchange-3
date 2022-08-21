import React from 'react'
import PropTypes from 'prop-types';
import './AccountBalance.css';

export default function AccountBalance (props) {
        const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
        let balanceToggle = null;
        if (props.showBalance) {
            balanceToggle = <>Account Balance: ${props.amount}</>;
        }
        return (
            <section className="AccountBalance"> 
                    <button className="BalanceButton" 
                        onClick={props.handleChangeBalance}> 
                        {buttonText} 
                    </button>
                    {balanceToggle}
                    
            </section>
        );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}