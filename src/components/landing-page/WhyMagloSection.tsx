// components/WhyZniCrmSection.tsx
import type { FC } from "react";
import Image from "next/image";

const WhyMagloCrmSection: FC = () => {
  return (
    <section className="w-full px-4 py-10 md:py-14 lg:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        {/* HEADING */}
        <div className="mb-10 text-center md:mb-14 lg:mb-16">
          <p className="text-[20px] font-semibold leading-snug text-[#111827] md:text-[22px]">
            Why{" "}
            <span className="inline-flex items-center justify-center rounded-sm bg-[#1994ff] px-2 py-0.5 text-white">
              MAGLO
              <span className="ml-1 font-bold">CRM</span>
            </span>{" "}
            Is The Best Choice For Your Business!
          </p>
        </div>

        {/* CONTENT: IMAGE LEFT | CARDS RIGHT */}
        <div className="grid w-full gap-10 md:gap-12 lg:grid-cols-2 lg:items-start mb-2">
          {/* LEFT – ILLUSTRATION IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-[320px] w-[260px] sm:h-[360px] sm:w-[300px] md:h-[420px] md:w-[360px] lg:h-[460px] lg:w-[380px]">
              <Image
                src="/maglo-crm-v3/crm-features.png" // <-- put your image here
                alt="Analytics and business person illustration"
                width={810}
                height={1440}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* RIGHT – FEATURE CARDS */}
          <div className="flex flex-col gap-3 mt-20 sm:mt-0">
            {/* CARD 1 */}
            <FeatureCard
              title="Affordable Pricing"
              description="Most affordable CRM available in the market with single price and all features. No need to upgrade for anything."
              icon="/maglo-crm-V3/Contact-Management.png"
            />

            {/* CARD 2 */}
            <FeatureCard
              title="All-in-One Solution"
              description="Manage leads, sales, customer data, and workflows in one place."
              icon="/maglo-crm-V3/Marketing-Automation.png"
            />

            {/* CARD 3 */}
            <FeatureCard
              title="Easy-to-Use Interface"
              description="Simple, intuitive design – no technical skills required."
              icon="/maglo-crm-V3/Contact-Management.png"
            />

            {/* CARD 4 */}
            <FeatureCard
              title="Mobile-Friendly"
              description="Manage your business on the go with our mobile apps."
              icon="/maglo-crm-V3/Marketing-Automation.png"
            />

            {/* CARD 5 */}
            <FeatureCard
              title="Integrations"
              description="Seamlessly connect with email, WhatsApp, and popular business tools."
              icon="/maglo-crm-V3/Contact-Management.png"
             
            />

            {/* CARD 6 */}
            <FeatureCard
              title="24/7 Support"
              description="Dedicated customer support to resolve your queries anytime."
              icon="/maglo-crm-V3/Marketing-Automation.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// interface FeatureCardProps {
//   title: string;
//   description: string;
// }

// const FeatureCard: FC<FeatureCardProps> = ({ title, description }) => {
//   return (
//     <article className="flex w-full items-start gap-4 rounded-[6px] border border-[#e5e7eb] bg-white px-5 py-4 shadow-[0_0_0_1px_rgba(229,231,235,0.6)]">
//       {/* ICON CIRCLE (placeholder – replace if you have real icons) */}
//       <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#e5e7eb] bg-[#f1fbff] text-xl">
//         📊
//       </div>

//       {/* TEXT */}
//       <div className="flex flex-1 flex-col">
//         <h3 className="mb-1 text-sm font-semibold text-[#111827] md:text-[15px]">
//           {title}
//         </h3>
//         <p className="mb-2 text-xs leading-relaxed text-[#4b5563] md:text-[13px]">
//           {description}
//         </p>
//         <button className="text-[12px] font-semibold text-[#1994ff] hover:underline">
//           Learn more
//         </button>
//       </div>
//     </article>
//   );
// };

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description,icon }) => {
  return (
    <article
      className="
      flex w-full items-start gap-4 rounded-xl border border-[#e5e7eb] 
      bg-white px-6 py-5 shadow-sm transition-all duration-200 
      hover:shadow-md hover:-translate-y-[2px]
    "
    >
      {/* ICON */}
      <div
        className="
          mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center 
          rounded-xl bg-gradient-to-br from-[#e8f7ff] to-[#f4fbff] 
          border border-[#d6e9f5] shadow-sm text-xl
        "
      >
        <Image
          alt="Analytics and business person illustration"
          width={56}
          height={56}
          src={icon}
        ></Image>
      </div>

      {/* TEXT CONTENT */}
      <div className="flex flex-1 flex-col">
        <h3 className="mb-1 text-[16px] font-semibold text-[#0f172a] leading-tight">
          {title}
        </h3>

        <p className="mb-3 text-[13px] leading-relaxed text-[#475569]">
          {description}
        </p>

        {/* CTA */}
        <button
          className="
            group inline-flex items-center gap-1 text-[13px] font-semibold 
            text-[#0f7ae5] hover:text-[#0563c9] transition-colors
          "
        >
          Learn more
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </article>
  );
};

export default WhyMagloCrmSection;
