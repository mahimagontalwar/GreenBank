import ExperienceSection from "./components/ExperienceSection/ExperienceSection"
import Herosection from "./components/Herosection"
import Navbar from "./components/Navbar"
import Reviews from "./components/Reviews"
import SponsorSection from "./components/SponsorSection"
import WeOfferSection from "./components/WeOfferSection/WeOfferSection"
import React, { useState } from 'react';
import './App.css'; // Assuming custom CSS is here for styling
import AppPromotion from "./components/AppPromotion"
import logo from '../public/logo.svg'
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What credit score do I need to apply for a credit card?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: "How can I apply for a credit card online?",
      answer: "You can apply online by visiting our website and filling out the application form.",
    },
    {
      question: "Are there any annual fees associated with the credit card?",
      answer: "Some credit cards may have an annual fee depending on the benefits provided.",
    },
    {
      question: "How long does it take to receive the credit card once approved?",
      answer: "It usually takes 7-10 business days to receive your card after approval.",
    },
    {
      question: "How can I check my credit card balance and transactions?",
      answer: "You can check your balance and transactions through our mobile app or website.",
    },
    {
      question: "What should I do if my credit card is lost or stolen?",
      answer: "Report it immediately through our mobile app or by calling customer support.",
    },
    {
      question: "Is my credit card information secure?",
      answer: "Yes, we use state-of-the-art encryption and security measures to protect your information.",
    },
  ];
  return (
    <div className="faq-section">
      <h1>FAQs</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => handleToggle(index)}
          >
            <h2>{item.question}</h2>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        

        <div className="footer-links">
          <div>
            <div>
            <img src={logo} alt="" />
            <h3>GreenBank</h3>
            </div>
            <p>Discover the power of our secure and rewarding credit cards</p>
          </div>
          <div>
            <h3>About us</h3>
            <ul>
              <li>Investors</li>
              <li>Features</li>
              <li>Book a demo</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h3>Products</h3>
            <ul>
              <li>Credit Cards</li>
              <li>Gift Cards</li>
              <li>Savings Accounts</li>
              <li>NFT</li>
            </ul>
          </div>
          <div>
            <h3>Useful Links</h3>
            <ul>
              <li>Free rewards</li>
              <li>Documentation</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
          <div>
            <h3>Social</h3>
            <ul>
              <li>Changelog</li>
              <li>License</li>
              <li>Site Maps</li>
              <li>News</li>
            </ul>
          </div>
        </div>
        <p className="footer-note">© 2023 DoraDesign All Rights Reserved</p>
      </div>
    </footer>
  );
};

    
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <ExperienceSection></ExperienceSection>
      <SponsorSection></SponsorSection>
      <WeOfferSection></WeOfferSection>
      <Reviews />
      <div className="App">
      <FAQs />
      <AppPromotion/>
      <Footer />
    </div>
    </>
  )
}

export default App
