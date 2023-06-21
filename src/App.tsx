import { Route, Routes } from "react-router-dom";
import "./App.css";
import FeedPage from "./pages/feed";
import ApplicationPage from "./pages/application";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FeedPage />} />
      <Route path="/application-form" element={<ApplicationPage />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
