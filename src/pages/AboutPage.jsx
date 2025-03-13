import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>About LookBanana</h1>
          <p>Your trusted partner in premium online shopping</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            At LookBanana, we're committed to providing exceptional products 
            with outstanding customer service. We believe shopping should be enjoyable, 
            straightforward, and rewarding.
          </p>
          <p>
            Our carefully curated selection ensures quality and value with every purchase, 
            while our dedicated team works tirelessly to create a seamless shopping experience.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>We never compromise on quality, offering only products that meet our rigorous standards.</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>We're committed to environmentally responsible practices throughout our business operations.</p>
            </div>
            <div className="value-card">
              <h3>Transparency</h3>
              <p>We believe in honest communication and fair pricing without hidden costs or surprises.</p>
            </div>
            <div className="value-card">
              <h3>Customer Focus</h3>
              <p>Your satisfaction drives everything we do, from product selection to after-sales support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Where It All Began</h3>
                <p>Founded with a vision to revolutionize online shopping with personalized experiences.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h3>Expanding Horizons</h3>
                <p>Launched our premium product lines and expanded shipping to international markets.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>Sustainability Initiative</h3>
                <p>Implemented eco-friendly packaging and carbon-neutral shipping options.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h3>Today</h3>
                <p>Serving over 100,000 happy customers with a catalog of 5,000+ premium products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                {/* Replace with actual image path */}
                <img src="/images/team/ceo.jpg" alt="CEO" />
              </div>
              <h3>Jane Doe</h3>
              <p className="member-role">Founder & CEO</p>
              <p>With 15+ years in retail, Jane brings vision and leadership to our company.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                {/* Replace with actual image path */}
                <img src="/images/team/cto.jpg" alt="CTO" />
              </div>
              <h3>John Smith</h3>
              <p className="member-role">CTO</p>
              <p>John leads our tech initiatives, ensuring a seamless shopping experience.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                {/* Replace with actual image path */}
                <img src="/images/team/design.jpg" alt="Design Lead" />
              </div>
              <h3>Emily Chen</h3>
              <p className="member-role">Design Lead</p>
              <p>Emily ensures our products and website showcase exceptional design principles.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                {/* Replace with actual image path */}
                <img src="/images/team/customer.jpg" alt="Customer Experience Manager" />
              </div>
              <h3>Michael Brown</h3>
              <p className="member-role">Customer Experience Manager</p>
              <p>Michael works tirelessly to ensure every customer interaction exceeds expectations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Join Our Journey</h2>
          <p>Experience the difference of shopping with a company that truly cares.</p>
          <div className="cta-buttons">
            <Link to="/products" className="cta-button primary">Shop Now</Link>
            <Link to="/contact" className="cta-button secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;