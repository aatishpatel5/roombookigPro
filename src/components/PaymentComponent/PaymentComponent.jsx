'use client'

import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PaymentComponent = () => {
  useEffect(() => {
    const initializePaymentRequest = async () => {
      const stripe = await stripePromise;
      const { elements } = stripe;

      const paymentRequest = stripe.paymentRequest({
        country: 'IN',
        currency: 'inr',
        total: {
          label: 'Room Booking',
          amount: 1000, // Amount in cents
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      const result = await paymentRequest.canMakePayment();

      if (result.googlePay) {
        const prButton = elements.create('paymentRequestButton', {
          paymentRequest,
        });

        prButton.mount('#payment-request-button');

        paymentRequest.on('paymentmethod', async (event) => {
          // Send paymentMethod.id to your server to complete the payment
          const res = await fetch('/api/your-payment-api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              paymentMethodId: event.paymentMethod.id,
              // Include other necessary data
            }),
          });

          const { clientSecret } = await res.json();

          const { error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: event.paymentMethod.id,
          });

          if (error) {
            event.complete('fail');
          } else {
            event.complete('success');
            // Handle successful payment
          }
        });
      } else {
        document.getElementById('payment-request-button').style.display = 'none';
      }
    };

    initializePaymentRequest();
  }, []);

  return (
    <div>
      <div id="payment-request-button"></div>
    </div>
  );
};

export default PaymentComponent;
