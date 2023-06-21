import ButtonAppBar from "../components/buttonAppBar";
import Feed from "../components/feed";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

export default function FeedPage() {
  const [applications, setApplications] = useState<application[]>([]);

  useEffect(() => {
    fetch("api/applications")
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="feed-page">
      <ButtonAppBar setApplications={setApplications} />
      <Feed applications={applications} />
      <Footer />
    </div>
  );
}

interface application {
  name: string;
  applied: boolean;
  status: string;
  date: Date | null;
  website: string;
}
