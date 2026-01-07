import React from "react";
import {
  GraduationCap,
  BookOpen,
  FileText,
  Lightbulb,
  Award,
  Users,
} from "lucide-react";
import Image from "next/image";
import NavbarV2 from "@/components/landing-page-v2/navbar-v2";

const AboutPage = () => {
  const skills = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Thesis & Dissertation Writing",
      description:
        "Expert guidance for M.Tech & PhD scholars from topic selection to final submission with comprehensive support.",
      features: [
        "Topic selection & problem formulation",
        "Literature review (IEEE/Springer/Elsevier)",
        "MATLAB/Python/NS2/NS3/IoT/AI-ML support",
        "Plagiarism reduction & proofreading",
      ],
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Research Paper Publication",
      description:
        "Professional research paper writing and publication services in SCI, Scopus & UGC indexed journals.",
      features: [
        "Research paper drafting (IEEE/Springer format)",
        "Journal selection based on impact factor",
        "Paper restructuring per reviewer comments",
        "Fast-track publication options",
      ],
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Patent Support",
      description:
        "Complete patent design, drafting, and filing assistance for academic and startup innovations.",
      features: [
        "Patent idea evaluation & novelty search",
        "Patent specification drafting",
        "Flow diagrams & technical drawings",
        "Indian patent filing support",
      ],
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Academic Research",
      description:
        "Comprehensive research support with methodology design and implementation assistance.",
      features: [
        "Methodology & system design",
        "Implementation & result analysis",
        "Thesis formatting per university guidelines",
        "Viva preparation & PPT support",
      ],
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Quality Assurance",
      description:
        "Rigorous quality control ensuring originality, accuracy, and adherence to academic standards.",
      features: [
        "Plagiarism check & grammar correction",
        "Multiple rounds of review",
        "Formatting compliance verification",
        "Timely delivery guarantee",
      ],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Consulting & Research",
      description:
        "Market research and consulting services to help understand research needs and strategy.",
      features: [
        "Research strategy consulting",
        "Market analysis for research topics",
        "Academic project planning",
        "Innovation roadmap development",
      ],
    },
  ];

  const stats = [
    {
      label: "Total Projects",
      value: "1951+",
      subtext: "Increase of 126 this month",
    },
    { label: "Years of Service", value: "6+", subtext: "Dedicated Excellence" },
    {
      label: "Client Satisfaction",
      value: "4.1★",
      subtext: "From 80+ reviews",
    },
    { label: "Success Rate", value: "100%", subtext: "Quality Guaranteed" },
  ];

  return (
    <>
      <NavbarV2 />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">About GyanSolution</h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              We help M.Tech and PhD scholars transform ideas into high-quality
              research outputs. From topic selection to final submission,
              publication, and patent drafting—our academic experts ensure
              accuracy, originality, and timely delivery.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto px-6 -mt-10">
          <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section with Image */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Section */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-80 h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl transform rotate-3"></div>
                <Image
                  src="/images/gyan.jpeg"
                  alt="Founder - GyanSolution"
                  className="relative rounded-2xl shadow-2xl w-full h-full object-cover"
                  width={400}
                  height={600}
                />
              </div>
            </div>

            {/* Mission Statement */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide end-to-end thesis, research paper, and patent support
                that empowers scholars to achieve academic excellence and
                innovation. We bridge the gap between ideas and implementation
                with expert guidance and proven methodologies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 6 years of dedicated service and 1951+ successful
                projects, we've helped researchers across India transform their
                academic aspirations into reality. Our team of experienced
                mentors and technical experts work closely with each scholar to
                ensure quality, originality, and timely delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Our Expertise & Services
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Comprehensive academic support across all stages of research and
            innovation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-gray-100"
              >
                <div className="text-indigo-600 mb-4">{skill.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {skill.description}
                </p>
                <ul className="space-y-2">
                  {skill.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-700 flex items-start"
                    >
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Research Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              From ideas to practical implementation in days. Let our expert
              team guide you to success.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
