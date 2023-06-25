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
  const handleSubmit = (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const applied = data.get("applied") === "on" ? true : false;

    fetch("https://whereiapplied.onrender.com/applications/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.get("name"),
        applied: applied,
        status: data.get("status"),
        date: data.get("date"),
        website: data.get("website"),
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <Card className="application-form-container">
      <form onSubmit={handleSubmit} className="application-form">
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
