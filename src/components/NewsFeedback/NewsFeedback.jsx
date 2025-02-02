import React from 'react';
import './NewsFeedback.css';
import { ChevronRight } from 'lucide-react';

const NewsFeedback = () => {
  const newsItems = [
    {
      date: '1 July 2024',
      title: 'NEET PG 2024 Date Live: New exam date awaited at notboard.edu.in',
      content: 'NEET PG 2024 Date Live: The National Board of Examinations in Medical Sciences (NBEMS) is expected to announce the NEET PG new exam date this week. As per PTI, the exam will likely be conducted in mid-August an...',
      image: '',
    },
    {
      date: '25 Jun 2024',
      title: 'Rajasthan PTET Result 2024 Live: PTET results awaited at ptetvmou2024.com',
      content: 'Vardhaman Mahavir Open University Kota is expected to announce the Rajasthan Pre-Teacher Education Test (PTET 2024) r...',
      image: '',
    },
    {
      date: '23 Jun 2024',
      title: 'Vijay backs DMK\'s resolution against NEET',
      content: 'Chennai: Strongly batting for NEET exemption, actor and Tamilaga Vetri Kazhagam (TVK) leader Vijay on Wednesday sa...',
      image: '',
    },
    {
      date: '22 Jun 2024',
      title: 'UPSC CSE Mains 2024 DAF-1 released, direct link here',
      content: 'The Union Public Service Commission (UPSC) has issued the Direct Application Form-1 (DAF 1) for the Civil Services Main Examination 202...',
      image: '',
    }
  ];

  const feedbacks = [
    {
      name: 'Meera Modi',
      role: 'Student At IIT Mumbai',
      rating: 5,
      content: '"I was so scared before my admission because I did not have any idea about the colleges but thanks to CampusSpot I got the admission in one of the best colleges!"',
      avatar: ''
    },
    {
      name: 'Deep Shah',
      role: 'Student At Charlis St. College',
      rating: 4,
      content: '"CampusSpot made college searching do damn easy!!"',
      avatar: ''
    },
    {
      name: 'Darshan',
      role: 'Student At IIT Mumbai',
      rating: 4,
      content: '"CampusSpot search incredibly"',
      avatar: ''
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="newsfeed-container">
      {/* News Section */}
      <div className="section-header">
        <div>
          <h2>Latest College News and Updates</h2>
          <p className="subtitle">Browse top class courses by browsing our category which will be more easy for you.</p>
        </div>
        <a href="#" className="view-all">
          View All News <ChevronRight size={20} />
        </a>
      </div>

      <div className="news-grid">
        <div className="main-news">
          <img src={newsItems[0].image} alt={newsItems[0].title} className="news-image" />
          <div className="news-content">
            <span className="news-date">{newsItems[0].date}</span>
            <h3 className="news-title">{newsItems[0].title}</h3>
            <p className="news-excerpt">{newsItems[0].content}</p>
            <a href="#" className="read-more">Read Full Article <ChevronRight size={16} /></a>
          </div>
        </div>
        <div className="news-list">
          {newsItems.slice(1).map((news, index) => (
            <div key={index} className="news-item">
              <img src={news.image} alt={news.title} className="news-thumbnail" />
              <div className="news-item-content">
                <span className="news-date">{news.date}</span>
                <h4 className="news-item-title">{news.title}</h4>
                <p className="news-item-excerpt">{news.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Section */}
      <div className="feedback-section">
        <h2>Students Experiences and Feedbacks</h2>
        <p className="subtitle">Find out how our users are spreading the word!</p>

        <div className="feedback-grid">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-card">
              <div className="rating">{renderStars(feedback.rating)}</div>
              <p className="feedback-content">{feedback.content}</p>
              <div className="user-info">
                <img src={feedback.avatar} alt={feedback.name} className="user-avatar" />
                <div>
                  <h4 className="user-name">{feedback.name}</h4>
                  <p className="user-role">{feedback.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFeedback;