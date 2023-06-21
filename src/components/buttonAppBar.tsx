import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Add from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

export default function ButtonAppBar({
  setApplications,
}: {
  setApplications: Dispatch<SetStateAction<application[]>>;
}) {
  const sort = () => {
    setApplications((prev: application[]) => {
      return prev.filter((application) => application.status != "Rejected");
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Feed
          </Typography>
          <Button color="inherit" component={Link} to="/application-form">
            <Add color="inherit" />
          </Button>
          <Button color="inherit" onClick={sort}>
            Sort
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

interface application {
  name: string;
  applied: boolean;
  status: string;
  date: Date | null;
  website: string;
}
