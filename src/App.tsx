import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scrollTop";

const Home = lazy(() => import("./pages/Home"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Plans = lazy(() => import("./pages/Plans"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
