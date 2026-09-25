import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PartnershipsPage from './pages/PartnershipsPage';
import PartnershipDetailPage from './pages/PartnershipDetailPage';
import WorkshopsPage from './pages/WorkshopsPage';
import WorkshopDetailPage from './pages/WorkshopDetailPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import PartnerWithUsPage from './pages/PartnerWithUsPage';
import PartnerInquiryModal from './components/PartnerInquiryModal';

// Automatically scroll window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
        
        {/* Global Navbar */}
        <Navbar onOpenPartnerModal={() => setPartnerModalOpen(true)} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/partnerships/:id" element={<PartnershipDetailPage />} />
            <Route path="/workshops" element={<WorkshopsPage />} />
            <Route path="/workshops/:id" element={<WorkshopDetailPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Partner Inquiry Modal */}
        <PartnerInquiryModal
          isOpen={partnerModalOpen}
          onClose={() => setPartnerModalOpen(false)}
        />
      </div>
    </Router>
  );
}
