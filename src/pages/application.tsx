import ApplicationForm from "../components/applicationForm/applicationForm";
import "./application.css";
import FormAppBar from "../components/formAppBar/formAppbar";

export default function ApplicationPage() {
  return (
    <div className="application-form-page page">
      <FormAppBar />
      <ApplicationForm />
    </div>
  );
}
