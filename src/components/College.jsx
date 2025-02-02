import React from 'react';
import './College.css';
import { ChevronRight } from 'lucide-react';

const College = () => {
  const popularColleges = [
    {
      name: 'Marvadi University',
      location: 'Rajkot',
      logo: '',
      courses: ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'MBA'],
      moreCount: 7
    },
    {
      name: 'R.K University',
      location: 'Rajkot',
      logo: '',
      courses: ['B.Tech', 'M.Tech', 'BBA', 'BCA'],
      moreCount: 8
    },
    {
      name: 'Darshan University',
      location: 'Rajkot',
      logo: '',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'BCA', 'Commerce'],
      moreCount: 8
    },
    {
      name: 'Atmiya University',
      location: 'Rajkot',
      logo: '',
      courses: ['Commerce', 'Arts', 'Ph.D.', 'B.Com', 'BBA'],
      moreCount: 4
    },
    {
      name: 'Christ College',
      location: 'Rajkot',
      logo: '',
      courses: ['BA English', 'Bsc', 'B.Tech', 'Msc', 'BBA', 'BCA'],
      moreCount: 4
    },
    {
      name: 'B.G Garaiya',
      location: 'Rajkot',
      logo: '',
      courses: ['Medical', 'D.Pharma', 'MBBS', 'Pharmacy'],
      moreCount: 10
    }
  ];

  const courseCategories = [
    {
      title: 'B.Tech',
      icon: '💻',
      count: '180+',
      bgColor: 'light-blue'
    },
    {
      title: 'MBA',
      icon: '💼',
      count: '100+',
      bgColor: 'light-yellow'
    },
    {
      title: 'Medical',
      icon: '⚕️',
      count: '150+',
      bgColor: 'light-red'
    },
    {
      title: 'Design',
      icon: '✏️',
      count: '70+',
      bgColor: 'light-green'
    },
    {
      title: 'Accounts',
      icon: '📊',
      count: '90+',
      bgColor: 'light-purple'
    },
    {
      title: 'Science',
      icon: '🔬',
      count: '100+',
      bgColor: 'light-cyan'
    }
  ];

  return (
    <div className="college-container">
      <div className="section-header">
        <h2>Popular Colleges In Your City</h2>
        <a href="#" className="view-all">
          View All Courses <ChevronRight size={20} />
        </a>
      </div>

      <div className="colleges-grid">
        {popularColleges.map((college, index) => (
          <div key={index} className="college-card">
            <div className="college-header">
              <img src={college.logo} alt={college.name} className="college-logo" />
              <div className="college-info">
                <h3>{college.name}</h3>
                <p>{college.location}</p>
              </div>
            </div>
            <div className="courses-tags">
              {college.courses.map((course, idx) => (
                <span key={idx} className="course-tag">{course}</span>
              ))}
              {college.moreCount > 0 && (
                <span className="more-tag">+{college.moreCount} more</span>
              )}
            </div>
          </div>
        ))}
        <div className="more-colleges">+22 more</div>
      </div>

      <div className="section-header">
        <h2>Choose Colleges By The Courses Provided</h2>
        <p className="section-subtitle">
          Browse top class courses by browsing our category which will be more easy for you.
        </p>
        <a href="#" className="view-all">
          View All Courses <ChevronRight size={20} />
        </a>
      </div>

      <div className="categories-grid">
        {courseCategories.map((category, index) => (
          <div key={index} className={`category-card ${category.bgColor}`}>
            <span className="category-icon">{category.icon}</span>
            <div className="category-info">
              <h3>{category.title}</h3>
              <p>by {category.count} Colleges</p>
            </div>
          </div>
        ))}
        <div className="more-categories">+30 more</div>
      </div>
    </div>
  );
};

export default College;