import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IcYksH6xLdsHcKtrGc83DYVOtIcGtnyt0bGAFGfftveeJEQNsKnxiXyzxRbeVjBB3ByuMCveRjazwInBIV097qN00TraIFBUu');

const CreditCard = ({stepHandler}) => {
    return (
        <div>
            <h3>Credit Card</h3>

            <Elements stripe={stripePromise}>

                <SimpleCardForm
                    stepHandler={stepHandler}
                >
                </SimpleCardForm>

            </Elements>
        </div>
    );
};

export default CreditCard;