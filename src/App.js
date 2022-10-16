import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Onboarding from "./pages/onboarding";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/" element={<Onboarding />} />
      </Routes>
    </div>
  );
}

export default App;
