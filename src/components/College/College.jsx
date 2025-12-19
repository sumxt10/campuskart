import { useEffect, useState } from "react";
import "./College.css";
import { ChevronRight } from "lucide-react";
import { fetchIndiaUniversities } from "../../services/collegeApi";

const College = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIndiaUniversities()
      .then((data) => setColleges(data.slice(0, 6)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="college-container">
      <div className="section-header">
        <h2>Top Universities in India</h2>
        <a className="view-all">
          View All <ChevronRight size={18} />
        </a>
      </div>

      {loading ? (
        <p className="loading">Loading universities...</p>
      ) : (
        <div className="colleges-grid">
          {colleges.map((c, i) => (
            <div key={i} className="college-card">
              <div className="college-header">
                <div className="placeholder-logo">
                  {c.name.charAt(0)}
                </div>
                <div className="college-info">
                  <h3>{c.name}</h3>
                  <p>{c.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default College;
