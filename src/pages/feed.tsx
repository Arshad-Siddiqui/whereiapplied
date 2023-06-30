import ButtonAppBar from "../components/buttonAppBar/buttonAppBar";
import Feed from "../components/feed/feed";
import Footer from "../components/footer/footer";
import { Dispatch, SetStateAction } from "react";
import { Application } from "../types";
import Drawer from "../components/buttonAppBar/drawer";
import { useState } from "react";

export default function FeedPage({
  applications,
  isLoading,
  setApplications,
}: {
  applications: Application[];
  isLoading: boolean;
  setApplications: Dispatch<SetStateAction<Application[]>>;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="feed-page page">
      <Drawer open={open} setOpen={setOpen} />
      <ButtonAppBar setApplications={setApplications} setOpen={setOpen} />
      <Feed applications={applications} isLoading={isLoading} />
      <Footer />
    </div>
  );
}
