import Card from "@mui/material/Card";
import "./application.css";
import { Typography } from "@mui/material";
import { Application as ApplicationType } from "../types";

export default function Application({
  application,
}: {
  application: ApplicationType;
}) {
  // <--- Processing info for display --->
  const website: string = application.website || "clearbit.com";

  const containerClassName = `application-container ${
    application.status === "Rejected" ? "rejected" : ""
  }`;

  const dateApplied =
    application.date?.toString().split("T")[0] || "Not Specified";

  const showDate = application.date ? "block" : "none";
  // <--- End processing info for display --->

  return (
    <Card className={containerClassName}>
      <div className="application-text-container">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="application-header"
        >
          {application.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="application-status"
        >
          {application.applied ? application.status : "Not Applied"}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="date-applied"
          display={showDate}
        >
          Date Applied: {dateApplied}
        </Typography>
      </div>
      <div className="application-image-container">
        <img
          src={`https://logo.clearbit.com/${website}`}
          width="128px"
          height="auto"
        />
      </div>
    </Card>
  );
}
