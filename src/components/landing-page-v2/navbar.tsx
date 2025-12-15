"use client";

import React, { useEffect, useState } from "react";
import Container from "../common/container";
import Image from "next/image";
import Button from "./button";
import { MoveRight } from "lucide-react";

interface Props {
  handleOpen: (text?: string) => void;
}

const Navbar = ({ handleOpen }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <Container>
        <div className="flex items-center justify-between py-3 transition-all duration-300">
          {/* Maglo logo */}
          <div>
            <Image
              src="/maglo-crm-v3/maglo-logo.webp"
              alt="maglo-logo"
              width={120}
              height={80}
            />
          </div>

          {/* Schedule a call */}
          <Button
            text="Schedule a Demo"
            type="primary"
            icon={MoveRight}
            handleOpen={handleOpen}
            modalText="Schedule a Demo"
          />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
