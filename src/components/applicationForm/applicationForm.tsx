import {
  Card,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
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
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="accepted"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="accepted"
              control={<Radio />}
              label="Accepted"
            />
            <FormControlLabel
              value="pending"
              control={<Radio />}
              label="Pending"
            />
            <FormControlLabel
              value="rejected"
              control={<Radio />}
              label="Rejected"
            />
          </RadioGroup>
        </FormControl>
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
