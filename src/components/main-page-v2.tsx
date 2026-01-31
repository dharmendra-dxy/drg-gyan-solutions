"use client";

import DetailsSections from "./landing-page-v2/details-sections";
import Modal from "./landing-page-v2/modal";

import HeroSectionV2 from "./landing-page-v2/hero-section-v2";
import Services from "./landing-page-v2/services";
import UseModal from "@/hooks/use-modal";
import Footer from "./landing-page-v2/footer";
import CtaSection from "./landing-page-v2/cta-section";

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
      <HeroSectionV2 />
      <Services />
      <DetailsSections />
      <CtaSection/>
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
