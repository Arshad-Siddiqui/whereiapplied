import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Application } from "../../types";

export default function ReverseButton({
  setApplications,
}: {
  setApplications: Dispatch<SetStateAction<Application[]>>;
}) {
  const reverse = () => {
    setApplications((prev: Application[]) => {
      const reversedArray = [...prev].reverse();
      return reversedArray;
    });
  };

  return (
    <Button color="inherit" onClick={reverse}>
      Reverse
    </Button>
  );
}
