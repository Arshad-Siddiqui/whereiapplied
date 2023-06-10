import "./feed.css";
import { useState, useEffect } from "react";

export default function Feed() {
  const [applications, setApplications] = useState<application[]>([]);

  useEffect(() => {
    fetch("api/applications")
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, []);

  return (
    <div className="feed">
      <h1 className="feed-header">Feed</h1>
      <div className="feed-body">
        <p>Here are your applications</p>
        {applications.map((application) => (
          <div className="application-container">
            <div className="application-header">{application.name}</div>
            <div className="application-status">
              {application.applied ? application.status : "Not Applied"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type application = {
  name: string;
  applied: boolean;
  status: string;
};
