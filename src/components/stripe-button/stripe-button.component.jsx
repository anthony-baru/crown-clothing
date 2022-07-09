import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const onToken = (token) => {
    console.log(token);
    toast.success(`Payment of ${price} successful.`);
  };
  return (
    <StripeCheckout
      label="PAY NOW"
      name="CROWN CLOTHING"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
