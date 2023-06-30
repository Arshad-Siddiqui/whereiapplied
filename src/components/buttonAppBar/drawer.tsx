import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction } from "react";

export default function Drawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <MuiDrawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <Box p={2}>
        <Typography variant="h6" component="div">
          Side Panel
        </Typography>
      </Box>
    </MuiDrawer>
  );
}
