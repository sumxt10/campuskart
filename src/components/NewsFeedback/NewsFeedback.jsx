import { useEffect, useState } from "react";
import "./NewsFeedback.css";
import { ChevronRight } from "lucide-react";
import { getEducationNews } from "../../services/newsApi";

const fallbackImg =
  "https://via.placeholder.com/300x200?text=CampusKart";

const NewsFeedback = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEducationNews()
      .then(setNews)
      .finally(() => setLoading(false));
  }, []);
  return (
    <section className="newsfeedback">
      {/* NEWS */}
      <div className="nf-header">
        <div>
          <h2>Latest College News & Updates</h2>
          <p>Stay updated with exams, results, and education news</p>
        </div>
        <a className="nf-link">
          View All <ChevronRight size={18} />
        </a>
      </div>

     {loading ? (
  <p className="loading">Loading news...</p>
) : (
  <div className="news-grid">
    <div className="news-main">
      <img src={news[0]?.urlToImage || fallbackImg} />
      <div className="news-text">
        <span>{news[0]?.publishedAt?.slice(0, 10)}</span>
        <h3>{news[0]?.title}</h3>
        <p>{news[0]?.description}</p>
        <a href={news[0]?.url} target="_blank" className="read-more">
          Read Full Article <ChevronRight size={14} />
        </a>
      </div>
    </div>

    <div className="news-list">
      {news.slice(1).map((n, i) => (
        <div key={i} className="news-item">
          <img src={n.urlToImage || fallbackImg} />
          <div>
            <span>{n.publishedAt?.slice(0, 10)}</span>
            <h4>{n.title}</h4>
            <p>{n.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
    </section>
  );
};

export default NewsFeedback;
