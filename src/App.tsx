import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { Footer } from "./components/Footer/Footer";
import { InitialLoader } from "./components/Loader/InitialLoader";
import { HomePage } from "./pages/HomePage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { FacilityPage } from "./pages/FacilityPage";
import { TrainersPage } from "./pages/TrainersPage";
import { ContactPage } from "./pages/ContactPage";
import { useGlobalAnimationObserver } from "./hooks/useInViewAnimation";
import "./App.css";

/**
 * Automatically scrolls to top on route change.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * App layout component with navigation, routes, and mobile menu.
 */
function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Activate global IntersectionObserver for pause/unpause of animations
  useGlobalAnimationObserver();

  return (
    <div className="kinetic-app">
      <InitialLoader />
      <ScrollToTop />
      <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <div className="kinetic-main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/facility" element={<FacilityPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

/**
 * Main application entrypoint containing clean React Router setup.
 */
export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
