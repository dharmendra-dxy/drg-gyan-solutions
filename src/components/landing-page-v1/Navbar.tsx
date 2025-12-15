
"use client";

import Image from "next/image";

interface Props {
    openModal: () => void;
}

const Navbar= ({openModal}: Props) => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-3 sm:px-8 md:px-10 lg:px-12">
        {/* LEFT: Logo (more left-aligned, responsive width) */}
        <div className="flex min-w-0 items-center">
          <div className="relative h-8 w-[140px] sm:h-9 sm:w-[180px] md:h-10 md:w-[220px] lg:h-10 lg:w-[260px]">
            <Image
              src="/maglo-crm-v3/maglo-logo.png"
              alt="Maglo Logo"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 140px, (max-width: 1024px) 220px, 260px"
            />
          </div>
        </div>

        {/* RIGHT: Nav items */}
        <nav className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Top link */}
          {/* <button
            type="button"
            className="hidden items-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-gray-600 transition hover:bg-slate-100 sm:inline-flex sm:text-sm"
          >
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="h-4 w-4 text-gray-500"
            >
              <path
                d="M10 2.5 3 8.25V17h4.25v-4.5h5.5V17H17V8.25L10 2.5Z"
                fill="currentColor"
              />
            </svg>
            <span>Top</span>
          </button> */}

          {/* Pricing (outline button) */}
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-1 rounded-full border border-[#4da3ff] bg-white px-3 py-1 text-xs font-medium text-gray-700 leading-none transition hover:bg-[#e6f2ff] sm:text-sm sm:px-4"
          >
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="h-4 w-4 text-gray-600"
            >
              <rect
                x="2.5"
                y="5"
                width="15"
                height="10"
                rx="1.5"
                ry="1.5"
                stroke="currentColor"
                fill="none"
              />
              <circle cx="10" cy="10" r="2.25" fill="currentColor" />
            </svg>
            <span>Register</span>
          </button>

          {/* Start Your Trial (solid blue button) */}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#39a5ff] px-3 py-1 text-xs font-semibold text-white leading-none shadow-sm transition hover:bg-[#1f8ce8] hover:shadow-md sm:px-5 sm:text-sm"
          >
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <rect
                x="3"
                y="4"
                width="14"
                height="10"
                rx="1.5"
                ry="1.5"
                fill="currentColor"
              />
              <rect x="7" y="15" width="6" height="1.5" rx="0.75" fill="currentColor" />
            </svg>
            <span 
            onClick={openModal}
            className="text-nowrap">Start Your Trial</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
