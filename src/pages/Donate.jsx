// Donate.js

import React, { useState } from "react";
import Header from "../components/Header";
import DonationForm from "../components/DonationForm";
import LottieAnimation from "../components/LottieAnimation";


const Donate = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (formData) => {
    // Process the form data or submit it to your server
    console.log("Submitting", formData);
    setShowThankYou(true);
  };

  return (
    <main className="donate-page">
      <Header />
      <div className="donate-content">
        <h2>Donate Now</h2>
        <p>
          Your generous donation will help us make a difference in the lives of
          many. We appreciate your support!
        </p>
        {showThankYou ? (
          <div className="thank-you-message">
            <h3>Thank You for Your Donation!</h3>
            <p>We truly appreciate your contribution.</p>
          </div>
        ) : (
          <>
            <LottieAnimation animationData={lottieAnimationData} />
            <DonationForm handleSubmit={handleSubmit} />
          </>
        )}
      </div>
    </main>
  );
};

export default Donate;
