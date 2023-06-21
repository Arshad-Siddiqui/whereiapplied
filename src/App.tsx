import "./App.css";
import Feed from "./components/feed";
import Footer from "./components/footer";
import ButtonAppBar from "./components/buttonAppBar";

function App() {
  return (
    <div className="app">
      <ButtonAppBar />
      <Feed />
      <Footer />
    </div>
  );
}

// TODO: Fix issue where the App is of max fixed width and the navbar is inside of it.
export default App;
