import React, { useEffect } from "react";
import lottie from "lottie-web"; // Import the lottie package
import animationData from "../assets/Images/lottie.json";

const Form = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("lottie-container"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
      animationSpeed: 0.5,
    });
  }, []);

  const mySubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    // Rest of the form submission code
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <div className="form-left-side">
          <div className="address details">
      <div id="lottie-container"></div>
            <div className="topic">Address</div>
            <div className="text-one">Centurion</div>
            <div className="text-two">South Africa</div>
          </div>
          <div className="phone details">
            <i className="fa-solid fa-phone"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+27603093241</div>
            <div className="text-two">+27679881880</div>
          </div>
          <div className="email details">
            <i className="fa-solid fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">ayandarsibanyoni@gmail.com</div>
          </div>
        </div>
        <div className="form-right-side">
          
          <div className="topic-text">Send us a message</div>
          <p>Tell us a bit about your case so we know how to assist you</p>

          <form onSubmit={mySubmit}>
            <div className="input-box">
              <label htmlFor="Name">Name</label>
              <input name="Name" type="text" placeholder="Enter your name" required />
            </div>
            <div className="input-box">
              <label htmlFor="Email">Email Address</label>
              <input name="Email" type="text" placeholder="Enter your email" required />
            </div>
            <div className="input-box message-box">
              <label htmlFor="Message">Message</label>
              <textarea name="Message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="button">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
