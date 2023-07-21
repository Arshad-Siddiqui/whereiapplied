import "./feed.css";
import Application from "../application/application";
import { Application as ApplicationType } from "../../types";
import ApplicationSkeleton from "../application/applicationSkeleton";

export default function Feed({
  applications,
  isLoading,
}: {
  applications: ApplicationType[];
  isLoading: boolean;
}) {
  return (
    <div className="feed">
      <div className="feed-body">
        {isLoading && <ApplicationSkeleton />}
        {applications.map((application, index) => (
          <Application application={application} key={index} />
        ))}
      </div>
    </div>
  );
}
