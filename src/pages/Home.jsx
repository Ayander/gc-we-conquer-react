import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Header from "../components/Header";
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
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  useEffect(() => {
    // Counter animation logic
    const assistedCounter = document.getElementById("assisted-counter");
    const donationsCounter = document.getElementById("donations-counter");

    let assistedCount = 0;
    let donationsCount = 0;

    const animateCounters = () => {
      assistedCount++;
      donationsCount++;

      assistedCounter.innerText = assistedCount;
      donationsCounter.innerText = donationsCount;

      if (assistedCount < 523) {
        requestAnimationFrame(animateCounters);
      }
    };

    animateCounters();
  }, []);
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
                0
              </p>
            </div>
            <div className="counter-item">
              <h3>Donations Made</h3>
              <p className="counter-number" id="donations-counter">
                0
              </p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2>Inspiring Stories</h2>
          <div className="testimonial-container">
            <div className="testimonial">
              <p>
                "This organization helped me find my strength again. I'm forever
                grateful."
              </p>
              <p className="author">- Anonymous</p>
            </div>
            <div className="testimonial">
              <p>
                "I thought I was alone, but this community showed me otherwise.
                Thank you."
              </p>
              <p className="author">- Fikile</p>
            </div>
          </div>
        </section>

        <section className="volunteer-donate">
          <h2>Support Our Cause</h2>
          <p>Make a difference by volunteering or donating.</p>
          <div className="support-options">
            <div className="support-cards-container">
              <div className="support-cards">
                {supportCardsData.map((card, index) => (
                  <div
                    key={index}
                    className={`support-card ${
                      selectedCardIndex === index ? "selected-card" : ""
                    }`}
                    onClick={() => setSelectedCardIndex(index)}
                  >
                    <span className="icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="news">
          <h2>News & Updates</h2>
          <div className="news-items">
            <div className="news-item">
              <h3>Webinar: Building Resilience</h3>
              <p>
                Join us for a webinar on August 15th to learn about building
                resilience after trauma.
              </p>
            </div>
            <div className="news-item">
              <h3>Community Gathering</h3>
              <p>
                Our next community gathering will take place on September 5th.
                Be part of the conversation.
              </p>
            </div>
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
