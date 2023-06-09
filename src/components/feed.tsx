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
      <h1>Feed</h1>
      {applications.map((application) => (
        <div className="application">
          <h3>{application.name}</h3>
          <p>{application.applied ? application.status : "Not Applied"}</p>
        </div>
      ))}
    </div>
  );
}

type application = {
  name: string;
  applied: boolean;
  status: string;
};
