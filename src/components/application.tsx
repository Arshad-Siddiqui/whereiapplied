import Card from "@mui/material/Card";
import "./application.css";
import { Typography } from "@mui/material";

export default function Application({
  application,
}: {
  application: application;
}) {
  // Website is used to get the logo from clearbit
  const website: string = application.website || "clearbit.com";

  const containerClassName = `application-container ${
    application.status === "Rejected" ? "rejected" : ""
  }`;
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
        >
          Date Applied: {application.date?.toString() || "12/12/12"}
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

type application = {
  name: string;
  applied: boolean;
  status: string;
  date: Date | null;
  website: string;
};
