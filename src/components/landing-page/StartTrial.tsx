// components/HeroSection.tsx

import Image from "next/image";

interface Props {
  openModal: () => void;
}

const StartTrial = ({openModal}: Props) => {
  return (
    <section className="w-full bg-white ">
      {/* Outer container to control max width + centering */}
      <div className="mx-auto flex min-h-[320px] max-w-6xl items-center justify-between px-4 py-12 md:min-h-[420px] md:px-10 lg:px-16 lg:py-16">
        {/* Left: Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-center text-[28px] font-semibold leading-tight text-black sm:text-[32px] md:text-left md:text-[40px] lg:text-[44px]">
            Ready To Supercharge Your Business?
          </h1>

          <p className="mt-4 max-w-xl text-center text-[15px] leading-relaxed text-gray-700 md:text-left md:text-[16px]">
            Start your free trial today and see how our CRM transforms your
            operations!
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <button
              type="button"
              onClick={openModal}
              className="rounded-none bg-[#2980e9] px-8 py-3 text-sm font-semibold text-white md:text-base"
            >
              Start Your Trial
            </button>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="hidden w-1/2 justify-end md:flex">
         
          <div className="relative h-[280px] w-[360px] lg:h-[340px] lg:w-[440px]">
            <Image
              src="/maglo-crm-v3/crm-definition.png"
              alt="CRM geometric illustration"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartTrial;
