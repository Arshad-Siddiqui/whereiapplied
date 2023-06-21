import "./feed.css";
import Application from "./application";

export default function Feed({
  applications,
}: {
  applications: application[];
}) {
  return (
    <div className="feed">
      <div className="feed-body">
        {applications.map((application, index) => (
          <Application application={application} key={index} />
        ))}
      </div>
    </div>
  );
}

type application = {
  name: string;
  applied: boolean;
  status: string;
  date: Date | null;
  website: string;
};
