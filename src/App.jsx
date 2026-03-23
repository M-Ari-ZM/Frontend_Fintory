import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
