import "./App.css";
import About from "./components/home-page/About";
import Home from "./components/home-page/Home";
import Navbar from "./components/home-page/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
    </main>
  );
}

export default App;
