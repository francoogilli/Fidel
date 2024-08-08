import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/Home";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import ScrollToTop from "./components/scrollTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="backgroundImage"></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
