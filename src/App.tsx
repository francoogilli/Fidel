import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scrollTop";
import FullScreenSpinner from "./components/spinner";
import Contact from "./pages/Contact";

const Home = lazy(() => import("./pages/Home"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Plans = lazy(() => import("./pages/Plans"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<FullScreenSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/precios" element={<Plans />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
