import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Skybridge</h2>
            <p>
              We are a premier IT solutions provider dedicated to delivering 
              innovative technology services that empower businesses to thrive 
              in the digital age.
            </p>
            <div className="about-features">
              <div className="feature">
                <h3>10+ Years</h3>
                <p>Industry Experience</p>
              </div>
              <div className="feature">
                <h3>500+</h3>
                <p>Clients Served</p>
              </div>
              <div className="feature">
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;