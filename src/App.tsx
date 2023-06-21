import "./App.css";
import FeedPage from "./pages/feed";

function App() {
  return (
    <div className="app">
      <FeedPage />
    </div>
  );
}

// TODO: Fix issue where the App is of max fixed width and the navbar is inside of it.
export default App;
