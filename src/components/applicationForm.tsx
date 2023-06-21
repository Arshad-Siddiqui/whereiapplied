import { Card } from "@mui/material";
import "./applicationForm.css";

export default function ApplicationForm() {
  return (
    <Card className="application-form-container">
      <form action="/api/applications/add" className="application-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Name" />
        </label>
        <label>
          Applied:
          <input type="checkbox" name="applied" placeholder="Applied" />
        </label>
        <label>
          <input type="radio" name="status" value="Accepted" />
          Accepted
        </label>
        <label>
          <input type="radio" name="status" value="Pending" />
          Pending
        </label>
        <label>
          <input type="radio" name="status" value="Rejected" />
          Rejected
        </label>
        <label>
          Date Applied:
          <input type="date" name="date" />
        </label>
        <label>
          Website:
          <input type="url" name="website" placeholder="Website" />
        </label>
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </Card>
  );
}
