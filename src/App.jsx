import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import WelcomePage from "./pages/Welcome";
const Home = lazy(() => import("./pages/Home"));
const Report = lazy(() => import("./pages/Report"));
const About = lazy(() => import("./pages/About"));
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
      <Route
        path="/about"
        element={
          <Suspense fallback={<Spinner />}>
            <About />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
