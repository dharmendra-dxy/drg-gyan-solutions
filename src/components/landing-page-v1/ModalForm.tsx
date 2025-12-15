// components/RegisterForm.tsx
"use client";

import UseRegistartionForm from "@/hooks/user-registration-form";

interface Props {
  onClose: () => void;
}

const ModalForm = ({ onClose }: Props) => {
  const {
    formData,
    emailError,
    phoneError,
    isLoading,
    submitStatus,
    setFormData,
    handleSubmit,
    handleInputChange,
  } = UseRegistartionForm();

  return (
    // Modal overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      {/* Modal card */}
      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-2 sm:px-4">
          {/* Left placeholder to keep title centered */}
          <div className="h-8 w-8"></div>

          {/* Center title */}
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl text-center flex-1">
            Register Now
          </h2>

          {/* Close button on right */}
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="text-lg leading-none">&times;</span>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 sm:px-8 sm:py-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1 */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-800">
                Partner Details
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {emailError && (
                    <p className="mt-1 text-xs text-red-500">{emailError}</p>
                  )}
                </div>

                {/* Company Address */}
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Company Address
                  </label>
                  <input
                    type="text"
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleInputChange}
                    required
                    placeholder="Company Address"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-800">
                User Details
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Phone Number */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
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
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {phoneError && (
                    <p className="mt-1 text-xs text-red-500">{phoneError}</p>
                  )}
                </div>

                {/* Total Number Of Persons */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Total Number Of Persons
                  </label>
                  <input
                    type="number"
                    name="totalPersons"
                    value={formData.totalPersons}
                    onChange={handleInputChange}
                    required
                    placeholder="0"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 w-full rounded-lg bg-[#0b4abf] py-3 text-sm font-semibold text-white transition hover:bg-[#083a96] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Submitting..." : "Register Now"}
              </button>

              {submitStatus.message && (
                <p
                  className={`mt-3 text-center text-xs font-medium ${
                    submitStatus.success ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
