import Card from "@mui/material/Card";

export default function Application({
  application,
}: {
  application: application;
}) {
  return (
    <Card className="application-container">
      <div className="application-header">{application.name}</div>
      <div className="application-status">
        {application.applied ? application.status : "Not Applied"}
      </div>
      <div className="date-applied">
        Date Applied: {application.date?.toString() || "12/12/12"}
      </div>
    </Card>
  );
}

type application = {
  name: string;
  applied: boolean;
  status: string;
  date: Date | null;
};
