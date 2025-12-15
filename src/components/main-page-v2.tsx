"use client";

import React, { useState } from "react";
import HeroSection from "./landing-page-v2/hero-section";
import FeaturesSection from "./landing-page-v2/features-section";
import DetailsSections from "./landing-page-v2/details-sections";
import EdtechCta from "./landing-page-v2/edtech-cta";
import WhatsappIntegration from "./landing-page-v2/whatsapp-integration";
import EdtechCtaWhatsapp from "./landing-page-v2/edtech-cta-whatsapp";
import Modal from "./landing-page-v2/modal";
import Navbar from "./landing-page-v2/navbar";

const MainPageV2 = () => {
  // ====================== MODAL use state ======================
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalHeading, setModalHeading] = useState("");

  const handleModalOpen = (heading?: string) => {
    heading && setModalHeading(heading);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalHeading("");
  };
  // ============================================

  return (
    <div>
      <Navbar handleOpen={handleModalOpen} />
      <HeroSection handleOpen={handleModalOpen} />
      <FeaturesSection />
      <DetailsSections />
      <EdtechCta handleOpen={handleModalOpen} />
      <WhatsappIntegration handleOpen={handleModalOpen} />
      <EdtechCtaWhatsapp handleOpen={handleModalOpen} />

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        modalHeading={modalHeading}
        handleOpen={handleModalOpen}
        handleClose={handleModalClose}
      />
    </div>
  );
};

export default MainPageV2;
