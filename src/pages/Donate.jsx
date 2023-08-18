
import React, { useState } from "react";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationSubmitted, setDonationSubmitted] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    let formData = new FormData(form);
    // Process the form data or submit it to your server
    console.log("Submitting", formData.getAll("amount"));

    setDonationSubmitted(true);
  };

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
  };

  return (
    <main>
      <div className="donate-page">
      <h2>Donate Now</h2>
      {donationSubmitted ? (
        <div className="thank-you-message">
          Thank you for your generous donation!
        </div>
      ) : (
        <>
          <p>
            Your generous donation will help us make a difference in the lives
            of many. We appreciate your support!
          </p>

          <div className="donation-form">
            <form onSubmit={handleSubmit}>
              <div className="amount-buttons">
                <button
                  type="button"
                  className={`amount-button ${
                    donationAmount === 10 ? "selected" : ""
                  }`}
                  onClick={() => handleAmountSelect(10)}
                >
                  $10
                </button>
                <button
                  type="button"
                  className={`amount-button ${
                    donationAmount === 25 ? "selected" : ""
                  }`}
                  onClick={() => handleAmountSelect(25)}
                >
                  $25
                </button>
                <button
                  type="button"
                  className={`amount-button ${
                    donationAmount === 50 ? "selected" : ""
                  }`}
                  onClick={() => handleAmountSelect(50)}
                >
                  $50
                </button>
              </div>
              <div className="input-box">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="email">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="amount">Donation Amount (USD)</label>
                <input
                  name="amount"
                  type="number"
                  placeholder="Enter the amount"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="message">Leave a Message (optional)</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your message here"
                ></textarea>
              </div>
              <div className="button-container">
                <button type="submit" className="donate-button">
                  Donate Now
                </button>
                <button className="cancel-button">Cancel</button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
    </main>
  );
};

export default Donate;
