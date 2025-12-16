"use client";


import HeroSection from "./landing-page-v2/hero-section";
import FeaturesSection from "./landing-page-v2/features-section";
import DetailsSections from "./landing-page-v2/details-sections";
import EdtechCta from "./landing-page-v2/edtech-cta";
import WhatsappIntegration from "./landing-page-v2/whatsapp-integration";
import EdtechCtaWhatsapp from "./landing-page-v2/edtech-cta-whatsapp";
import Modal from "./landing-page-v2/modal";
import Navbar from "./landing-page-v2/navbar";
import NavbarV2 from "./landing-page-v2/navbar-v2";
import HeroSectionV2 from "./landing-page-v2/hero-section-v2";
import Services from "./landing-page-v2/services";
import UseModal from "@/hooks/use-modal";


const MainPageV2 = () => {

  const {
    isModalOpen,
    modalHeading,
    modalSubHeading,
    handleModalClose,
    handleModalOpen
  } = UseModal()


  return (
    <div>
      <NavbarV2 />
      <HeroSectionV2 />
      
      {/* <Navbar handleOpen={handleModalOpen} /> */}
      {/* <HeroSection handleOpen={handleModalOpen} /> */}

      <Services />
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
