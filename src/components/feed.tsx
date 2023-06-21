import "./feed.css";
import Application from "./application";
import { Application as ApplicationType } from "../types";

export default function Feed({
  applications,
}: {
  applications: ApplicationType[];
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
