import {
  Toolbar,
  Typography,
  Button,
  Box,
  AppBar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Add from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import FilterButton from "./filterButton";
import ReverseButton from "./reverseButton";
import { Application } from "../../types";
import { Refresh } from "@mui/icons-material";
import getApps from "../../fetch/getApps";

export default function ButtonAppBar({
  setApplications,
  setOpen,
}: {
  setApplications: Dispatch<SetStateAction<Application[]>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const refreshApps = () => {
    getApps().then((apps) => {
      setApplications(apps.reverse());
    });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Feed
          </Typography>
          <ReverseButton setApplications={setApplications} />
          <FilterButton setApplications={setApplications} />
          <Button color="inherit" onClick={refreshApps}>
            <Refresh color="inherit" />
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/application-form">
            <Add color="inherit" />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
