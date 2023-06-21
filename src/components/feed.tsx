import "./feed.css";
import { useState, useEffect } from "react";
import Application from "./application";
import Button from "@mui/material/Button";

export default function Feed() {
  const [applications, setApplications] = useState<application[]>([]);

  useEffect(() => {
    fetch("api/applications")
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, []);

  return (
    <div className="feed">
      <div className="feed-body">
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
