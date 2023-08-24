import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Header from "../components/Header";

import {Carousel} from '3d-react-carousal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  faPersonHarassing,
  faHandcuffs,
  faHandsHoldingChild,
  faPeopleGroup,
  faUserGraduate,
  faHeadset,
  faScaleBalanced,
  faHouseLock,
  faEarListen,
  faPeopleRoof,
  faChildReaching,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPersonHarassing,
  faHandcuffs,
  faHandsHoldingChild,
  faPeopleGroup,
  faUserGraduate,
  faHeadset,
  faScaleBalanced,
  faHouseLock,
  faEarListen,
  faPeopleRoof,
  faChildReaching
);

const supportCardsData = [
  {
    icon: <FontAwesomeIcon icon={faUserGraduate} beat />,
    title: "Awareness and Education",
    description: (
      <div>
        ~Raise awareness about the different forms of gender-based violence and
        sexual assault.
        <br />
        ~Provide educational workshops and resources to help people identify
        signs of abuse and assault
      </div>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faHeadset} beat />,
    title: "Crisis Helpline and Support",
    description: (
      <div>
        ~Establish a helpline where survivors can receive immediate emotional
        support and guidance.
        <br />
        ~Connect survivors with trained counselors and professionals who can
        offer guidance.
      </div>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faScaleBalanced} beat />,
    title: "Legal Support and Advocacy",
    description: (
      <div>
        ~Provide legal assistance to survivors seeking protection orders or
        navigating the legal process.
        <br />
        ~Advocate for policy changes to improve legal protections for survivors.{" "}
      </div>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faHouseLock} beat />,
    title: "Safe Housing",
    description: (
      <div>
        ~Offer safe and confidential housing options for survivors who need to
        escape abusive situations.
        <br />
        ~Collaborate with local shelters and organizations to provide temporary
        housing solutions.
      </div>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faEarListen} beat />,
    title: "Therapeutic Services",
    description: (
      <div>
        ~Provide trauma-informed therapy and counseling to help survivors heal
        from their experiences.
        <br />
        ~Offer support groups where survivors can connect with others who have
        similar experiences.
      </div>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faPeopleRoof} beat />,
    title: "Community Empowerment",
    description: (
      <div>
        ~Organize empowerment workshops and events to help survivors regain
        their confidence and self-esteem.
        <br />
        ~Collaborate with local communities to foster a supportive environment
        for survivors.
      </div>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faChildReaching} beat />,
    title: "Boys' Empowerment Circle",
    description: (
      <div>
        ~To create a nurturing environment where young boys who have experienced
        gender-based violence and sexual assault can find support, learn coping
        skills, and build resilience.
        <br />
        ~Pair boys with positive male role models who can offer guidance and
        support to address myths and misconceptions about gender-based violence
        to reduce stigma.
      </div>
    ),
  },
];

const Home = () => {

  const [startIndex, setStartIndex] = useState(0);
  const numCardsToDisplay = 2; // Number of cards to display at a time

  const handleNext = () => {
    const newIndex = startIndex + numCardsToDisplay;
    if (newIndex < supportCardsData.length) {
      setStartIndex(newIndex);
    }
  };

  const handlePrev = () => {
    const newIndex = startIndex - numCardsToDisplay;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [assistedCount, setAssistedCount] = useState(0);
  const [donationsCount, setDonationsCount] = useState(0);

  useEffect(() => {
    // Counter animation logic
    const assistedCounter = document.getElementById("assisted-counter");
    const donationsCounter = document.getElementById("donations-counter");

    const animateCounters = () => {
      if (assistedCount < 974) {
        // Increment the Assisted Victims counter
        setAssistedCount((prevCount) => prevCount + 1);
        assistedCounter.innerText = assistedCount + 1;
      }

      if (donationsCount < 523) {
        // Increment the Donations Made counter
        setDonationsCount((prevCount) => prevCount + 1);
        donationsCounter.innerText = donationsCount + 1;
      }

      if (assistedCount < 974 || donationsCount < 523) {
        requestAnimationFrame(animateCounters);
      }
    };

    animateCounters();
  }, [assistedCount, donationsCount]);
  return (
    <main>
      <Header />
      <div className="landing-page">
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Our Support Network</h1>
            <p>
              We are here to provide support and assistance to all survivors of
              gender-based violence and sexual assault.
            </p>
            <button className="cta-button">Reach Out for Support</button>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faPersonHarassing} fade />
            </div>
            <h2>Report Abuse</h2>
            <p>
              Confidentially report cases of violence and assault to
              authorities.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faHandsHoldingChild} fade />
            </div>
            <h2>Seek Help</h2>
            <p>Access resources and support to find a path toward healing.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faPeopleGroup} fade />
            </div>
            <h2>Connect with Support Groups</h2>
            <p>Find solace and strength through community connections.</p>
          </div>
        </section>

        <section className="about-us">
          <div className="about-content">
            <div className="about-image"></div>
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                We are a dedicated team committed to supporting survivors of
                gender-based violence and sexual assault. Our mission is to
                provide a safe space for healing, empowerment, and positive
                change.
              </p>
            </div>
          </div>
          <div className="counters">
            <div className="counter-item">
              <h3>Assisted Victims</h3>
              <p className="counter-number" id="assisted-counter">
              {assistedCount}
              </p>
            </div>
            <div className="counter-item">
              <h3>Donations Made</h3>
              <p className="counter-number" id="donations-counter">
              {donationsCount}
              </p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h1>Testimonials</h1>
          <div className="testimonial-container">
            <div className="testimonial">
              <p>
                "This organization helped me find my strength again. I'm grateful beyond words for the  acceptance I've found here."
              </p>
              <p className="author">- Anonymous</p>
            </div>
            <div className="testimonial">
              <p>
                "I thought I was alone, This community showed me that strength comes in many forms, and I'm so grateful . "
              </p>
              <p className="author">- Fikile</p>
            </div>
            <div className="testimonial">
              <p>
                "This website changed everything. It made me feel worthy, showed me I'm not alone, and taught me it's okay to seek help. Thank you!"
              </p>
              <p className="author">- James</p>
            </div>
          </div>
        </section>

        <section className="volunteer-donate">
        <h2>Support Our Cause</h2>
        <p>Make a difference by volunteering or donating.</p>
        <div className="support-options">
          <div className="support-cards-container">
            {startIndex > 0 && (
              <button className="carousel-button prev" onClick={handlePrev}>
                Previous
              </button>
            )}

            <div className="support-cards">
              {supportCardsData
                .slice(startIndex, startIndex + numCardsToDisplay)
                .map((card, index) => (
                  <div
                    key={index}
                    className="support-card"
                    // Your card styling here
                  >
                    <span className="icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                ))}
            </div>

            {startIndex + numCardsToDisplay < supportCardsData.length && (
              <button className="carousel-button next" onClick={handleNext}>
                Next
              </button>
            )}
          </div>
        </div>
      </section>
        <section className="volunteer-form">
          <div className="volunteer-content">
            <h2>Join Our Volunteer Team</h2>
            <p>We are excited to have you join us as a volunteer!</p>

            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea id="message" name="message" rows="4"></textarea>
              </div>

              <button type="submit" className="cta-button">
                Submit
              </button>
            </form>
          </div>
        </section>

        <footer>
          <p>
            © {new Date().getFullYear()} Your Website Name. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Home;
