import { Skeleton } from "@mui/material";

export default function ApplicationSkeleton() {
  const amountOfFullLines = new Array(3).fill(0);
  return (
    <div className="application-skeleton">
      {amountOfFullLines.map((_, index) => (
        <div>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} key={index} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="80%" />
        </div>
      ))}
    </div>
  );
}
