import React from "react"
import Header from "../components/Header"

const Home = () => {
  return (
    <div className="landing-page">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>
            We are here to provide support and assistance to victims of domestic
            violence and sexual assault.
          </p>
          <button className="cta-button">Get Help Now</button>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Report Abuse</h2>
          <p>
            Our platform allows victims to confidentially report cases of
            domestic violence and sexual assault to the authorities.
          </p>
        </div>

        <div className="feature">
          <h2>Seek Help</h2>
          <p>
            We provide resources and support to victims to help them cope with
            the trauma and find a safe path forward.
          </p>
        </div>

        <div className="feature">
          <h2>Connect with Support Groups</h2>
          <p>
            We connect victims with support groups and organizations that can
            provide additional help and assistance.
          </p>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <button className="cta-button">Join Us Now</button>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
