import React from 'react';
import './Header.css';
import { ArrowRight } from 'lucide-react';
import girlpic from '../../assets/girl.png';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-left">
          <h1 className="header-title">
            Explore Your <span className="highlight">Gateway</span> to<br />
            Your <span className="highlight">Dream</span> College
          </h1>
          <p className="header-subtitle">
            "Personalized college search at your fingertips."
          </p>
          <button className="explore-button">
            Start your exploration <ArrowRight size={20} />
          </button>
        </div>

        <div className="header-right">
          <div className="testimonials-container">
            <div className="testimonial-card top">
              <div className="user-info">
                <span className="user-location">Meet</span>
                <span className="user-city">Mumbai</span>
              </div>
              <div className="rating">★★★★★</div>
              <p className="testimonial-text">Thanks a lot CampusSpot!!!"</p>
            </div>

            <div className="testimonial-card middle">
              <div className="user-info">
                <span className="user-location">Deep</span>
                <span className="user-city">Gujarat</span>
              </div>
              <div className="rating">★★★★</div>
              <p className="testimonial-text">"I got into my dream college because of CampusSpot 🌟"</p>
            </div>

            <div className="testimonial-card bottom">
              <div className="user-info">
                <span className="user-location">Megha</span>
                <span className="user-city">Hyderabad</span>
              </div>
              <div className="rating">★★★★</div>
              <p className="testimonial-text">"CampusSpot helped me to my the perfect college for me"</p>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon college-icon"></div>
          <h3>Choose from 500+ Colleges</h3>
          <a href="#" className="feature-link">Explore College</a>
        </div>

        <div className="feature-card">
          <div className="feature-icon exam-icon"></div>
          <h3>Test Your Skills by giving Exams</h3>
          <a href="#" className="feature-link">Explore all the exams</a>
        </div>

        <div className="feature-card">
          <div className="feature-icon news-icon"></div>
          <h3>Check The Latest Educational News</h3>
          <a href="#" className="feature-link">Go to News Section</a>
        </div>
      </div>
    </div>
  );
};

export default Header;