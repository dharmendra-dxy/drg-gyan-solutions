// components/HeroSection.tsx
import RegisterForm from "./RegisterForm";
import Image from "next/image";

interface Props {
  thankyouPageUrl: string;
  openModal: () => void;
}

export default function HeroSection({ thankyouPageUrl, openModal }: Props) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-12 md:flex-row md:justify-between md:gap-12">
        {/* LEFT CONTENT */}
        <div className="w-full max-w-xl space-y-6 md:space-y-8">
          {/* Heading */}
           <Image
              src="/maglo-crm-v3/maglo-logo.png" // ← replace with actual path
              alt="MAGLO Logo"
              width={200}
              height={120}
              className="h-auto w-[90px] md:w-[200px] lg:w-[200px] -mb-1 sm:-ml-8 -ml-4"
              priority
            />
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-4xl font-extrabold leading-tight text-black md:text-5xl lg:text-[3.25rem]">
              <span className="mr-2">All-in-one</span>
              <span className="text-[#5b3cff]">MAGLO CRM</span>
              <span className="ml-2">for SMBs</span>
            </h1>

            <p className="text-xl font-semibold text-[#111827] md:text-2xl">
              Close more deals with AI follow-ups
            </p>
          </div>

          {/* Sub text */}
          <p className="max-w-lg text-base leading-relaxed text-[#4b5563] md:text-lg">
            Transform the way you manage your customers and grow your business
            with the most affordable and powerful CRM software.
          </p>

          {/* Highlighted strip */}
          <div className="inline-flex w-full max-w-xl items-center gap-2 rounded-xl bg-[#f4f4ff] px-4 py-3 text-sm font-medium text-[#111827] md:text-base">
            <span className="text-lg">⭐</span>
            <span>No Hidden Pricing!</span>
            <span className="mx-2 text-[#9ca3af]">|</span>
            <span>⭐ No Upgrades Required!</span>
          </div>

          {/* CTA Button */}
          <div>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Get Started Now
              <span className="text-lg font-bold">➜</span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE – REGISTER FORM CARD */}
        <div className="mt-10 w-full max-w-md md:mt-0">
          <RegisterForm thankyouPageUrl={thankyouPageUrl} />
        </div>
      </div>
    </section>
  );
}
