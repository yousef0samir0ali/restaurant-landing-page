import Navbar from "./components/navbar/Navbar";
import "./App.css";
import LandingPage from "./pages/landing-page/LandingPage";

function App() {
  return (
    <div className="overlay">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
