"use client";

import { MODAL_DELAY } from "@/constants";
import React, { useEffect, useRef, useState } from "react";

const UseModal = () => {

  /* 
  ---------------------------------------------------------
  Use states
  ---------------------------------------------------------
  */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalSubHeading, setModalSubHeading] = useState("");


  /* 
  ---------------------------------------------------------
  Use effect and useRef
  ---------------------------------------------------------
  */

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startModalTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setIsModalOpen(true);
    }, MODAL_DELAY);
  };

  useEffect(() => {
    startModalTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  /* 
  ---------------------------------------------------------
  handlers
  ---------------------------------------------------------
  */

  const handleModalOpen = (heading?: string, subHeading?: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    heading && setModalHeading(heading);
    subHeading && setModalSubHeading(subHeading);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalHeading("");
    startModalTimer();
  };

  return {
    isModalOpen,
    modalHeading,
    modalSubHeading,
    handleModalClose,
    handleModalOpen
  }
};

export default UseModal;
