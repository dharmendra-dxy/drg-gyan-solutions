"use client";

import React, { useState } from 'react'
import Navbar from './landing-page/Navbar';
import HeroSection from './landing-page/HeroSection';
import SuperpowersSection from './landing-page/SuperPowerSections';
import LeadGeneration from './landing-page/LeadGeneration';
import LeadDistribution from './landing-page/LeadDistribution';
import LeadManagement from './landing-page/LeadManagement';
import MarketingAutomation from './landing-page/MarketingAutomation';
import DealManagement from './landing-page/DealManagement';
import WhyMagloCrmSection from './landing-page/WhyMagloSection';
import StartTrial from './landing-page/StartTrial';
import Footer from './landing-page/Footer';
import Modal from './landing-page/Modal';

const MainPage = () => {
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

export default MainPage