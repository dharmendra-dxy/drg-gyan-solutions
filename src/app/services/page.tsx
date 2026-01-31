import {
  FileText,
  BookOpen,
  Award,
  Code,
  Radio,
  FileCheck,
  TrendingUp,
  GraduationCap,
  CheckCircle,
  Clock,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";

// Service data
export const servicesData = {
  "paper-writing": {
    title: "Research Paper Writing",
    icon: <FileText className="w-12 h-12" />,
    description:
      "Comprehensive research paper writing services for M.Tech and PhD scholars with expert guidance from topic selection to final draft.",
    longDescription:
      "Our research paper writing service provides end-to-end support for creating high-quality academic papers. We assist scholars in formulating research questions, conducting literature reviews, developing methodology, analyzing data, and presenting findings in a clear, publishable format.",
    features: [
      "Topic selection and problem formulation",
      "Comprehensive literature review",
      "Methodology design and development",
      "Data analysis and interpretation",
      "Results presentation and discussion",
      "Abstract and conclusion writing",
      "Citations and references (IEEE/APA/MLA)",
      "Multiple revision rounds",
    ],
    benefits: [
      "Expert academic writers with PhD credentials",
      "Plagiarism-free original content",
      "Adherence to academic standards",
      "Timely delivery guaranteed",
      "Free revisions until satisfaction",
    ],
    deliveryTime: "10-15 days",
    price: "Starting from ₹15,000",
  },
  "paper-publication": {
    title: "Paper Publication Support",
    icon: <BookOpen className="w-12 h-12" />,
    description:
      "Professional assistance in publishing your research papers in reputed national and international journals.",
    longDescription:
      "Navigate the complex publication process with our expert support. We help you identify the right journals, format your paper according to specific guidelines, and manage the entire submission and revision process.",
    features: [
      "Journal identification and selection",
      "Paper formatting as per journal guidelines",
      "Cover letter and submission assistance",
      "Reviewer comments response",
      "Revision and resubmission support",
      "Communication with editors",
      "Publication tracking",
      "Fast-track publication options",
    ],
    benefits: [
      "Access to 1000+ journal databases",
      "High acceptance rate (85%+)",
      "Expert guidance throughout the process",
      "Multiple journal suggestions",
      "Dedicated publication manager",
    ],
    deliveryTime: "30-90 days",
    price: "Starting from ₹20,000",
  },
  "sci-paper-publication": {
    title: "SCI Paper Publication",
    icon: <Award className="w-12 h-12" />,
    description:
      "Specialized support for publishing papers in SCI (Science Citation Index) indexed journals with high impact factors.",
    longDescription:
      "Publishing in SCI journals requires exceptional quality and rigorous methodology. Our team of experts ensures your research meets the highest standards and gets published in prestigious SCI-indexed journals.",
    features: [
      "SCI journal selection based on impact factor",
      "Quality enhancement and peer review",
      "Advanced statistical analysis support",
      "Manuscript preparation to SCI standards",
      "Response to rigorous reviewer comments",
      "Impact factor optimization strategies",
      "Citation improvement techniques",
      "Post-publication promotion",
    ],
    benefits: [
      "Target journals with IF 2.0+",
      "Expert reviewers and editors",
      "Comprehensive quality checks",
      "High publication success rate",
      "Career advancement support",
    ],
    deliveryTime: "60-120 days",
    price: "Starting from ₹50,000",
  },
  "ieee-conference-paper": {
    title: "IEEE Conference Paper",
    icon: <TrendingUp className="w-12 h-12" />,
    description:
      "Complete support for IEEE conference paper preparation, submission, and presentation with technical excellence.",
    longDescription:
      "IEEE conferences are prestigious platforms for showcasing research. We help you prepare conference-ready papers that meet IEEE standards and make a strong impact in your field.",
    features: [
      "IEEE format compliance",
      "Conference identification and selection",
      "Abstract and full paper preparation",
      "Technical content development",
      "Presentation slide creation",
      "Poster design (if required)",
      "Submission assistance",
      "Presentation coaching",
    ],
    benefits: [
      "IEEE certified formatting",
      "Quick turnaround time",
      "Presentation skill development",
      "Networking opportunity guidance",
      "Post-conference journal conversion",
    ],
    deliveryTime: "7-14 days",
    price: "Starting from ₹12,000",
  },
  "springer-conference-paper": {
    title: "Springer Conference Paper",
    icon: <FileCheck className="w-12 h-12" />,
    description:
      "Expert assistance for Springer conference paper writing and publication with LNCS/CCIS formatting expertise.",
    longDescription:
      "Springer conferences maintain high academic standards. Our experienced team ensures your paper meets Springer LNCS or CCIS requirements and stands out in competitive review processes.",
    features: [
      "Springer LNCS/CCIS format compliance",
      "Conference selection guidance",
      "Original research development",
      "Manuscript structuring",
      "Copyright form assistance",
      "Camera-ready version preparation",
      "Springer submission portal support",
      "Indexing in Scopus/EI Compendex",
    ],
    benefits: [
      "Springer quality standards",
      "Scopus indexing assurance",
      "Expert technical writers",
      "Fast acceptance rates",
      "International exposure",
    ],
    deliveryTime: "10-20 days",
    price: "Starting from ₹15,000",
  },
  "phd-mtech-report-writing": {
    title: "PhD/M.Tech Report Writing",
    icon: <GraduationCap className="w-12 h-12" />,
    description:
      "Comprehensive thesis and dissertation writing services with complete documentation and formatting support.",
    longDescription:
      "Your thesis is the culmination of years of research. We provide comprehensive support in writing, formatting, and presenting your research work according to your university guidelines.",
    features: [
      "Complete thesis/dissertation writing",
      "Chapter-wise development",
      "Literature survey and gap analysis",
      "Methodology and implementation",
      "Results and discussion",
      "University format compliance",
      "Plagiarism check and reduction",
      "Viva preparation and PPT support",
    ],
    benefits: [
      "University-specific formatting",
      "Subject matter experts",
      "Regular progress updates",
      "Unlimited revisions",
      "Supervisor review support",
    ],
    deliveryTime: "30-60 days",
    price: "Starting from ₹40,000",
  },
  "scopus-indexed-paper": {
    title: "Scopus Indexed Paper Publishing",
    icon: <TrendingUp className="w-12 h-12" />,
    description:
      "Strategic support for publishing research papers in Scopus indexed journals with quality assurance.",
    longDescription:
      "Scopus indexing ensures global visibility of your research. We help you target the right Scopus journals and prepare manuscripts that meet international publication standards.",
    features: [
      "Scopus journal database access",
      "CiteScore and SJR analysis",
      "Manuscript quality enhancement",
      "Plagiarism elimination",
      "Journal-specific formatting",
      "Submission and tracking",
      "Revision support",
      "Q1/Q2 journal targeting",
    ],
    benefits: [
      "Global research visibility",
      "h-index improvement",
      "Career advancement",
      "High-quality journal selection",
      "Expert editorial support",
    ],
    deliveryTime: "45-90 days",
    price: "Starting from ₹35,000",
  },
  "python-matlab-service": {
    title: "Python/MATLAB Implementation",
    icon: <Code className="w-12 h-12" />,
    description:
      "Expert coding and simulation support for research implementation using Python, MATLAB, and other tools.",
    longDescription:
      "Transform your research ideas into working implementations with our expert programming support. We specialize in Python, MATLAB, and various simulation tools for research projects.",
    features: [
      "Algorithm implementation",
      "Data analysis and visualization",
      "Machine learning model development",
      "Statistical analysis",
      "Simulation and modeling",
      "Code optimization",
      "Result generation",
      "Documentation and comments",
    ],
    benefits: [
      "Clean, well-documented code",
      "Industry best practices",
      "Performance optimization",
      "Debugging and testing",
      "Free training session",
    ],
    deliveryTime: "7-21 days",
    price: "Starting from ₹10,000",
  },
  "antenna-design": {
    title: "CST/HFSS Antenna Design",
    icon: <Radio className="w-12 h-12" />,
    description:
      "Professional antenna design and simulation services using CST Studio Suite and Ansys HFSS.",
    longDescription:
      "Design and simulate antennas for various applications using industry-standard tools. Our experts provide complete design, simulation, and optimization services.",
    features: [
      "Antenna design and modeling",
      "CST Studio Suite simulation",
      "HFSS electromagnetic analysis",
      "S-parameter optimization",
      "Radiation pattern analysis",
      "Gain and efficiency calculation",
      "Parametric studies",
      "Design report generation",
    ],
    benefits: [
      "Expert RF engineers",
      "Multiple design iterations",
      "Performance optimization",
      "Detailed analysis reports",
      "Design file delivery",
    ],
    deliveryTime: "10-20 days",
    price: "Starting from ₹15,000",
  },
  "patent-design-filing": {
    title: "Patent Design and Filing",
    icon: <Award className="w-12 h-12" />,
    description:
      "Complete patent drafting and filing services for innovations with legal expertise and IPR support.",
    longDescription:
      "Protect your innovations with our comprehensive patent services. From novelty search to final filing, we handle all aspects of patent application with legal expertise.",
    features: [
      "Patent idea evaluation",
      "Prior art and novelty search",
      "Patent specification drafting",
      "Claims writing",
      "Flow diagrams and illustrations",
      "Provisional/complete application",
      "Indian Patent Office filing",
      "Prosecution support",
    ],
    benefits: [
      "Legal compliance",
      "Patent attorney support",
      "Quick filing process",
      "Affordable pricing",
      "Startup patent assistance",
    ],
    deliveryTime: "15-30 days",
    price: "Starting from ₹20,000",
  },
};

// Main Services Page Component
const page = () => {
  const services = [
    { slug: "paper-writing", ...servicesData["paper-writing"] },
    { slug: "paper-publication", ...servicesData["paper-publication"] },
    { slug: "sci-paper-publication", ...servicesData["sci-paper-publication"] },
    { slug: "ieee-conference-paper", ...servicesData["ieee-conference-paper"] },
    {
      slug: "springer-conference-paper",
      ...servicesData["springer-conference-paper"],
    },
    {
      slug: "phd-mtech-report-writing",
      ...servicesData["phd-mtech-report-writing"],
    },
    { slug: "scopus-indexed-paper", ...servicesData["scopus-indexed-paper"] },
    { slug: "python-matlab-service", ...servicesData["python-matlab-service"] },
    { slug: "antenna-design", ...servicesData["antenna-design"] },
    { slug: "patent-design-filing", ...servicesData["patent-design-filing"] },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-emerald-700 to-emerald-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">M.Tech and PhD Guidance</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Comprehensive academic support services for research scholars - from
            paper writing to publication, implementation to patent filing. Your
            success is our mission.
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-lg">4.1 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-lg">1951+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="text-lg">6+ Years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of academic and technical
            support services tailored for M.Tech and PhD scholars
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`services/${service.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group cursor-pointer"
            >
              <div className="text-emerald-700 mb-4 p-2 w-fit group-hover:scale-110 group-hover:bg-emerald-200 group-hover:rounded-full transition-transform ">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <p className="text-sm text-gray-500">Starting from</p>
                  <p className="text-lg font-bold text-emerald-700">
                    {service.price}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-emerald-700 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-linear-to-r from-indigo-50 to-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose GyanSolution?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600">
                100% original, plagiarism-free content with multiple quality
                checks
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Timely Delivery
              </h3>
              <p className="text-gray-600">
                Committed to deadlines with progress tracking and regular
                updates
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600">
                PhD qualified mentors and industry experts in various domains
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-linear-to-r from-emerald-700 to-emerald-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Excel in Your Research?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized guidance from our experts. Book a free consultation
            today!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
