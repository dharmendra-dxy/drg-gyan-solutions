// app/components/Footer.tsx (or wherever you keep components)
"use client";

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#e5f4ff] flex flex-col">
    <footer className="w-full bg-[#e5f4ff]">
      <div className="mx-auto flex min-h-[120px] max-w-6xl flex-col items-center justify-center px-4 py-8">
        {/* Logo */}
        <div className="relative mb-4 h-[40px] w-[200px]">
          {/* Put your own logo src here */}
          <Image
            src="/maglo-crm-v3/maglo-logo.png"
            alt="Logo"
            fill
            className="object-contain"
            sizes="200px"
            priority
          />
        </div>

        {/* Company text */}
        <p className="mb-2 text-center text-[13px] leading-[1.4] text-[#333333]">
          © Intuerias Technology Private Limited, All Rights Reserved
        </p>

        {/* Call / WA line */}
        <p className="text-center text-[13px] leading-[1.4] text-[#333333]">
          Call:{" "}
          <a
        
            className="text-[#0066ff] hover:underline"
          >
           99999 99999
          </a>
          <span className="mx-1"> | </span>
          WA:{" "}
          <a
            href="https://wa.me/99999 99999"
            className="text-[#0066ff] hover:underline"
          >
            99999 99999
          </a>
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
