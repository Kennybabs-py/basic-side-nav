import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Onboarding from "./pages/onboarding";
import SignUp from "./pages/signup";
import Auth from "./pages/auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/" element={<Onboarding />}>
          <Route index element={<SignUp />} />

          <Route path="auth" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
