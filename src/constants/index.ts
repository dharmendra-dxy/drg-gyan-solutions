import {
  CreditCard,
  Megaphone,
  Zap,
  Settings,
  Layers,
  Wrench,
  ShieldCheck,
  Package,
  BarChart3,
} from "lucide-react";


export const MODAL_DELAY = 100*1000;


/* 
-------------------------------------------
Services Data
-------------------------------------------
*/
export const services = [
  {
    title: "Production and Assembly",
    description:
      "Details on production processes, assembly, capacity, and product types.",
    icon: Settings,
  },
  {
    title: "Custom Manufacturing",
    description:
      "Custom product creation with design and customization options.",
    icon: Layers,
  },
  {
    title: "Quality Control",
    description:
      "Procedures and systems in place to ensure high product quality.",
    icon: Wrench,
  },
  {
    title: "Technology and Innovation",
    description:
      "Details on the latest manufacturing technologies and innovations.",
    icon: ShieldCheck,
  },
  {
    title: "Packaging and Logistics",
    description:
      "Packaging and logistics for shipping to customers and distributors.",
    icon: Package,
  },
  {
    title: "Consulting Market Research",
    description:
      "Services to help companies understand market needs and strategy.",
    icon: BarChart3,
  },
];


/* 
-------------------------------------------
Features Data
-------------------------------------------
*/
export interface Features {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

export const features: Features[] = [
  {
    icon: Zap,
    title: "Move fast with your sales processes",
    description:
      "Elevate sales efficiency, identify course sales opportunities, and convert more learners",
    features: [
      "Sales Execution & Automation",
      "Sales Tracking & Performance",
      "Sales Process Designer",
      "Sales Reporting",
      "Field Force Automation",
    ],
  },
  {
    icon: Megaphone,
    title: "Get the word out with your marketing",
    description:
      "Attract right learners, hyper-personalize engagements based on insights, and optimize enrollment marketing spends",
    features: [
      "Lead Capture & Centralization",
      "Marketing Automation",
      "Workflow Automation",
      "Advanced Campaign Management",
      "Raw Data Management",
    ],
  },
  {
    icon: CreditCard,
    title: "Make fee payments faster and easier",
    description:
      "Run discount and scholarship campaigns, generate payment links, and track sales campaign effectiveness",
    features: [
      "Extensive Fee Workflows",
      "Payment Link Generation",
      "Payment Settlement in Multiple Accounts",
      "Reconciliation & Settlement Reports",
    ],
  },
];


/* 
-------------------------------------------
Details Data
-------------------------------------------
*/

export interface Details {
  title: string;
  heading: string;
  description: string;
  features?: string[];
  imgUrl: string;
}

export const detailsData: Details[] = [
  {
    title: "Lead Centralization & Management",
    heading: "App installs, API or an online inquiry, capture them all",
    description:
      "Centralize learner inquiries from various channels all while ensuring zero lead leakage and eliminating duplicate leads. Monitor the lead source performances and get actionable insights into the leads in the pipeline.",
    features: [
      "Real-Time Source Tracking",
      "Dynamic Distribution",
      "Lead Verification",
      "Lead Ad & Remarketing Connectors",
      "Custom Fields & Tags",
      "Sales Signals (Lead Score and Strength)",
    ],
    imgUrl: "/edtech-crm/details-1.webp",
  },
  {
    title: "Sales Management & Process Designer",
    heading: "Ensure high sales efficiency",
    description:
      "Distribute leads among the right sales reps based on course, location, availability, language, or performance record. Prioritize sales efforts whenever a learner shows high intent, and nurture them down the enrollment funnel",
    features: [
      "Smart Views",
      "Advanced Lead Distribution",
      "Opportunity Management",
      "User Management",
      "Sales Tracking",
      "360° Communication Suite",
    ],
    imgUrl: "/edtech-crm/details-2.webp",
  },
  {
    title: "Conversions",
    heading: "Boost conversions with Modern Engagement Tools",
    description:
      "Connect, communicate, and convert more with a powerful set of innovative solutions to boost student engagement and drive enrollment growth.",
    features: [
      "Engage one-on-one with WhatsApp Live Chat",
      "Get real-time notifications on student actions",
      "Scale outreach with voice",
      "broadcast campaigns",
      "Provide 24/7 support to prospective students",
    ],
    imgUrl: "/edtech-crm/details-3.webp",
  },
  {
    title: "User Management",
    heading: "Take complete control with advanced user management",
    description:
      "Define teams and hierarchy to group sales teams based on different geographies, courses, verticals, and other custom logics to enable data sharing based on permission. Mask your potential learner’s data to securely manage it.",
    features: [
      "Role Based Access",
      "Teams & Hierarchy Management",
      "User Session and Audit Log",
      "Data Masking",
      "Restricted IP Access",
      "Permission Template",
    ],
    imgUrl: "/edtech-crm/details-4.webp",
  },
  {
    title: "Marketing Communication & Automation",
    heading: "Get the word out about your programs and courses",
    description:
      "Automate your entire Marketing Communication efforts across channels like Email, SMS, or WhatsApp based on your potential learner’s activity. Strategize the perfect outreach with advanced communication workflows that delivers a hyper-personalized experience.",
    features: [
      "360° Communication Suite",
      "WhatsApp Business API",
      "Remarketing Connectors",
      "Purpose-built Education Chatbot",
      "Drip Marketing Automation and Workflow Builder",
      "Communication Performance Reports & Tracking",
    ],
    imgUrl: "/edtech-crm/details-5.webp",
  },
  {
    title: "Sales Reporting & Performance Management",
    heading: "Measure, benchmark, & enhance your sales team’s efforts",
    description:
      "Get 360° visibility into your sales team’s performance. Know your best-performing sales agents, the bottlenecks that hold others back from converting more learners, and optimize your sales campaigns in real-time.",
    features: [
      " Real-Time Performance Tracking",
      "Missed Opportunity Analysis",
      "Sales Rep-wise Performance",
      "Team-wise Reports",
      "Calling Reports",
      "Lead Engagement Reports",
    ],
    imgUrl: "/edtech-crm/details-6.webp",
  },
  {
    title: "Campaign Management",
    heading: "Maximize your Marketing Campaign’s ROI",
    description:
      "Track, measure, and optimize the efficiency of all your enrollment marketing campaigns in real time and maximize the ROI from your marketing spends. Stay on top of your conversion tracking from inquiries and applications.",
    features: [
      "Campaign Dashboard",
      "Comparative Benchmarking",
      "Lead Verification Index",
      "Channel & Inventory Classification",
      "Mutually Exclusive Impact (MEI)",
      "Source Performance Report",
    ],
    imgUrl: "/edtech-crm/details-7.webp",
  },
];



/* 
-------------------------------------------
Whatsapp integration Data
-------------------------------------------
*/
export interface WhatsappIntegrationType {
  heading: string;
  description: string;
  features: string[];
  imgUrl: string;
}

export const whatsappIntegrationData: WhatsappIntegrationType[] = [
  {
    heading: "Broadcast campaigns with confidence that drives action",
    description:
      "Reach the right students at scale with program launches, scholarship updates, event invites, and webinar promotions, all sent directly from Meritto CRM. Every reply creates or enriches a lead record, keeping your funnel accurate and alive.",
    features: [
      "Add CTAs and quick reply buttons to boost responses",
      "Automatically capture replies as leads in CRM",
    ],
    imgUrl: "/whatsapp/whatsapp-feature-1.webp",
  },
  {
    heading:
      "Manage custom templates for instant communication & better delivery",
    description:
      "Manage interactive templates for your most-used WhatsApp messages from welcomes to application updates, ready for quick use and personalization. Categorize, customize, and send in seconds while ensuring strong deliverability and account health.",
    features: [
      "Organize templates under marketing, utility, or service for faster access",
      "Monitor Meta approvals and quality ratings directly within Maglo",
    ],
    imgUrl: "/whatsapp/whatsapp-feature-2.webp",
  },
  {
    heading: "Capture details with customizable forms, inside every chat",
    description:
      "Build interactive forms that open directly inside a WhatsApp chat, making it simple for your students to share details, preferences, and choices without having to leave WhatsApp, which means a smoother and engaging experience.",
    features: [
      "Collect feedback and surveys after webinars or events within WhatsApp.",
      "Auto-sync details into CRM for context-rich follow-ups",
    ],
    imgUrl: "/whatsapp/whatsapp-feature-3.webp",
  },
];
