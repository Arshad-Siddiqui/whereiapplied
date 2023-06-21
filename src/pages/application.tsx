import { Button } from "@mui/material";
import ApplicationForm from "../components/applicationForm";
import "./application.css";

export default function ApplicationPage() {
  return (
    <div className="application-form-page page">
      <ApplicationForm />
      <Button variant="contained" href="/" color="primary">
        Home
      </Button>
    </div>
  );
}
