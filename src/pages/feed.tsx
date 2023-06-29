import ButtonAppBar from "../components/buttonAppBar/buttonAppBar";
import Feed from "../components/feed/feed";
import Footer from "../components/footer/footer";
import { useEffect, useState } from "react";
import { Application } from "../types";

export default function FeedPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://whereiapplied.onrender.com/applications", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setApplications(data.reverse());
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="feed-page page">
      <ButtonAppBar setApplications={setApplications} />
      <Feed applications={applications} isLoading={isLoading} />
      <Footer />
    </div>
  );
}
