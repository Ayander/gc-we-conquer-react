import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import P1 from "../assets/P1.png";


const ResourcesSection = () => {
  return (
    <div className="resources-section">
      <h2>What to Do If You or Someone You Know Is a Victim of Sexual Assault</h2>
      <p>We understand that dealing with such a distressing situation can be incredibly tough. If you or someone close to you has experienced sexual assault, it's important to know what steps you can take to seek help and support</p>

    <div className="carousel-container">
      <Carousel
        autoPlay={true}  // Set autoPlay to true
        interval={5000}  // Set the interval to control transition speed (in milliseconds)
        infiniteLoop={true}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
      >
        <div className="step">
          <h3>Step 1: Prioritize Safety</h3>
          <img src={P1} alt="Step 1" />
          <p> If you're in immediate danger or witnessing someone in distress, don't hesitate to call for emergency assistance (10111, 112 or your local emergency number). Your safety is paramount.</p>
        </div>
        <div className="step">
          <h3>Step 2: Seek Prompt Medical Care</h3>
          <img src={P1} alt="Step 2" />
          <p>Getting medical attention is essential, even if there are no visible injuries. Medical professionals can address any physical concerns, provide treatment, and help prevent potential health complications.</p>
        </div>
        <div className="step">
          <h3>Step 3: Preserve Potential Evidence</h3>
          <img src={P1} alt="Step 3" />
          <p>  If you can, avoid changing clothes, showering, or tidying up the area where the assault took place. Gently place any items that might be relevant as evidence, such as clothing, personal belongings, or bedding, into a clean paper bag to help maintain their integrity.</p>
        </div>
        <div className="step">
          <h3>Step 4: Explore Reporting Options</h3>
          <img src={P1} alt="Step 4" />
          <p>You have the choice to report the assault to law enforcement. Reporting can initiate a legal process, but this decision is entirely up to you. Consider reaching out to a victim advocate, who can provide guidance and support as you decide the best course of action for you.</p>
        </div>
        <div className="step">
          <h3>Step 5: Talk to Someone You Trust</h3>
          <img src={P1} alt="Step 5" />
          <p>Talking about what happened with someone you trust can provide emotional relief. Reach out to friends, family, or a counselor who can lend a listening ear and offer comfort during this difficult time.</p>
        </div>
        <div className="step">
          <h3>Step 6: Seek Professional Support</h3>
          <img src={P1} alt="Step 6" />
          <p>Trauma-focused therapists, counselors, or support groups can offer a safe space to express your feelings and emotions. These professionals are trained to provide effective coping strategies and help you work through your experiences.</p>
        </div>
        <div className="step">
          <h3>Step 7: Legal Guidance</h3>
          <img src={P1} alt="Step 7" />
          <p>Consulting with a legal professional or victim advocate can help you understand your rights, navigate the legal process, and make informed decisions about pursuing legal action if you choose to do so.</p>
        </div>
        <div className="step">
          <h3>Step 8: Look for Support Organizations</h3>
          <img src={P1} alt="Step 8" />
          <p>Many organizations specialize in assisting sexual assault survivors. These resources can provide information, helplines, and referrals to local services that can aid in your recovery journey.</p>
        </div>
        <div className="step">
          <h3>Step 9: Prioritize Self-Care</h3>
          <img src={P1} alt="Step 9" />
          <p>Engage in activities that promote self-care and healing. Whether it's engaging in physical exercise, practicing mindfulness, journaling, or spending time with loved ones, finding moments of solace can contribute to your overall well-being.</p>
        </div>
        <div className="step">
          <h3>Step 10: Reporting Details</h3>
          <img src={P1} alt="Step 10" />
          <p> If you decide to report the assault, provide as much detail as possible about the incident. It's okay if some details are unclear or difficult to recall. Your voice is important in the process.</p>
        </div>
      </Carousel>
    </div>
    </div>
  );
};

export default ResourcesSection;
