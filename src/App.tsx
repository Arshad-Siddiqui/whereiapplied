import { Route, Routes } from "react-router-dom";
import "./App.css";
import FeedPage from "./pages/feed";
import ApplicationPage from "./pages/application";
import Test from "./pages/test";
import { Application } from "./types";
import { useEffect, useState } from "react";
import getApps from "./fetch/getApps";

function App() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getApps().then((apps) => {
      setApplications(apps.reverse());
      setIsLoading(false);
    });
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <FeedPage
            applications={applications}
            setApplications={setApplications}
            isLoading={isLoading}
          />
        }
      />
      <Route path="/application-form" element={<ApplicationPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
