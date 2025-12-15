interface Props {
  openModal: () => void;
}

const SuperpowersSection = ({ openModal }: Props) => {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <section className="w-full max-w-6xl rounded-[32px] bg-[#f9ecff] px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1.6fr] lg:items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Logo + heading */}
            <div className="space-y-4">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-black text-white text-xl font-bold">
                U
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl font-bold leading-tight text-[#111827] md:text-4xl">
                  One Platform. Multiple Superpowers.
                </h2>
                <p className="max-w-xl text-[15px] leading-relaxed text-[#4b5563]">
                  AI webchat, Helpdesk, and CRM that work together out of the
                  box.
                </p>
              </div>
            </div>

            {/* Feature grid (left text blocks) */}
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              {/* 1 */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#111827]">
                  AI Chatbot + CRM In 2 Minutes
                </h3>
                <p className="text-[15px] leading-relaxed text-[#4b5563]">
                  Launch, answer 95% of FAQs, and track every lead. No extra
                  tools.
                </p>
              </div>

              {/* 2 */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#111827]">
                  Built-In Automation
                </h3>
                <p className="text-[15px] leading-relaxed text-[#4b5563]">
                  Reply where your customers already are.
                </p>
              </div>

              {/* 3 */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#111827]">
                  Stop Paying For Add-Ons
                </h3>
                <p className="text-[15px] leading-relaxed text-[#4b5563]">
                  Automation in-built &amp; requires no add-ons, zero Zapier
                  fees.
                </p>
              </div>

              {/* 4 */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#111827]">
                  Talk, Track, And Close
                </h3>
                <p className="text-[15px] leading-relaxed text-[#4b5563]">
                  Engage, qualify, and convert without juggling apps.
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={openModal}
              className="mt-2 inline-flex items-center justify-center rounded-[999px] bg-[#6d28d9] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-400/50 transition hover:bg-[#5b21b6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f9ecff]"
            >
              Get Started →
            </button>
          </div>

          {/* RIGHT SIDE – CARDS GRID */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <article className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="h-40 w-full bg-[#305c92]" />
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-base font-semibold text-[#111827]">
                  Integrated CRM
                </h3>
                <p className="text-sm leading-relaxed text-[#4b5563]">
                  Seamlessly integrate customer relationship management to
                  enhance communication and lead tracking.
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="h-40 w-full bg-[#f59e0b]" />
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-base font-semibold text-[#111827]">
                  Helpdesk
                </h3>
                <p className="text-sm leading-relaxed text-[#4b5563]">
                  Efficiently manage support tickets and provide timely
                  resolutions to improve customer satisfaction.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="h-40 w-full bg-[#2563eb]" />
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-base font-semibold text-[#111827]">
                  Marketing Automation
                </h3>
                <p className="text-sm leading-relaxed text-[#4b5563]">
                  Streamline marketing campaigns with automated workflows to
                  boost engagement and conversions.
                </p>
              </div>
            </article>

            {/* Card 4 */}
            <article className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="h-40 w-full bg-[#ec4899]" />
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-base font-semibold text-[#111827]">
                  Invoicing
                </h3>
                <p className="text-sm leading-relaxed text-[#4b5563]">
                  Generate professional invoices and track payments effortlessly
                  to optimize cash flow.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SuperpowersSection;
