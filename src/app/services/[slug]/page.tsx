import { ArrowRight, CheckCircle, Mail, Phone, Star } from "lucide-react";
import { servicesData } from "../page";
import Link from "next/link";

const page = async({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Service not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-emerald-700 to-emerald-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-white">{service.icon}</div>
            <h1 className="text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            {service.description}
          </p>
          <div className="flex items-center gap-8 mt-8">
            <div>
              <p className="text-blue-200 text-sm">Delivery Time</p>
              <p className="text-xl font-semibold">{service.deliveryTime}</p>
            </div>
            <div>
              <p className="text-blue-200 text-sm">Pricing</p>
              <p className="text-xl font-semibold">{service.price}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Service Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-linear-to-r from-indigo-50 to-blue-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Benefits
              </h2>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl p-8 sticky top-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get Started Today
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
                <textarea
                  placeholder="Project Details"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
                />
                <button className="w-full bg-linear-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all">
                  Request Quote
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">
                  Need help? Contact us:
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+919992390946"
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 9992390946</span>
                  </a>
                  <a
                    href="mailto:info@gyansolution.com"
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">info@gyansolution.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(servicesData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedService]) => (
                <Link
                  key={key}
                  href={`/servies/${key}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 cursor-pointer"
                >
                  <div className="text-indigo-600 mb-3">
                    {relatedService.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {relatedService.description}
                  </p>
                  <div className="flex items-center text-indigo-600 font-semibold">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
