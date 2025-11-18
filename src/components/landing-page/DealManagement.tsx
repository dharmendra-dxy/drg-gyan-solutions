
import Image from "next/image";
import { Users, Star } from "lucide-react";

interface Props {
  openModal: () => void;
}

const DealManagement = ({openModal}: Props) => {
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center p-4 -mt-8">
      <section className="w-full max-w-6xl px-6 py-10 md:px-10 lg:px-12 lg:py-12">
        <div className="flex flex-col gap-10 lg:gap-12">
          {/* ROW 1: heading + paragraph  |  top row cards  */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            {/* Left: Icon + Heading + Paragraph */}
            <div className="space-y-8 lg:w-[40%]">
              {/* Small square icon */}
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#d1e2ff] bg-[#eef6fd]">
                <span className="text-black">
                  <Users strokeWidth={2.5} />
                </span>
              </div>

              {/* Heading + paragraph */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold leading-tight text-[#111827] md:text-4xl">
                  Deal Management
                </h2>
                <p className="max-w-md text-[24px] leading-relaxed text-[#111827]">
                  Create & Manage Deals to build sales pipeline.
                </p>
              </div>
            </div>

            {/*  IMAGE: Only for mobile */}
            <div className="sm:hidden lg:w-[40%] md:-mt-24">
              <div className="relative max-w-md">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/maglo-crm-v3/deals.png" // your image
                    alt="Lead Generation illustration"
                    width={600}
                    height={420}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right: TOP ROW CARDS (Card 1 + Card 2) */}
            <div className="lg:w-[60%]">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Card 1 */}
                <article className="flex flex-col rounded-3xl bg-[#eef6fd] p-6 shadow-[0_0_0_1px_rgba(209,213,219,0.7)]">
                  <div className="mb-4 flex items-start justify-between">
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[#d1e2ff] bg-[#eef6fd] text-xs text-[#6b7280]">
                      <Star strokeWidth={1} />
                    </button>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#111827]">
                    Score And Prioritize Leads
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-[#4b5563]">
                    Evaluates and ranks leads by potential, focusing sales
                    efforts on the most promising opportunities for higher
                    conversion rates.
                  </p>
                  {/* <button className="mt-auto text-sm font-semibold text-[#0f7ae5] hover:underline">
                    Engage Lead Generation Tool
                  </button> */}
                </article>

                {/* Card 2 */}
                <article className="flex flex-col rounded-3xl bg-[#eef6fd] p-6 shadow-[0_0_0_1px_rgba(209,213,219,0.7)]">
                  <div className="mb-4 flex items-start justify-between">
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[#d1e2ff] bg-[#eef6fd] text-xs text-[#6b7280]">
                      <Star strokeWidth={1} />
                    </button>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#111827]">
                    Track Every Stage Of The Sales Funnel
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4b5563]">
                    Monitors sales pipeline progress in real-time, providing
                    up-to-date insights and enabling proactive management.
                  </p>
                </article>
              </div>
            </div>
          </div>

          {/* ROW 2: image | bottom row cards */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            {/* Left: IMAGE */}
            <div className="hidden md:block lg:w-[40%] md:-mt-13">
              <div className="relative max-w-md">
                <div className="overflow-hidden">
                  <Image
                    src="/maglo-crm-v3/deals.png" // your image
                    alt="Lead Generation illustration"
                    width={2560}
                    height={1422}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right: BOTTOM ROW CARDS (Card 3 + Card 4) */}
            <div className="lg:w-[60%] flex flex-col gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Card 3 */}
                <article className="flex flex-col rounded-3xl bg-[#eef6fd] p-6 shadow-[0_0_0_1px_rgba(209,213,219,0.7)]">
                  <div className="mb-4 flex items-start justify-between">
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[#d1e2ff] bg-[#eef6fd] text-xs text-[#6b7280]">
                      <Star strokeWidth={1} />
                    </button>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#111827]">
                    Set Reminders For Timely Follow-Ups
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-[#4b5563]">
                    Ensures consistent follow-ups with automated reminders,
                    reducing lead loss and maximizing conversion opportunities.
                  </p>
                  {/* <button className="mt-auto text-sm font-semibold text-[#0f7ae5] hover:underline">
                    Universal Forms
                  </button> */}
                </article>

                {/* Card 4 */}
                <article className="flex flex-col rounded-3xl bg-[#eef6fd] p-6 shadow-[0_0_0_1px_rgba(209,213,219,0.7)]">
                  <div className="mb-4 flex items-start justify-between">
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[#d1e2ff] bg-[#eef6fd] text-xs text-[#6b7280]">
                      <Star strokeWidth={1} />
                    </button>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#111827]">
                    Close Deals Faster
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4b5563]">
                    Accelerates deal closure by offering a comprehensive view of
                    the customer journey, enabling more effective and timely
                    interactions.
                  </p>
                </article>
              </div>
            </div>
          </div>

          {/* BOTTOM BUTTONS */}
          <div className="mt-2 flex flex-col items-center justify-center gap-3 md:flex-row">
            <button
            onClick={openModal}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#d1e2ff] bg-white px-5 py-2.5 text-sm font-semibold text-[#064e3b] shadow-sm hover:bg-[#f9fafb]">
              <span className="text-base">💬</span>
              <span>Chat With Us</span>
            </button>

            <button 
            onClick={openModal}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#14532d] bg-[#14532d] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#166534]">
              <span className="text-base">📞</span>
              <span>Request Call Back</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealManagement;
