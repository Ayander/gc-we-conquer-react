// DonationForm.js

import React, { useState } from "react";

const DonationForm = ({ handleSubmit }) => {
  const [paymentOption, setPaymentOption] = useState("paypal");

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  return (
    <div className="donation-form">
      <form onSubmit={(e) => handleSubmit(e, { paymentOption })}>
        {/* Existing form inputs */}
        {/* ... */}
        
        {/* Payment options */}
        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="paypal"
              checked={paymentOption === "paypal"}
              onChange={handlePaymentOptionChange}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="creditCard"
              checked={paymentOption === "creditCard"}
              onChange={handlePaymentOptionChange}
            />
            Credit Card
          </label>
        </div>

        {/* Buttons */}
        <div className="button-container">
          <button type="submit" className="donate-button">
            Donate Now
          </button>
          <button className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
