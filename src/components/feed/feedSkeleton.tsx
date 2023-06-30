import ApplicationSkeleton from "../application/applicationSkeleton";

export default function FeedSkeleton() {
  const amountOfApplications = new Array(3).fill(0);
  return (
    <div className="feed">
      <div className="feed-body">
        {amountOfApplications.map((_, index) => (
          <ApplicationSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
