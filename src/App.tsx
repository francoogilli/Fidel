import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/Home";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import ScrollToTop from "./components/scrollTop";
import { Plans } from "./pages/Plans";

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
