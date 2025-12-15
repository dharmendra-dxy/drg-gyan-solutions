"use client";

import React, { useState } from 'react'
import Navbar from './landing-page-v1/Navbar';
import HeroSection from './landing-page-v1/HeroSection';
import SuperpowersSection from './landing-page-v1/SuperPowerSections';
import LeadGeneration from './landing-page-v1/LeadGeneration';
import LeadDistribution from './landing-page-v1/LeadDistribution';
import LeadManagement from './landing-page-v1/LeadManagement';
import MarketingAutomation from './landing-page-v1/MarketingAutomation';
import DealManagement from './landing-page-v1/DealManagement';
import WhyMagloCrmSection from './landing-page-v1/WhyMagloSection';
import StartTrial from './landing-page-v1/StartTrial';
import Footer from './landing-page-v1/Footer';
import Modal from './landing-page-v1/Modal';

const MainPageV1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <Navbar openModal={openModal} />
      <main className="min-h-screen bg-white">
        <HeroSection thankyouPageUrl="/thankyou" openModal={openModal}/>
      </main>
      <SuperpowersSection openModal={openModal} />
      <LeadGeneration openModal={openModal}/>
      <LeadDistribution openModal={openModal} />
      <LeadManagement openModal={openModal} />
      <MarketingAutomation  openModal={openModal}/>
      <DealManagement openModal={openModal} />
      <main className="min-h-screen bg-[#fdf9ee]">
        <WhyMagloCrmSection />
      </main>
      <StartTrial openModal={openModal} />
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default MainPageV1