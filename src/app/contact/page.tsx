"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  User,
  MessageSquare,
  Star,
} from "lucide-react";
import NavbarV2 from "@/components/landing-page-v2/navbar-v2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    service: "",
    topic: "",
    message: "",
  });

  const offices = [
    {
      city: "New Delhi",
      address:
        "Plot No. 45, Sector 18, Institutional Area, Dwarka, New Delhi - 110075",
      phone: "+91 9992390946",
      email: "delhi@gyansolution.com",
      timings: "Mon-Sat: 9:00 AM - 7:00 PM",
    },
    {
      city: "Bangalore",
      address: "3rd Floor, Residency Plaza, M.G. Road, Bangalore - 560001",
      phone: "+91 9876543210",
      email: "bangalore@gyansolution.com",
      timings: "Mon-Sat: 9:00 AM - 7:00 PM",
    },
    {
      city: "Hyderabad",
      address: "Block B, HITEC City, Madhapur, Hyderabad - 500081",
      phone: "+91 9123456789",
      email: "hyderabad@gyansolution.com",
      timings: "Mon-Sat: 9:00 AM - 7:00 PM",
    },
    {
      city: "Pune",
      address: "Office 204, Baner Road, Aundh, Pune - 411007",
      phone: "+91 8765432109",
      email: "pune@gyansolution.com",
      timings: "Mon-Sat: 9:00 AM - 7:00 PM",
    },
  ];

  const keyContact = {
    name: "Gyanendra Gupta",
    designation: "Founder & Director",
    phone: "+91 9992390946",
    email: "gyanendra@gyansolution.com",
  };

  const services = [
    "Thesis & Dissertation Writing",
    "Research Paper Publication",
    "Patent Filing Support",
    "MATLAB/Python Implementation",
    "Literature Review",
    "Plagiarism Reduction",
    "Consultation Services",
  ];

  const avatars = [
    "/users/user-3.webp",
    "/users/user-17.webp",
    "/users/user-4.webp",
    "/users/user-18.webp",
    "/users/user-5.webp",
    "/users/user-19.webp",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <NavbarV2 />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch With Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your research into a publication-ready
              masterpiece? Our expert team is here to guide you every step of
              the way.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Send Us A Message
                </h2>
                <p className="text-gray-600">
                  We provide professional support in research design, editing,
                  proofreading, and academic mentoring - helping you learn,
                  grow, and achieve academic excellence with integrity.
                </p>

                {/* Rating and Avatars */}
                <div className="flex items-center gap-4 mt-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-slate-400">Rated</span>
                    <Star
                      size={16}
                      className="text-yellow-500 fill-yellow-500"
                    />
                    <span className="font-medium">4.1</span>
                    <span className="text-slate-400">By 100+ Students</span>
                  </div>
                  <div className="flex -space-x-3">
                    {avatars.slice(0, 4).map((avatar, idx) => (
                      <img
                        key={idx}
                        src={avatar}
                        alt="avatar"
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Personal Details */}
                <div>
                  <p className="text-gray-500 font-semibold mb-3 text-sm">
                    Enter Your Details
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition mt-4"
                  />
                </div>

                {/* Project Details */}
                <div>
                  <p className="text-gray-500 font-semibold mb-3 text-sm">
                    Enter Your Requirements
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-gray-700"
                    >
                      <option value="">Select Your Course</option>
                      <option value="mtech">M.Tech</option>
                      <option value="phd">PhD</option>
                      <option value="msc">M.Sc</option>
                      <option value="be">B.E/B.Tech</option>
                    </select>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-gray-700"
                    >
                      <option value="">Select Service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="text"
                    name="topic"
                    placeholder="Enter Paper Topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition mt-4"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Additional Comments or Requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={18} />
                  Submit Request
                </button>
              </div>
            </div>

            {/* Right Side - Contact Information */}
            <div className="space-y-6">
              {/* Key Contact */}
              <div className="bg-gradient-to-r from-emerald-800 to-emerald-800 text-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-8 h-8" />
                  <div>
                    <h3 className="text-2xl font-bold">{keyContact.name}</h3>
                    <p className="text-blue-100">{keyContact.designation}</p>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <a
                      href={`tel:${keyContact.phone}`}
                      className="hover:text-blue-200 transition"
                    >
                      {keyContact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <a
                      href={`mailto:${keyContact.email}`}
                      className="hover:text-blue-200 transition"
                    >
                      {keyContact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* General Contact */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-indigo-600" />
                  General Inquiries
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a
                        href="mailto:info@gyansolution.com"
                        className="text-gray-600 hover:text-indigo-600 transition"
                      >
                        info@gyansolution.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a
                        href="tel:+919992390946"
                        className="text-gray-600 hover:text-indigo-600 transition"
                      >
                        +91 9992390946
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Business Hours
                      </p>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                      </p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Office Locations
              </h2>
              <p className="text-lg text-gray-600">
                Visit us at any of our offices across major cities in India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <Building2 className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {office.city}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-600 text-sm">
                            {office.address}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-500" />
                          <a
                            href={`tel:${office.phone}`}
                            className="text-indigo-600 hover:text-indigo-700 text-sm"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-500" />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-indigo-600 hover:text-indigo-700 text-sm"
                          >
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <p className="text-gray-600 text-sm">
                            {office.timings}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Research Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 1951+ successful researchers who have transformed their ideas
              into publications with our expert guidance.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
