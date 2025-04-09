import React from 'react';
import './About.css'; // Import the CSS file
import team1 from '../../Asset/popo.png'; // Placeholder image for team member 1
import team2 from '../../Asset/team2rr.png'; // Placeholder image for team member 2
import team3 from '../../Asset/team3rr.png'; // Placeholder image for team member 3

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About TechVibe</h1>
          <p>Your trusted partner in innovative tech solutions.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At TechVibe, we are committed to delivering cutting-edge technology and gadgets that enhance your daily life. Our mission is to provide high-quality products with exceptional customer service.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={team1} alt="Team Member 1" />
            <h3>Balogun Ayinde </h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={team2} alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src={team3} alt="Team Member 3" />
            <h3>Mrs Rose folorunsho</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-list">
          <div className="value-item">
            <i className="fas fa-lightbulb"></i>
            <h3>Innovation</h3>
            <p>We constantly push the boundaries of technology to bring you the latest innovations.</p>
          </div>
          <div className="value-item">
            <i className="fas fa-users"></i>
            <h3>Customer Focus</h3>
            <p>Our customers are at the heart of everything we do. Your satisfaction is our priority.</p>
          </div>
          <div className="value-item">
            <i className="fas fa-shield-alt"></i>
            <h3>Integrity</h3>
            <p>We believe in transparency, honesty, and ethical business practices.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;