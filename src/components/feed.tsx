import "./feed.css";
import { useState, useEffect } from "react";
import Application from "./application";

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
        {applications.map((application, index) => (
          <Application application={application} key={index} />
        ))}
      </div>
    </div>
  );
}

type application = {
  name: string;
  applied: boolean;
  status: string;
  date: Date | null;
};
