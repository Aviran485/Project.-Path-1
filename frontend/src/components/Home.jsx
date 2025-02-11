import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AiImage from "../images/th.jpg";
import DogImage from "../images/aavas.jpg";
import RepImage from "../images/rep.jpeg";

const API_BASE_URL = "http://localhost:5000/reports";

function Home() {
  const articles = [
    { id: 1, title: "Learn About AI", image: AiImage, content: "Learn the fundamentals of Artificial Intelligence.", link: "/ai" },
    { id: 2, title: "Dog Breed Information", image: DogImage, content: "Discover information about various dog breeds.", link: "/dog-breed" },
    { id: 3, title: "Send Report", image: RepImage, content: "Submit a report and help us improve.", link: "/report" },
  ];

  const [reports, setReports] = useState([]);
  const [editingReport, setEditingReport] = useState(null);
  const [updatedReport, setUpdatedReport] = useState({ location: "", description: "" });

  // 📌 הבאת כל הדיווחים מה-Backend
  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setReports(response.data);
    } catch (error) {
      console.error("❌ Error fetching reports:", error);
    }
  };

  // 📌 הכנסת הדיווח לעריכה
  const handleEdit = (report) => {
    setEditingReport(report.id);
    setUpdatedReport({ location: report.location, description: report.description });
  };

  // 📌 עדכון הדיווח ב-DB
  const handleSaveEdit = async (id) => {
    try {
      await axios.put(`${API_BASE_URL}/update/${id}`, updatedReport);
      setReports(reports.map((r) => (r.id === id ? { ...r, ...updatedReport } : r)));
      setEditingReport(null); // יציאה ממצב עריכה
    } catch (error) {
      console.error("❌ Error updating report:", error);
    }
  };

  return (
    <div className="main">
      <div className="articles-list">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <Link to={article.link}>
              <img src={article.image} alt={article.title} className="article-image" />
            </Link>
            <h2 className="article-title">{article.title}</h2>
            <p className="article-content">{article.content}</p>
          </div>
        ))}
      </div>

      <div>
        <h1>Stray Dog Reports</h1>
        <ul>
          {reports.length === 0 ? (
            <p>No reports available.</p>
          ) : (
            reports.map((report) => (
              <li key={report.id}>
                {editingReport === report.id ? (
                  // 📌 מצב עריכה - תיבות קלט לשינוי
                  <>
                    <input type="text" value={updatedReport.location} onChange={(e) => setUpdatedReport({ ...updatedReport, location: e.target.value })} />
                    <input type="text" value={updatedReport.description} onChange={(e) => setUpdatedReport({ ...updatedReport, description: e.target.value })} />
                    <button onClick={() => handleSaveEdit(report.id)}>Save</button>
                    <button onClick={() => setEditingReport(null)}>Cancel</button>
                  </>
                ) : (
                  // 📌 מצב רגיל - הצגת הנתונים עם כפתור עריכה
                  <>
                    <strong>Location:</strong> {report.location} - <strong>Details:</strong> {report.description}
                    <button onClick={() => handleEdit(report)}>Edit</button>
                  </>
                )}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Home;
