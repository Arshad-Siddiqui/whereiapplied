import ButtonAppBar from "../components/buttonAppBar/buttonAppBar";
import Feed from "../components/feed/feed";
import Footer from "../components/footer/footer";
import { Dispatch, SetStateAction } from "react";
import { Application } from "../types";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box p={2}>
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
      <ButtonAppBar setApplications={setApplications} setOpen={setOpen} />
      <Feed applications={applications} isLoading={isLoading} />
      <Footer />
    </div>
  );
}
