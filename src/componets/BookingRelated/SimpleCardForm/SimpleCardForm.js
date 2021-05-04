import React, {useMemo, useState} from 'react';
import {CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useResponsiveFontSize from './useResponsiveFontSize';

const useOptions = () => {
    const fontSize = useResponsiveFontSize();
    const options = useMemo(
      () => ({
        style: {
          base: {
            fontSize,
            color: "#424770",
            letterSpacing: "0.025em",
            fontFamily: "Source Code Pro, monospace",
            "::placeholder": {
              color: "#aab7c4"
            }
          },
          invalid: {
            color: "#9e2146"
          }
        }
      }),
      [fontSize]
    );
  
    return options;
  };

const SimpleCardForm = ({stepHandler}) => {
    
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

      //handling credit card payment error
  const [paymentError, setPaymentError] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState('');


  const handleProgressBarCompletion=()=>{
    window.location.href = '/home'
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement)

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement
    });

    if (error) {

      //handling credit card payment error
      setPaymentError(error.message);
      setPaymentSuccess(null);
    }
    else {

      //handling payment success
      // setPaymentSuccess(paymentMethod.id);//jeta dorkar hoy info seta nibo. Ekhane nilam 'id'
      // setPaymentError(null);

      handleProgressBarCompletion();
      // stepHandler();
      // handlePayment(paymentMethod.id)
    }

  };

    return (
        <div>


      <form onSubmit={handleSubmit}>

        <div className='row'>
        
        <div className="col-md-12">
        <label for="cardNumber" class="form-label">Card Number</label>

        <div className='cardBox'>
        <CardNumberElement
        options={options}
        onReady={() => {
          console.log("CardNumberElement [ready]");
        }}
        onChange={event => {
          console.log("CardNumberElement [change]", event);
        }}
        onBlur={() => {
          console.log("CardNumberElement [blur]");
        }}
        onFocus={() => {
          console.log("CardNumberElement [focus]");
        }}
        />
        </div>
        </div>



        <div className="col-md-12 mt-3">
        <label for="expDate" class="form-label">Expiry Date</label>

        <div className='cardBox'> 
        <CardExpiryElement
         options={options}
         onReady={() => {
           console.log("CardNumberElement [ready]");
         }}
         onChange={event => {
           console.log("CardNumberElement [change]", event);
         }}
         onBlur={() => {
           console.log("CardNumberElement [blur]");
         }}
         onFocus={() => {
           console.log("CardNumberElement [focus]");
         }}
        />
        </div>
        </div>




        <div className="col-md-12 mt-3">
        <label for="cvc" class="form-label">CVC</label>


        <div className="cardBox">
        <CardCvcElement
        options={options}
        onReady={() => {
          console.log("CardNumberElement [ready]");
        }}
        onChange={event => {
          console.log("CardNumberElement [change]", event);
        }}
        onBlur={() => {
          console.log("CardNumberElement [blur]");
        }}
        onFocus={() => {
          console.log("CardNumberElement [focus]");
        }}
        />
        </div>
        </div>





          <div style={{ marginTop: 10 }}>
            <button type='submit' class="btn btn-primary" disabled={!stripe}>
              {/* {activeStep === steps.length ? 'Finish' : 'Next'} */}
              Finish
            </button>
          </div>



        </div>
      </form>


      {
        paymentError && <p style={{ color: "red" }}>{paymentError}</p>
      }


      {
        paymentSuccess && <p style={{ color: "green" }}>Your payment is successful</p>
      }
    </div>
    );
};

export default SimpleCardForm;