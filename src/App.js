import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.css";

import NavMenu from "./components/NavMenu";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GlassEffects from "./components/GlassEffects";

// Keyed on the path so every route change replays the page-enter animation.
function AppRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-enter">
      <Routes location={location}>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="bg-orbs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Router>
        <GlassEffects />
        <NavMenu />
        <ScrollToTop />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
