"use client";

import DetailsSections from "./landing-page-v2/details-sections";
import Modal from "./landing-page-v2/modal";
import NavbarV2 from "./landing-page-v2/navbar-v2";
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
      <NavbarV2 />
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
      <Footer/>
    </div>
  );
};

export default MainPageV2;
