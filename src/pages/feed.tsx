import ButtonAppBar from "../components/buttonAppBar/buttonAppBar";
import Feed from "../components/feed/feed";
import Footer from "../components/footer/footer";
import { Dispatch, SetStateAction } from "react";
import { Application } from "../types";

export default function FeedPage({
  applications,
  isLoading,
  setApplications,
}: {
  applications: Application[];
  isLoading: boolean;
  setApplications: Dispatch<SetStateAction<Application[]>>;
}) {
  return (
    <div className="feed-page page">
      <ButtonAppBar setApplications={setApplications} />
      <Feed applications={applications} isLoading={isLoading} />
      <Footer />
    </div>
  );
}
