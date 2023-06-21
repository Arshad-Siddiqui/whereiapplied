import Card from "@mui/material/Card";
import "./application.css";

export default function Application({
  application,
}: {
  application: application;
}) {
  return (
    <Card className="application-container">
      <div className="application-text-container">
        <div className="application-header">{application.name}</div>
        <div className="application-status">
          {application.applied ? application.status : "Not Applied"}
        </div>
        <div className="date-applied">
          Date Applied: {application.date?.toString() || "12/12/12"}
        </div>
      </div>
      <img src="https://logo.clearbit.com/clearbit.com" />
    </Card>
  );
}

type application = {
  name: string;
  applied: boolean;
  status: string;
  date: Date | null;
};
