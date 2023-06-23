import ApplicationForm from "../components/applicationForm/applicationForm";
import "./application.css";
import FormAppBar from "../components/formAppBar/formAppbar";

export default function ApplicationPage() {
  return (
    <div className="application-form-page page">
      <FormAppBar />
      <div className="application-form-page-body">
        <ApplicationForm />
      </div>
    </div>
  );
}
