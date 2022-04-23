import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name ="Emailer"
                description="$5 for 5 email credits"
                amount = {500}
                token={token => this.props.handleToken (token)} //this is not an api key, it is a callback function after user enters the credit card details and stripe will send back a token. 
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect (null, actions) (Payments);
