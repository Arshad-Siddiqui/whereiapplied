import ButtonAppBar from "../components/buttonAppBar";
import Feed from "../components/feed";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { Application } from "../types";

export default function FeedPage() {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    fetch("api/applications")
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="feed-page page">
      <ButtonAppBar setApplications={setApplications} />
      <Feed applications={applications} />
      <Footer />
    </div>
  );
}
