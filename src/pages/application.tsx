import { Button } from "@mui/material";
import ApplicationForm from "../components/applicationForm";
import "./application.css";
import { Link } from "react-router-dom";

export default function ApplicationPage() {
  return (
    <div className="application-form-page page">
      <ApplicationForm />
      <Button variant="contained" component={Link} to="/" color="primary">
        Home
      </Button>
    </div>
  );
}
