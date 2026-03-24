import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import WelcomePage from "./pages/Welcome";
const Dashboard = lazy(() => import("./pages/Dashboard"));
import Spinner from "./components/ui/Spinner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route
        path="/home"
        element={
          <Suspense fallback={<Spinner />}>
            <Dashboard />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
