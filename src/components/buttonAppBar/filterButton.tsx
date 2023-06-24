import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Application } from "../../types";

export default function FilterButton({
  setApplications,
}: {
  setApplications: Dispatch<SetStateAction<Application[]>>;
}) {
  const sort = () => {
    setApplications((prev: Application[]) => {
      return prev;
    });
  };

  return (
    <Button color="inherit" onClick={sort}>
      Filter
    </Button>
  );
}
