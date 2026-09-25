import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import PartnershipsSection from '../components/PartnershipsSection';
import MoUSigningSection from '../components/MoUSigningSection';
import WorkshopsSection from '../components/WorkshopsSection';
import GallerySection from '../components/GallerySection';
import JourneySection from '../components/JourneySection';
import CoursesSection from '../components/CoursesSection';
import RealProjectsSection from '../components/RealProjectsSection';
import ReviewsSection from '../components/ReviewsSection';
import ImpactDarkSection from '../components/ImpactDarkSection';
import AboutSection from '../components/AboutSection';
import PartnerCtaSection from '../components/PartnerCtaSection';
import ContactSection from '../components/ContactSection';
import PartnershipModal from '../components/PartnershipModal';
import WorkshopModal from '../components/WorkshopModal';
import CourseModal from '../components/CourseModal';
import LightboxModal from '../components/LightboxModal';
import PartnerInquiryModal from '../components/PartnerInquiryModal';

export default function HomePage() {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [partnerModalType, setPartnerModalType] = useState('Institutional MoU');

  const handleOpenPartnerModal = (type = 'Institutional MoU') => {
    setPartnerModalType(type);
    setPartnerModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection onOpenPartnerModal={handleOpenPartnerModal} />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Workshops & Training (Moved to Top) */}
      <WorkshopsSection onSelectWorkshop={setSelectedWorkshop} />

      {/* 4. MoU Signing Section */}
      <MoUSigningSection onSelectMou={(mou) => {
        setSelectedCollege({
          id: mou.collegeId,
          name: mou.collegeName,
          location: mou.location,
          mouDate: mou.date,
          badge: "MoU Signed",
          badge2: "Industry Partner",
          image: mou.image,
          mouImage: mou.image,
          gallery: mou.gallery,
          description: mou.shortDesc,
          studentsBenefited: 350
        });
      }} />

      {/* 5. College Partnerships */}
      <PartnershipsSection onSelectCollege={setSelectedCollege} />

      {/* 6. Visual Gallery Section */}
      <GallerySection onOpenLightbox={setLightboxPhoto} />

      {/* 7. Journey & Impact Pipeline */}
      <JourneySection />

      {/* 8. Courses We Offer */}
      <CoursesSection onSelectCourse={setSelectedCourse} />

      {/* 9. Real-World Projects */}
      <RealProjectsSection />

      {/* 10. Student Reviews Testimonials */}
      <ReviewsSection />

      {/* 11. Dark Impact Statistics */}
      <ImpactDarkSection />

      {/* 12. About Media Wave */}
      <AboutSection />

      {/* 13. Call To Action Partner Strip */}
      <PartnerCtaSection onOpenPartnerModal={handleOpenPartnerModal} />

      {/* 14. Contact Form Section */}
      <ContactSection />

      {/* Interactive Modals */}
      <PartnershipModal 
        college={selectedCollege} 
        onClose={() => setSelectedCollege(null)} 
      />

      <WorkshopModal 
        workshop={selectedWorkshop} 
        onClose={() => setSelectedWorkshop(null)} 
      />

      <CourseModal 
        course={selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
      />

      <LightboxModal 
        item={lightboxPhoto} 
        onClose={() => setLightboxPhoto(null)} 
      />

      <PartnerInquiryModal 
        isOpen={partnerModalOpen} 
        initialType={partnerModalType}
        onClose={() => setPartnerModalOpen(false)} 
      />
    </div>
  );
}
