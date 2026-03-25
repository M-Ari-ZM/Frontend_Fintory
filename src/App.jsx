import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import WelcomePage from "./pages/Welcome";
const Home = lazy(() => import("./pages/Home"));
const Report = lazy(() => import("./pages/Report"));
import Spinner from "./components/ui/Spinner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route
        path="/home"
        element={
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/report"
        element={
          <Suspense fallback={<Spinner />}>
            <Report />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
