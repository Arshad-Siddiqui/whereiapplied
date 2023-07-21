import { Skeleton } from "@mui/material";

export default function ApplicationSkeleton() {
  const amountOfFullLines = new Array(6).fill(0);
  return (
    <div className="application-skeleton">
      {amountOfFullLines.map((_, index) => (
        <div key={index} className="skeleton-piece">
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="80%" />
        </div>
      ))}
    </div>
  );
}
