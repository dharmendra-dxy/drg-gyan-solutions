// components/RegisterForm.tsx
"use client";

import UseRegistartionForm from "@/hooks/user-registration-form";

interface Props {
  thankyouPageUrl: string;
}

const RegisterForm = ({thankyouPageUrl}: Props) => {
  const {
    formData,
    emailError,
    phoneError,
    isLoading,
    submitStatus,
    setFormData,
    handleSubmit,
    handleInputChange,
  } = UseRegistartionForm({thankyouPageUrl});

  return (
    <div className="relative">
      {/* Card */}
      <div className="w-full rounded-[32px] bg-[#050826] p-6 text-white shadow-2xl shadow-indigo-500/40 sm:p-8">
        {/* Badge */}
        <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-[#9ca3ff]">
          <span>Unlimited users</span>
          <span className="rounded-full bg-[#03341f] px-3 py-1 text-[0.65rem] text-[#4ade80]">
            Register now
          </span>
        </div>

        {/* Heading + price-like text */}
        <div className="mb-6 space-y-1">
          <p className="text-sm text-[#9ca3ff]">Get started in 2 minutes</p>
          <p className="text-3xl font-extrabold leading-tight md:text-[2rem] sm:text-nowrap">
            Register for a <span className="text-[#7c5cff]">free demo</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#9ca3ff]">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
              className="w-full rounded-xl border border-white/10 bg-[#060b2a] px-3 py-2 text-sm text-white outline-none placeholder:text-[#6b7280] focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#9ca3ff]">
              Work Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/10 bg-[#060b2a] px-3 py-2 text-sm text-white outline-none placeholder:text-[#6b7280] focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]"
            />
          </div>

          {emailError && (
            <p className="text-red-500 text-xs mb-2">{emailError}</p>
          )}

          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#9ca3ff]">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) {
                  setFormData((prev) => ({ ...prev, phone: value }));
                }
              }}
              required
              placeholder="+91 99999 99999"
              className="w-full rounded-xl border border-white/10 bg-[#060b2a] px-3 py-2 text-sm text-white outline-none placeholder:text-[#6b7280] focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]"
            />
          </div>

          {phoneError && (
            <p className="text-red-500 text-xs mb-2">{phoneError}</p>
          )}

          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#9ca3ff]">
              Company Address
            </label>
            <input
              type="text"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleInputChange}
              required
              placeholder="Company Address"
              className="w-full rounded-xl border border-white/10 bg-[#060b2a] px-3 py-2 text-sm text-white outline-none placeholder:text-[#6b7280] focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#9ca3ff]">
              Total Number Of Persons
            </label>
            <input
              type=""
              name="totalPersons"
              value={formData.totalPersons}
              onChange={handleInputChange}
              required
              placeholder="0"
              className="w-full rounded-xl border border-white/10 bg-[#060b2a] px-3 py-2 text-sm text-white outline-none placeholder:text-[#6b7280] focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]"
            />
          </div>

          {/* Footer line like in screenshot */}
          <p className="pt-1 text-[0.7rem] text-[#9ca3ff]">
            By submitting, you agree to receive product updates and offers. You
            can unsubscribe anytime.
          </p>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 w-full rounded-full bg-[#4f46e5] py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/50 transition hover:bg-[#4338ca] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            {isLoading ? "Submitting...": "Send me proposal"} 
          </button>

          <p className="pt-2 text-[0.65rem] text-[#6b7280]">
            No credit card required. Cancel anytime.
          </p>
        </form>
        {submitStatus.message && (
          <p
            className={`mt-3 text-center font-medium text-xs ${
              submitStatus.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {submitStatus.message}
          </p>
        )}
      </div>

      {/* Optional subtle background geometry mimic (right side) */}
      <div className="pointer-events-none absolute -right-24 -bottom-16 hidden h-72 w-72 rotate-6 rounded-3xl border border-white/5 md:block" />
    </div>
  );
};

export default RegisterForm;
