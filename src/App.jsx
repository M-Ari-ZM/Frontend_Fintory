import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import WelcomePage from "./pages/Welcome";
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route
        path="/home"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Dashboard />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
