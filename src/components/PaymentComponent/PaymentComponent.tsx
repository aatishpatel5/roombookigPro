 
'use client';

import { useEffect, useState } from "react";
import { loadStripe, StripeError, PaymentRequest } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const PaymentComponent = () => {
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(null);

  useEffect(() => {
    const initializePaymentRequest = async () => {
      const stripe = await stripePromise;
      if (!stripe) return; // Handle null case

      const pr = stripe.paymentRequest({
        country: 'IN',
        currency: 'inr',
        total: {
          label: 'Room Booking',
          amount: 1000 * 100, // Amount in paisa (cents)
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      // Check if the browser supports Payment Request API
      const result = await pr.canMakePayment();
      if (result) {
        setPaymentRequest(pr);
      }
    };

    initializePaymentRequest();
  }, []);

  const handlePaymentRequest = async () => {
    if (!paymentRequest) return; // Ensure paymentRequest is not null
    const { error }:any | StripeError | null = await paymentRequest.show();
    if (error) {
      console.error("Payment Request Error", error);
    }
  };

  return (
    <div>
      {paymentRequest && (
        <button onClick={handlePaymentRequest}>
          Pay with Google Pay
        </button>
      )}
    </div>
  );
};

export default PaymentComponent;
