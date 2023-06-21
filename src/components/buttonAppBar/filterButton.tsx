import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export default function FilterButton({
  setApplications,
}: {
  setApplications: Dispatch<SetStateAction<application[]>>;
}) {
  const sort = () => {
    setApplications((prev: application[]) => {
      return prev;
    });
  };

  return (
    <Button color="inherit" onClick={sort}>
      Filter
    </Button>
  );
}

interface application {
  name: string;
  applied: boolean;
  status: string;
  date: Date | null;
  website: string;
}
// TODO: Create an application type to import around
