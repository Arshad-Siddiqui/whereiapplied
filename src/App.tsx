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

export default App;
